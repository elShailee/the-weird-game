import { useChaptersContext } from 'Context/ChaptersContext';
import { Text } from 'Texts/Text';
import { texts } from 'Texts/texts';
import { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Lodash from 'lodash';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';

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

	// clickHandler
	const clickHandler = () => {
		setIsTextFadingOutState(true);
		setTimeout(() => {
			const hasDialogEnded = dialogLineIndexState >= selectedDialog.length - 1;
			if (hasDialogEnded) {
				return skipChapter();
			} else {
				setDialogLineIndexState(dialogLineIndexState + 1);
			}
			setIsTextFadingOutState(false);
		}, textFadeDuration);
	};

	return (
		<IntroductionScreenContainer onClick={clickHandler}>
			<animated.div style={mainTextFadeAnimation}>
				<Text>{selectedDialog[dialogLineIndexState]}</Text>
				{clickHint}
			</animated.div>
		</IntroductionScreenContainer>
	);
};
