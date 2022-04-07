import { useState } from 'react';
import { useTimeouts } from 'Utils/useTimeoutAndTimeouts';
import { IntroductionScreen } from './IntroductionScreen';
import { ScareScreen } from './ScareScreen';
import { WelcomeScreen, duration as welcomeDuration } from './WelcomeScreen';

export const Chapter00 = () => {
	const [contentState, setContentState] = useState(<ScareScreen />);

	useTimeouts(
		[
			() => {
				setContentState(<WelcomeScreen />);
			},
			() => {
				setContentState(<IntroductionScreen />);
			},
		],
		[100, welcomeDuration],
	);
	return contentState;
};
