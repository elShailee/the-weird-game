import { Text } from 'Texts/Text';
import { texts } from 'Texts/texts';
import { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Lodash from 'lodash';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';
import { KeyDownHandler, SwipeHandler } from 'Utils/inputUtils';
import { useScreensContext } from 'Context/ScreensContext';

export const IntroScreen = ({ screenFadeAnimation, fadeToScreen }) => {
	const animationsTimings = {
		textFadeDuration: 500,
		clickHintAnimationDelay: 4000,
	};

	const [introLineIndexState, setIntroLineIndexState] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const { currentScreenTitle } = useScreensContext();

	// animations
	const basicFadeAnimationObject = {
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: animationsTimings.textFadeDuration },
	};
	const mainTextFadeAnimation = useSpring({
		...basicFadeAnimationObject,
		reverse: isTextFadingOutState,
	});
	const clickHintFadeAnimation = useSpring({
		...basicFadeAnimationObject,
		delay: animationsTimings.clickHintAnimationDelay,
	});

	// texts
	const introductionTexts = texts.introScreen.introduction;
	const selectedDialog = useMemo(() => {
		return Lodash.sample(introductionTexts.dialogsSelection);
	}, [introductionTexts]);
	const isOnFirstDialogLine = introLineIndexState === 0;
	const clickHint = isOnFirstDialogLine && (
		<ClickHintContainer style={clickHintFadeAnimation}>
			<Text>{introductionTexts.clickHint}</Text>
		</ClickHintContainer>
	);

	// dialog line funcs
	const dialogLineSkip = () => {
		dialogLineChange(introLineIndexState + 1);
	};
	const dialogLineRewind = () => {
		if (introLineIndexState > 0) {
			dialogLineChange(introLineIndexState - 1);
		}
	};
	const dialogLineChange = newLineIndex => {
		const hasDialogEnded = newLineIndex >= selectedDialog.length;
		setIsTextFadingOutState(true);
		setTimeout(() => {
			if (hasDialogEnded) {
				setTimeout(() => {
					fadeToScreen('money');
				}, animationsTimings.textFadeDuration);
			} else {
				setIntroLineIndexState(newLineIndex);
				setIsTextFadingOutState(false);
			}
		}, animationsTimings.textFadeDuration);
	};

	// keypress handle func
	const handleKeyDown = e => {
		const skippingKeys = ['Enter', 'Escape', 'ArrowRight', 'Space'];
		const rewindingKeys = ['ArrowLeft'];

		const isASkippingKey = skippingKeys.includes(e.code);
		const isARewindingKey = rewindingKeys.includes(e.code);

		if (isASkippingKey) {
			dialogLineSkip();
		} else if (isARewindingKey) {
			dialogLineRewind();
		}
	};

	//swipe handle funcs
	const handleSwipes = {
		left: dialogLineSkip,
		right: dialogLineRewind,
		up: dialogLineSkip,
		down: dialogLineRewind,
	};

	return (
		<SwipeHandler handleSwipes={handleSwipes}>
			<KeyDownHandler handleKeyDown={handleKeyDown}>
				<IntroductionScreenContainer onClick={dialogLineSkip} style={screenFadeAnimation}>
					{currentScreenTitle === 'intro' && (
						<animated.div style={mainTextFadeAnimation}>
							<Text>{selectedDialog[introLineIndexState]}</Text>
							{clickHint}
						</animated.div>
					)}
				</IntroductionScreenContainer>
			</KeyDownHandler>
		</SwipeHandler>
	);
};
