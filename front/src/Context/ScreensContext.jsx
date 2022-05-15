import { useState, createContext, useContext } from 'react';

export const ScreensContext = createContext();

export function ScreensProvider(props) {
	const [currentScreenTitle, setCurrentScreenByTitle] = useState('spaceInvaders');
	const [nextScreenTitle, setNextScreenByTitle] = useState(null);

	return (
		<ScreensContext.Provider
			value={{ currentScreenTitle, setCurrentScreenByTitle, nextScreenTitle, setNextScreenByTitle }}
		>
			{props.children}
		</ScreensContext.Provider>
	);
}

export const useScreensContext = () => useContext(ScreensContext);
