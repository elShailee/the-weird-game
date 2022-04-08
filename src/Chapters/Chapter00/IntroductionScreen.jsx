import { useChaptersContext } from 'Context/ChaptersContext';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { IntroductionScreenContainer, ClickHintContainer } from './styles';

export const IntroductionScreen = () => {
	const [introductionStageState, setIntroductionStageState] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const { skipChapter } = useChaptersContext();

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

	const introductionTexts = [
		<>
			<div>
				It's not like <br /> WEIRD-weird...
			</div>
			<ClickHintContainer style={clickHintFadeInAnimation}>
				(this is when you click...)
			</ClickHintContainer>
		</>,
		<div>
			it's more like, <br /> dads humor weird
		</div>,
		<div>
			Anyway, <br /> do you wanna play a game?
		</div>,
		<div>sorry, I'll work on that...</div>,
	];

	const clickHandler = () => {
		setIsTextFadingOutState(true);
		setTimeout(() => {
			if (introductionStageState === 3) {
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
				{introductionTexts[introductionStageState]}
			</animated.div>
		</IntroductionScreenContainer>
	);
};
