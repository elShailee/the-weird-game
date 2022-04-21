import { FloatingActionButton } from 'Components/buttons';
import { Link } from 'Components/texts';
import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { cloneDeep } from 'lodash';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
// import { useTurnNavButtonOn } from 'Utils/navbarUtils';
import {
	ScreenContainer,
	SumContainer /*, TrashButton*/,
	DialogContainer,
	Credits,
} from './styles';

export const MoneyScreen = () => {
	const theme = useContext(ThemeContext);
	const { playerDataState, setPlayerDataState } = usePlayerDataContext();
	const [dialogStageState, setDialogStageState] = useState(0);
	const dialogRef = useRef();
	// const stepSize = 10;

	const dialog = [
		'hey there',
		"why'd you do that for?!",
		"I get it, there isn't much else, is it...",
		'but seriously, stop it.',
		'Stop It!',
		'',
	];

	const sumPoints = () => playerDataState.money + playerDataState.spentMoney;
	// const highlightDialog = () => {
	// 	const { style } = dialogRef.current;
	// 	style.transition = 'background-color 0s';
	// 	style.backgroundColor = theme.colors.moneyScreen.focusBG;
	// 	setTimeout(() => {
	// 		style.transition = 'background-color 1.5s ';
	// 		style.backgroundColor = 'rgba(0,0,0,0)';
	// 	}, 0);
	// };

	const addHandler = () => {
		const newPlayerDataState = cloneDeep(playerDataState);
		newPlayerDataState.money = newPlayerDataState.money + 1;
		const buttonObj = newPlayerDataState.navbarButtons['money'];
		buttonObj.isActive = true;
		setPlayerDataState(newPlayerDataState);
	};

	// const trashHandler = () => {
	// 	const newTrashedPoints = sumPoints();
	// 	const newDialogStage = Math.min(Math.floor(newTrashedPoints / stepSize), 5);

	// 	if (newDialogStage !== chapterState.dialogStage) highlightDialog();

	// 	setDialogStageState(newDialogStage);
	// };

	return (
		<ScreenContainer>
			<SumContainer shouldShow={sumPoints() > 0}>{playerDataState.money}</SumContainer>
			<FloatingActionButton
				onClick={addHandler}
				style={{ margin: '1rem' }}
				tabIndex='-1'
				color={theme.colors.moneyScreen.addButton.BG}
				size='L'
			>
				+
			</FloatingActionButton>
			<DialogContainer ref={dialogRef}>{dialog[dialogStageState]}</DialogContainer>
			{/* <TrashButton shouldShow={sumPoints() >= stepSize} onClick={trashHandler}>
				Do not press
			</TrashButton> */}
			<Credits>
				inspired by <Link href='https://candybox2.github.io/candybox/'>Candy Box</Link>
			</Credits>
		</ScreenContainer>
	);
};
