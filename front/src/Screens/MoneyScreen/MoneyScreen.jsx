import { FloatingActionButton } from 'Components/buttons';
import { Link } from 'Components/texts';
import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { cloneDeep } from 'lodash';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { texts } from 'Texts/texts';
import { useMoneyEarned } from 'Utils/moneyUtils';
import { ScreenContainer, BalanceContainer, DialogContainer, Credits } from './styles';
import { changeDialogWithHighlight, getCurrentDialogStage } from './utils';

export const MoneyScreen = ({ screenFadeAnimation, isDisplayedAsCurrentScreen }) => {
	const theme = useContext(ThemeContext);
	const { playerDataState, setPlayerDataState } = usePlayerDataContext();
	const dialog = texts.moneyScreen.mainScreenDialog;
	const [dialogStageState, setDialogStageState] = useState(-1);
	const dialogRef = useRef();
	const currentMoneyEarned = useMoneyEarned();

	useEffect(() => {
		const newDialogStage = getCurrentDialogStage(currentMoneyEarned);
		if (newDialogStage !== null && newDialogStage !== dialogStageState)
			changeDialogWithHighlight({ newDialogStage, dialogRef, setDialogStageState, theme });
	}, [theme, isDisplayedAsCurrentScreen, dialogStageState, playerDataState, currentMoneyEarned]);

	const addMoneyClickHandler = () => {
		const newPlayerDataState = cloneDeep(playerDataState);
		newPlayerDataState.money = newPlayerDataState.money + 1;
		const buttonObj = newPlayerDataState.navbarButtons['money'];
		buttonObj.isActive = true;
		setPlayerDataState(newPlayerDataState);
	};

	return (
		<ScreenContainer style={screenFadeAnimation}>
			{isDisplayedAsCurrentScreen && (
				<DialogContainer ref={dialogRef}>{dialog[dialogStageState]}</DialogContainer>
			)}

			<BalanceContainer shouldShow={currentMoneyEarned > 0}>
				{playerDataState.money}
			</BalanceContainer>

			<FloatingActionButton
				onClick={addMoneyClickHandler}
				color={theme.colors.moneyScreen.addButton.BG}
				size='L'
			>
				+
			</FloatingActionButton>

			<Credits>
				inspired by <Link href='https://candybox2.github.io/candybox/'>Candy Box</Link>
			</Credits>
		</ScreenContainer>
	);
};
