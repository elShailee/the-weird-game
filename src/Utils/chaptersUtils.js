import { chaptersLib } from 'Chapters/chaptersLib';
import { useChaptersContext } from 'Context/ChaptersContext';

export const useCurrentChapter = () => {
	const { currentChapterIndex } = useChaptersContext();
	const chapterComponent = chaptersLib[currentChapterIndex];
	return chapterComponent;
};
