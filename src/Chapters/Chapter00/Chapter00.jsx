import { ChaptersContext } from 'Context/ChaptersContext';
import { useContext, useState } from 'react';
import { useNextChapterIndex } from 'Utils/useNextChapterIndex';
import { useTimeouts } from 'Utils/useTimeout-s';
import { IntroductionScreen } from './IntroductionScreen';
import { ScareScreen } from './ScareScreen';
import { WelcomeScreen } from './WelcomeScreen';

export const Chapter00 = () => {
	const [contentState, setContentState] = useState(<ScareScreen />);
	const { setCurrentChapterByIndex } = useContext(ChaptersContext);
	const nextChapterIndex = useNextChapterIndex();
	const nextChapter = () => {
		setCurrentChapterByIndex(nextChapterIndex);
	};

	useTimeouts(
		[
			() => {
				setContentState(<WelcomeScreen />);
			},
			() => {
				setContentState(<IntroductionScreen nextChapter={nextChapter} />);
			},
		],
		[500, 2000],
	);
	return contentState;
};
