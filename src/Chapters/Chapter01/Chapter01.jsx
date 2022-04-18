import { useState } from 'react';
import { ChapterContainer, SumContainer, Btn, TrashButton, TipContainer } from './styles';

export default function Chapter01() {
	const [chapterState, setChapterState] = useState({
		points: 0,
		trashedPoints: 0,
		tipsStage: 0,
	});

	const sumPoints = () => chapterState.points + chapterState.trashedPoints;

	const addHandler = () => {
		setChapterState({ ...chapterState, points: chapterState.points + 1 });
	};

	const tips = [
		'hey there',
		"why'd you do that for?!",
		"I get it, there isn't much else, is it...",
		'but seriously, stop it.',
		'Stop It!',
		'',
	];
	const trashHandler = () => {
		const newTrashedPoints = sumPoints();
		const stepSize = 100;
		const tipsStage = Math.min(Math.floor(newTrashedPoints / stepSize), 5);

		setChapterState({
			...chapterState,
			points: 0,
			trashedPoints: newTrashedPoints,
			tipsStage,
		});
	};

	return (
		<ChapterContainer>
			<SumContainer shouldShow={sumPoints() > 0}>{chapterState.points}</SumContainer>
			<Btn onClick={addHandler} tabIndex='-1'>
				+
			</Btn>
			<TipContainer>{tips[chapterState.tipsStage]}</TipContainer>
			<TrashButton shouldShow={sumPoints() >= 100} onClick={trashHandler}>
				Do not press
			</TrashButton>
		</ChapterContainer>
	);
}
