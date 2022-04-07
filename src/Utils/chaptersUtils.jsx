import { chaptersLib } from 'Chapters/chaptersLib';
import { useChaptersContext } from 'Context/ChaptersContext';

export const useNextChapterIndex = () => {
	const { currentChapterIndex } = useChaptersContext();
	const numOfChapters = Object.keys(chaptersLib).length + 1;
	const nextChapterIndex = (currentChapterIndex + 1) % numOfChapters;
	return nextChapterIndex;
};

export const useCurrentChapter = () => {
	const { currentChapterIndex } = useChaptersContext();
	const chapterComponent = chaptersLib[currentChapterIndex];
	return chapterComponent;
};
