import { createContext, useContext } from 'react';
import { en_us } from 'Texts/en_us';
import { formatTextObjectToMountableJSX } from 'Utils/textsUtils';

export const TextsContext = createContext();

export function TextsProvider(props) {
	const mountableText = formatTextObjectToMountableJSX(en_us);
	return <TextsContext.Provider value={mountableText}>{props.children}</TextsContext.Provider>;
}

export const useTextsContext = () => useContext(TextsContext);
