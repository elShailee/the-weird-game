import { useState, createContext, useContext } from 'react';

export const ScreensContext = createContext();

export function ScreensProvider(props) {
	const [currentScreenTitle, setCurrentScreenByTitle] = useState('money');

	return (
		<ScreensContext.Provider value={{ currentScreenTitle, setCurrentScreenByTitle }}>
			{props.children}
		</ScreensContext.Provider>
	);
}

export const useScreensContext = () => useContext(ScreensContext);
