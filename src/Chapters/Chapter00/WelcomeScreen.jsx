import { useSpring } from 'react-spring';
import { WelcomeScreenContainer, ChapterIndtoductionContainer } from './styles';

const animationDelay = 1500;
const animationDuration = 1000;

export const duration = animationDelay + animationDuration;

export const WelcomeScreen = () => {
	const fadingAnimation = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		config: { duration: animationDuration },
		delay: animationDelay,
	});

	return (
		<>
			<ChapterIndtoductionContainer />
			<WelcomeScreenContainer style={fadingAnimation}>
				Welcome to
				<br />
				The Weird Game
			</WelcomeScreenContainer>
		</>
	);
};