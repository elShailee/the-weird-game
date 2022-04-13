import { useChaptersContext } from 'Context/ChaptersContext';
import { Text } from 'Texts/Text';
import { texts } from 'Texts/texts';
import { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Lodash from 'lodash';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';
import { KeyDownHandler, SwipeHandler } from 'Utils/inputUtils';

export const IntroductionScreen = () => {
	const [dialogLineIndexState, setDialogLineIndexState] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const { skipChapter } = useChaptersContext();

	// animations
	const textFadeDuration = 500;
	const clickHintAnimationDelay = 4000;

	const basicFadeAnimationObject = {
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: textFadeDuration },
	};
	const mainTextFadeAnimation = useSpring({
		...basicFadeAnimationObject,
		reverse: isTextFadingOutState,
	});
	const clickHintFadeAnimation = useSpring({
		...basicFadeAnimationObject,
		delay: clickHintAnimationDelay,
	});

	// texts
	const introductionTexts = texts.chapter00.introduction;
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
		setIsTextFadingOutState(true);
		setTimeout(() => {
			const hasDialogEnded = newLineIndex >= selectedDialog.length;
			if (hasDialogEnded) {
				return skipChapter();
			} else {
				setDialogLineIndexState(newLineIndex);
			}
			setIsTextFadingOutState(false);
		}, textFadeDuration);
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
				<IntroductionScreenContainer onClick={dialogLineSkip}>
					<animated.div style={mainTextFadeAnimation}>
						<Text>{selectedDialog[dialogLineIndexState]}</Text>
						{clickHint}
					</animated.div>
				</IntroductionScreenContainer>
			</KeyDownHandler>
		</SwipeHandler>
	);
};
