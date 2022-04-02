import { chaptersLib } from 'Chapters/utils';
import { ChaptersContext } from 'Context/ChaptersContext';
import { useContext } from 'react';

export default function Game() {
	const chapter = useContext(ChaptersContext);
	const chapterName = chapter.name;
	const ChapterComponent = chaptersLib[chapterName];
	const next = () => {
		if (chapterName < Object.keys(chaptersLib).length) {
			chapter.setChapter(chapterName + 1);
		} else {
			chapter.setChapter(0);
		}
	};

	return (
		<>
			{ChapterComponent ? <ChapterComponent /> : <div>Game</div>}
			<button onClick={next}>Next Chapter</button>
			<button>asdasd</button>
			asdasdasd
		</>
	);
}
