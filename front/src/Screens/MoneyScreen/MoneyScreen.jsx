import { FloatingActionButton } from 'Components/buttons';
import { Link } from 'Components/texts';
import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { cloneDeep } from 'lodash';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ScreenContainer, SumContainer, DialogContainer, Credits } from './styles';

export const MoneyScreen = ({ screenFadeAnimation }) => {
	const theme = useContext(ThemeContext);
	const { playerDataState, setPlayerDataState } = usePlayerDataContext();
	const [dialogStageState, setDialogStageState] = useState(0);
	const dialogRef = useRef();

	const dialog = [
		'hey there',
		"why'd you do that for?!",
		"I get it, there isn't much else, is it...",
		'but seriously, stop it.',
		'Stop It!',
		'',
	];

	const sumPoints = () => playerDataState.money + playerDataState.spentMoney;
	const highlightDialog = () => {
		const { style } = dialogRef.current;
		style.transition = 'background-color 300ms ease-in';
		style.backgroundColor = theme.colors.moneyScreen.focusBG;
		setTimeout(() => {
			style.transition = 'background-color 1.5s ease-out';
			style.backgroundColor = 'rgba(0,0,0,0)';
		}, 300);
	};

	const addHandler = () => {
		highlightDialog();
		const newPlayerDataState = cloneDeep(playerDataState);
		newPlayerDataState.money = newPlayerDataState.money + 1;
		const buttonObj = newPlayerDataState.navbarButtons['money'];
		buttonObj.isActive = true;
		setPlayerDataState(newPlayerDataState);
	};

	return (
		<ScreenContainer style={screenFadeAnimation}>
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
			<Credits>
				inspired by <Link href='https://candybox2.github.io/candybox/'>Candy Box</Link>
			</Credits>
		</ScreenContainer>
	);
};
