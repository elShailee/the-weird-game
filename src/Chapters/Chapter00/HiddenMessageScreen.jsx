import { useTextsContext } from 'Context/TextsContext';
import { HiddenMessageTextContainer } from './styles';

export const HiddenMessageScreen = () => {
	const hiddenMessageText = useTextsContext().chapter00.hiddenMessage;
	return <HiddenMessageTextContainer>{hiddenMessageText}</HiddenMessageTextContainer>;
};
