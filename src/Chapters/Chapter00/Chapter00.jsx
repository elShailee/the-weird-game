import { useState } from 'react';
import { useTimeouts } from 'Utils/useTimeoutAndTimeouts';
import { IntroductionScreen } from './IntroductionScreen';
import { HiddenMessageScreen } from './HiddenMessageScreen';
import { WelcomeScreen } from './WelcomeScreen';

export const Chapter00 = () => {
	const [screenState, setScreenState] = useState(<HiddenMessageScreen />);

	const welcomeAnimationTimings = {
		duration: 1500,
		delay: 3000,
	};
	const totalWelcomeAnimationDuration =
		welcomeAnimationTimings.delay + welcomeAnimationTimings.duration;

	useTimeouts(
		[
			() => {
				setScreenState(<WelcomeScreen animationTimings={welcomeAnimationTimings} />);
			},
			() => {
				setScreenState(<IntroductionScreen />);
			},
		],
		[100, totalWelcomeAnimationDuration],
	);

	return screenState;
};
