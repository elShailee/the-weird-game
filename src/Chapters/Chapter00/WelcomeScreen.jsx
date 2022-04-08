import { useSpring } from 'react-spring';
import { WelcomeScreenContainer, IntroductionScreenContainer } from './styles';

const animationDelay = 3000;
const animationDuration = 1500;

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
			<IntroductionScreenContainer />
			<WelcomeScreenContainer style={fadingAnimation}>
				Welcome to
				<br />
				The Weird Game
			</WelcomeScreenContainer>
		</>
	);
};
