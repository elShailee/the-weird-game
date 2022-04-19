import { FAB } from 'Components/buttons';
import { useContext, useMemo, useState } from 'react';
import { useSpring } from 'react-spring';
import { ThemeContext } from 'styled-components';
import { ChapterContainer, SumContainer, TrashButton, TipContainer } from './styles';

export const Chapter01 = () => {
	const theme = useContext(ThemeContext);
	const [chapterState, setChapterState] = useState({
		points: 0,
		trashedPoints: 0,
		tipsStage: 0,
	});

	const [stage, setStage] = useState(0);
	const stepSize = 10;

	const sumPoints = () => chapterState.points + chapterState.trashedPoints;

	const addHandler = () => {
		setChapterState({ ...chapterState, points: chapterState.points + 1 });
	};

	const trashHandler = () => {
		const newTrashedPoints = sumPoints();
		const tipsStage = Math.min(Math.floor(newTrashedPoints / stepSize), 5);

		setChapterState({
			...chapterState,
			points: 0,
			trashedPoints: newTrashedPoints,
			tipsStage,
		});
		if (tipsStage !== stage) setStage(tipsStage);
	};

	const animation = useSpring({
		from: { backgroundColor: 'red' },
		to: { backgroundColor: 'rgba(0,0,0,0)' },
		config: { duration: 1000 },
	});

	const Comp = useMemo(() => {
		const tips = [
			'hey there',
			"why'd you do that for?!",
			"I get it, there isn't much else, is it...",
			'but seriously, stop it.',
			'Stop It!',
			'',
		];
		return (
			<TipContainer style={animation} key={stage}>
				{tips[stage]}
			</TipContainer>
		);
	}, [stage, animation]);

	return (
		<ChapterContainer>
			<SumContainer shouldShow={sumPoints() > 0}>{chapterState.points}</SumContainer>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<FAB
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='S'
					darken
				/>
				<FAB
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='M'
					disabled
				/>
				<FAB
					onClick={addHandler}
					style={{ margin: '1rem' }}
					tabIndex='-1'
					color={theme.colors.chapter01.addButton.BG}
					size='L'
				/>
			</div>
			{Comp}
			<TrashButton shouldShow={sumPoints() >= stepSize} onClick={trashHandler}>
				Do not press
			</TrashButton>
		</ChapterContainer>
	);
};
