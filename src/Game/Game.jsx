import { NavBar } from 'Components/NavBar';
import { useState } from 'react';
import { useCurrentScreen } from 'Utils/screensUtils';
import { MenuButton } from './styles';
import { usePlayerDataContext } from 'Context/PlayerDataContext';

export const Game = () => {
	const ScreenComponent = useCurrentScreen();
	const [menuOpenState, setMenuOpenState] = useState(false);
	const { playerDataState } = usePlayerDataContext();
	const isMenuAvailable = playerDataState.money + playerDataState.spentMoney >= 20;

	return (
		<>
			{ScreenComponent ? <ScreenComponent /> : <div>Game Fallback</div>}
			<MenuButton
				size='M'
				color='gray'
				onClick={() => setMenuOpenState(true)}
				isVisible={isMenuAvailable && !menuOpenState}
			>
				D
			</MenuButton>
			<NavBar isOpen={menuOpenState} />
		</>
	);
};
