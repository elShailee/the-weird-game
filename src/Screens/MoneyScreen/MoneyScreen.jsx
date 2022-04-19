import { FloatingActionButton } from 'Components/buttons';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ChapterContainer, SumContainer, TrashButton, DialogContainer } from './styles';

export const MoneyScreen = () => {
	const theme = useContext(ThemeContext);
	const [chapterState, setChapterState] = useState({
		money: 0,
		treesPlanted: 0,
		dialogStage: 0,
	});
	const dialogRef = useRef();
	const stepSize = 10;

	const dialog = [
		'hey there',
		"why'd you do that for?!",
		"I get it, there isn't much else, is it...",
		'but seriously, stop it.',
		'Stop It!',
		'',
	];

	const sumPoints = () => chapterState.money + chapterState.treesPlanted;
	const highlightDialog = () => {
		const { style } = dialogRef.current;
		style.transition = 'background-color 0s';
		style.backgroundColor = theme.colors.chapter01.focusBG;
		setTimeout(() => {
			style.transition = 'background-color 1.5s ';
			style.backgroundColor = 'rgba(0,0,0,0)';
		}, 0);
	};

	const addHandler = () => {
		setChapterState({ ...chapterState, money: chapterState.money + 1 });
	};

	const trashHandler = () => {
		const newTrashedPoints = sumPoints();
		const tipsStage = Math.min(Math.floor(newTrashedPoints / stepSize), 5);

		if (tipsStage !== chapterState.dialogStage) highlightDialog();

		setChapterState({
			...chapterState,
			money: 0,
			treesPlanted: newTrashedPoints,
			dialogStage: tipsStage,
		});
	};

	return (
		<ChapterContainer>
			<SumContainer shouldShow={sumPoints() > 0}>{chapterState.money}</SumContainer>
			<FloatingActionButton
				onClick={addHandler}
				style={{ margin: '1rem' }}
				tabIndex='-1'
				color={theme.colors.chapter01.addButton.BG}
				size='L'
			>
				+
			</FloatingActionButton>
			<DialogContainer ref={dialogRef}>{dialog[chapterState.dialogStage]}</DialogContainer>
			{/* <TrashButton shouldShow={sumPoints() >= stepSize} onClick={trashHandler}>
				Do not press
			</TrashButton> */}
		</ChapterContainer>
	);
};
