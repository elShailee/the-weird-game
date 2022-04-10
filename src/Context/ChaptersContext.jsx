import { useState, createContext, useContext } from 'react';

export const ChaptersContext = createContext();

export function ChaptersProvider(props) {
	const [currentChapterIndex, setCurrentChapterByIndex] = useState(0);
	const skipChapter = () => setCurrentChapterByIndex(currentChapterIndex + 1);

	return (
		<ChaptersContext.Provider
			value={{ currentChapterIndex, setCurrentChapterByIndex, skipChapter }}
		>
			{props.children}
		</ChaptersContext.Provider>
	);
}

export const useChaptersContext = () => useContext(ChaptersContext);
