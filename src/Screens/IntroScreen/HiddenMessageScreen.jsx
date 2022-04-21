import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
import { HiddenMessageTextContainer } from './styles';

export const HiddenMessageScreen = () => {
	const hiddenMessageText = texts.introScreen.hiddenMessage;
	return (
		<HiddenMessageTextContainer>
			<Text>{hiddenMessageText}</Text>
		</HiddenMessageTextContainer>
	);
};
