import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
import { useSpring } from 'react-spring';
import { WelcomeScreenContainer, IntroductionScreenContainer } from './styles';

export const WelcomeScreen = ({ animationTimings }) => {
	const fadingAnimation = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		config: { duration: animationTimings.duration },
		delay: animationTimings.delay,
	});

	const welcomeText = texts.introScreen.welcome;

	return (
		<>
			<IntroductionScreenContainer />
			<WelcomeScreenContainer style={fadingAnimation}>
				<Text>{welcomeText}</Text>
			</WelcomeScreenContainer>
		</>
	);
};
