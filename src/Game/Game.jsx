import { chaptersLib } from 'Chapters/chaptersLib';
import { ChaptersContext } from 'Context/ChaptersContext';
import { useContext, useMemo } from 'react';
// import { useNextChapterIndex } from 'Utils/useNextChapterIndex';

export const Game = () => {
	const { currentChapterIndex /*, setCurrentChapterByIndex*/ } = useContext(ChaptersContext);

	const ChapterComponent = useMemo(() => {
		return chaptersLib[currentChapterIndex];
	}, [currentChapterIndex]);

	// const nextIndex = useNextChapterIndex();

	return (
		<>
			{ChapterComponent ? <ChapterComponent /> : <div>Game</div>}
			{/* <button onClick={() => setCurrentChapterByIndex(nextIndex)}>Next Chapter</button> */}
		</>
	);
};
