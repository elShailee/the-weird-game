import { useState } from 'react';
import { MoneyScreen } from 'Screens/MoneyScreen/MoneyScreen';
import { useTimeouts } from 'Utils/useTimeoutAndTimeouts';
import { DialogScreen } from './DialogScreen';
import { HiddenMessageScreen } from './HiddenMessageScreen';
import { WelcomeScreen } from './WelcomeScreen';

export const IntroScreen = () => {
	const [screenState, setScreenState] = useState(<HiddenMessageScreen />);

	const welcomeAnimationTimings = {
		duration: 1500,
		delay: 3000,
	};
	const dialogAnimationsTimings = {
		textFadeDuration: 500,
		clickHintAnimationDelay: 4000,
		screenFadeDuration: 1000,
	};
	const totalWelcomeAnimationDuration =
		welcomeAnimationTimings.delay + welcomeAnimationTimings.duration;

	useTimeouts(
		[
			() => {
				setScreenState(<WelcomeScreen animationTimings={welcomeAnimationTimings} />);
			},
			() => {
				setScreenState(
					<>
						<MoneyScreen />
						<DialogScreen animationsTimings={dialogAnimationsTimings} />
					</>,
				);
			},
		],
		[100, totalWelcomeAnimationDuration],
	);

	return screenState;
};
