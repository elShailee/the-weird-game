import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
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

	const welcomeText = texts.chapter00.welcome;

	return (
		<>
			<IntroductionScreenContainer />
			<WelcomeScreenContainer style={fadingAnimation}>
				<Text>{welcomeText}</Text>
			</WelcomeScreenContainer>
		</>
	);
};
