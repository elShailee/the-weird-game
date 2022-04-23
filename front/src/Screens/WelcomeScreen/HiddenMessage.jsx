import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
import { HiddenMessageTextContainer } from './styles';

export const HiddenMessage = () => {
	const hiddenMessageText = texts.welcomeScreen.hiddenMessage;
	return (
		<HiddenMessageTextContainer>
			<Text>{hiddenMessageText}</Text>
		</HiddenMessageTextContainer>
	);
};
