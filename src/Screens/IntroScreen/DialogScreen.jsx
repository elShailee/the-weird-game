import { Text } from 'Texts/Text';
import { texts } from 'Texts/texts';
import { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Lodash from 'lodash';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';
import { KeyDownHandler, SwipeHandler } from 'Utils/inputUtils';
import { useScreensContext } from 'Context/ScreensContext';

export const DialogScreen = ({ animationsTimings }) => {
	const [dialogLineIndexState, setDialogLineIndexState] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const [isUnmountingState, setIsUnmountingState] = useState(false);
	const { setCurrentScreenByTitle } = useScreensContext();

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
	const isOnFirstDialogLine = dialogLineIndexState === 0;
	const clickHint = isOnFirstDialogLine && (
		<ClickHintContainer style={clickHintFadeAnimation}>
			<Text>{introductionTexts.clickHint}</Text>
		</ClickHintContainer>
	);

	// dialog line funcs
	const dialogLineSkip = () => {
		dialogLineChange(dialogLineIndexState + 1);
	};
	const dialogLineRewind = () => {
		if (dialogLineIndexState > 0) {
			dialogLineChange(dialogLineIndexState - 1);
		}
	};
	const dialogLineChange = newLineIndex => {
		const hasDialogEnded = newLineIndex >= selectedDialog.length;
		!hasDialogEnded && setIsTextFadingOutState(true);
		setTimeout(() => {
			if (hasDialogEnded) {
				setIsUnmountingState(true);
				setTimeout(() => {
					return setCurrentScreenByTitle('money');
				}, animationsTimings.screenFadeDuration);
			} else {
				setDialogLineIndexState(newLineIndex);
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

	const fadingAnimation = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		config: { duration: animationsTimings.screenFadeDuration },
		pause: !isUnmountingState,
	});

	return (
		<SwipeHandler handleSwipes={handleSwipes}>
			<KeyDownHandler handleKeyDown={handleKeyDown}>
				<IntroductionScreenContainer onClick={dialogLineSkip} style={fadingAnimation}>
					<animated.div style={mainTextFadeAnimation}>
						<Text>{selectedDialog[dialogLineIndexState]}</Text>
						{clickHint}
					</animated.div>
				</IntroductionScreenContainer>
			</KeyDownHandler>
		</SwipeHandler>
	);
};
