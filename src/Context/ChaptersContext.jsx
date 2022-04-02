import { useState, createContext } from 'react';

export const ChaptersContext = createContext();

export function ChaptersProvider(props) {
	const [Chapter, setChapter] = useState(0);

	return <ChaptersContext.Provider value={{ name: Chapter, setChapter }}>{props.children}</ChaptersContext.Provider>;
}
