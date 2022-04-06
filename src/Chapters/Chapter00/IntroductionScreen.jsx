import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ChapterIndtoductionContainer } from './styles';

export const IntroductionScreen = ({ nextChapter }) => {
	const introductionTexts = [
		<div>
			It's not like <br /> WEIRD-weird...{' '}
		</div>,
		<div>
			it's more like, <br /> dads humor weird
		</div>,
		<div>
			Anyway, <br /> do you wanna play a game?
		</div>,
		<div>sorry, I'll work on that...</div>,
	];
	const [introductionStage, setIntroductionStage] = useState(0);
	const [isTextFadingOutState, setIsTextFadingOutState] = useState(false);
	const textFadeDuration = 500;

	const fadeInAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: textFadeDuration },
		reverse: isTextFadingOutState,
	});

	const clickHandler = () => {
		setIsTextFadingOutState(true);
		setTimeout(() => {
			if (introductionStage === 3) {
				nextChapter();
			} else {
				setIntroductionStage(introductionStage + 1);
			}
			setIsTextFadingOutState(false);
		}, textFadeDuration);
	};

	return (
		<ChapterIndtoductionContainer onClick={clickHandler}>
			<animated.div style={fadeInAnimation}>{introductionTexts[introductionStage]}</animated.div>
		</ChapterIndtoductionContainer>
	);
};
