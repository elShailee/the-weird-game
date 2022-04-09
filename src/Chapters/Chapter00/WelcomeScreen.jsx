import { useTextsContext } from 'Context/TextsContext';
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

	const welcomeText = useTextsContext().chapter00.welcome;

	return (
		<>
			<IntroductionScreenContainer />
			<WelcomeScreenContainer style={fadingAnimation}>{welcomeText}</WelcomeScreenContainer>
		</>
	);
};
