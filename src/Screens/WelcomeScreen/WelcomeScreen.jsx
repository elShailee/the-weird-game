import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
import { ScreenContainer } from './styles';
import { useTimeouts } from 'Utils/useTimeoutAndTimeouts';
import { useState } from 'react';
import { HiddenMessage } from './HiddenMessage';

export const WelcomeScreen = ({ fadeToScreen, screenFadeAnimation }) => {
	const [contentState, setContentState] = useState(<HiddenMessage />);

	const screenDuration = 3000;

	const welcomeText = texts.welcomeScreen.welcomeText;

	useTimeouts(
		[
			() =>
				setContentState(
					<ScreenContainer style={screenFadeAnimation}>
						<Text>{welcomeText}</Text>
					</ScreenContainer>,
				),
			() => fadeToScreen('intro'),
		],
		[100, screenDuration],
	);

	return contentState;
};
