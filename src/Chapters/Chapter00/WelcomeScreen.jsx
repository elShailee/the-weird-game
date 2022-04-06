import { useSpring } from 'react-spring';
import { WelcomeScreenContainer, ChapterIndtoductionContainer } from './styles';

export const WelcomeScreen = () => {
	const fadingAnimation = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		config: { duration: 1200 },
		delay: 500,
	});

	return (
		<>
			<ChapterIndtoductionContainer />
			<WelcomeScreenContainer style={fadingAnimation}>Welcome!</WelcomeScreenContainer>
		</>
	);
};
