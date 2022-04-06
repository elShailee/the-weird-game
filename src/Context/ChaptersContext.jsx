import { useState, createContext } from 'react';

export const ChaptersContext = createContext();

export function ChaptersProvider(props) {
	const [currentChapterIndex, setCurrentChapterByIndex] = useState(0);

	return (
		<ChaptersContext.Provider value={{ currentChapterIndex, setCurrentChapterByIndex }}>
			{props.children}
		</ChaptersContext.Provider>
	);
}
