import { useChaptersContext } from 'Context/ChaptersContext';
import { useTextsContext } from 'Context/TextsContext';
import { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { pickRandomObjectFromArray } from 'Utils/arraysUtils';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';

export const IntroductionScreen = () => {
	const [introductionStageState, setIntroductionStageState] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const { skipChapter } = useChaptersContext();

	// animations
	const textFadeDuration = 500;
	const clickHintAnimationDelay = 4000;

	const basicFadeInAnimationObject = {
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: textFadeDuration },
	};
	const mainTextFadeInAnimation = useSpring({
		...basicFadeInAnimationObject,
		reverse: isTextFadingOutState,
	});
	const clickHintFadeInAnimation = useSpring({
		...basicFadeInAnimationObject,
		delay: clickHintAnimationDelay,
	});

	// texts
	const introductionTexts = useTextsContext().chapter00.introduction;
	const mountableTextsInstance = useMemo(() => {
		const instanceTexts = pickRandomObjectFromArray(introductionTexts.dialogsSelection);
		return instanceTexts;
	}, [introductionTexts]);

	// clickHandler
	const clickHandler = () => {
		setIsTextFadingOutState(true);
		setTimeout(() => {
			const hasDisplayedAllTexts = introductionStageState === mountableTextsInstance.length - 1;
			if (hasDisplayedAllTexts) {
				skipChapter();
			} else {
				setIntroductionStageState(introductionStageState + 1);
			}
			setIsTextFadingOutState(false);
		}, textFadeDuration);
	};

	return (
		<IntroductionScreenContainer onClick={clickHandler}>
			<animated.div style={mainTextFadeInAnimation}>
				{mountableTextsInstance[introductionStageState]}
				{introductionStageState === 0 && (
					<ClickHintContainer style={clickHintFadeInAnimation}>
						{introductionTexts.clickHint}
					</ClickHintContainer>
				)}
			</animated.div>
		</IntroductionScreenContainer>
	);
};
