import { GeneralButton } from 'Components/buttons';
import { FloatingActionButton } from 'Components/buttons';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ChapterContainer, SumContainer, TrashButton, TipContainer } from './styles';

export const Chapter01 = () => {
	const theme = useContext(ThemeContext);
	const [chapterState, setChapterState] = useState({
		points: 0,
		trashedPoints: 0,
		tipsStage: 0,
	});
	const tipRef = useRef();
	const stepSize = 10;

	const sumPoints = () => chapterState.points + chapterState.trashedPoints;
	const tipHighlight = () => {
		const { style } = tipRef.current;
		style.transition = 'background-color 0s';
		style.backgroundColor = theme.colors.chapter01.focusBG;
		setTimeout(() => {
			style.transition = 'background-color 1.5s ';
			style.backgroundColor = 'rgba(0,0,0,0)';
		}, 0);
	};

	const addHandler = () => {
		setChapterState({ ...chapterState, points: chapterState.points + 1 });
	};

	const trashHandler = () => {
		const newTrashedPoints = sumPoints();
		const tipsStage = Math.min(Math.floor(newTrashedPoints / stepSize), 5);

		if (tipsStage !== chapterState.tipsStage) tipHighlight();

		setChapterState({
			...chapterState,
			points: 0,
			trashedPoints: newTrashedPoints,
			tipsStage,
		});
	};

	const tips = [
		'hey there',
		"why'd you do that for?!",
		"I get it, there isn't much else, is it...",
		'but seriously, stop it.',
		'Stop It!',
		'',
	];

	return (
		<ChapterContainer>
			<SumContainer shouldShow={sumPoints() > 0}>{chapterState.points}</SumContainer>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<FloatingActionButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='S'
					darken
				>
					+
				</FloatingActionButton>
				<FloatingActionButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='M'
					disabled
				>
					+
				</FloatingActionButton>
				<FloatingActionButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='L'
				>
					+
				</FloatingActionButton>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<GeneralButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='S'
					darken
				>
					Click Me!
				</GeneralButton>
				<GeneralButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='M'
					disabled
				>
					Click Me!
				</GeneralButton>
				<GeneralButton
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='L'
				>
					Click Me!
				</GeneralButton>
			</div>
			<TipContainer ref={tipRef}>{tips[chapterState.tipsStage]}</TipContainer>
			<TrashButton shouldShow={sumPoints() >= stepSize} onClick={trashHandler}>
				Do not press
			</TrashButton>
		</ChapterContainer>
	);
};
