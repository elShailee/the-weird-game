import { texts } from 'Texts/texts';
import { Text } from 'Texts/Text';
import { HiddenMessageTextContainer } from './styles';

export const HiddenMessageScreen = () => {
	const hiddenMessageText = texts.chapter00.hiddenMessage;
	return (
		<HiddenMessageTextContainer>
			<Text>{hiddenMessageText}</Text>
		</HiddenMessageTextContainer>
	);
};
