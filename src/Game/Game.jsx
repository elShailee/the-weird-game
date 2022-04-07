import { chaptersLib } from 'Chapters/chaptersLib';
import { ChaptersContext } from 'Context/ChaptersContext';
import { useContext, useMemo } from 'react';

export const Game = () => {
	const { currentChapterIndex } = useContext(ChaptersContext);

	const ChapterComponent = useMemo(() => {
		return chaptersLib[currentChapterIndex];
	}, [currentChapterIndex]);

	return <>{ChapterComponent ? <ChapterComponent /> : <div>Game</div>}</>;
};
