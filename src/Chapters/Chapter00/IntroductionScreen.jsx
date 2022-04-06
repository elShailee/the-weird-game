import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ChapterIndtoductionContainer } from './styles';

export const IntroductionScreen = ({ nextChapter }) => {
	const introductionTexts = ['one', 'two', 'three', 'four'];
	const [introductionStage, setIntroductionStage] = useState(0);
	const [data, setData] = useState(false);

	const fadeInAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 500 },
		reverse: data,
	});

	const clickHandler = () => {
		setData(true);
		setTimeout(() => {
			console.log('first');
			if (introductionStage === 3) {
				nextChapter();
			} else {
				setIntroductionStage(introductionStage + 1);
			}
			setData(false);
		}, 500);
	};

	return (
		<ChapterIndtoductionContainer onClick={clickHandler}>
			<animated.div style={fadeInAnimation}>{introductionTexts[introductionStage]}</animated.div>
		</ChapterIndtoductionContainer>
	);
};
