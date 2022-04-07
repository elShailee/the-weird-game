import { useState } from 'react';
import { useChaptersContext } from 'Context/ChaptersContext';
import { useNextChapterIndex } from 'Utils/chaptersUtils';
import { useTimeouts } from 'Utils/useTimeoutAndTimeouts';
import { IntroductionScreen } from './IntroductionScreen';
import { ScareScreen } from './ScareScreen';
import { WelcomeScreen, duration as welcomeDuration } from './WelcomeScreen';

export const Chapter00 = () => {
	const [contentState, setContentState] = useState(<ScareScreen />);
	const { setCurrentChapterByIndex } = useChaptersContext();
	const nextChapterIndex = useNextChapterIndex();
	const chapterSkip = () => {
		setCurrentChapterByIndex(nextChapterIndex);
	};

	useTimeouts(
		[
			() => {
				setContentState(<WelcomeScreen />);
			},
			() => {
				setContentState(<IntroductionScreen chapterSkip={chapterSkip} />);
			},
		],
		[100, welcomeDuration],
	);
	return contentState;
};
