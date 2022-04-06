import { chaptersLib } from 'Chapters/chaptersLib';
import { ChaptersContext } from 'Context/ChaptersContext';
import { useContext } from 'react';

export const useNextChapterIndex = () => {
	const { currentChapterIndex } = useContext(ChaptersContext);
	const nextChapterIndex = (currentChapterIndex + 1) % (Object.keys(chaptersLib).length + 1);
	return nextChapterIndex;
};
