import { useCurrentChapter } from 'Utils/chaptersUtils';

export const Game = () => {
	const ChapterComponent = useCurrentChapter();

	return <>{ChapterComponent ? <ChapterComponent /> : <div>Game Fallback</div>}</>;
};
