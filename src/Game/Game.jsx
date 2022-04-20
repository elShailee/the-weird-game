import { NavBar } from 'Components/NavBar';
import { useState } from 'react';
import { useCurrentScreen } from 'Utils/screensUtils';
import { MenuButton } from './styles';
import { usePlayerDataContext } from 'Context/PlayerDataContext';

export const Game = () => {
	const ScreenComponent = useCurrentScreen();
	const [navbarOpenState, setNavberOpenState] = useState(false);
	const { playerDataState } = usePlayerDataContext();
	const isNavbarAvailable = playerDataState.money + playerDataState.spentMoney >= 20;

	return (
		<>
			{ScreenComponent ? <ScreenComponent /> : <div>Game Fallback</div>}
			<MenuButton
				size='L'
				color='rgba(128,128,128,0.3)'
				onClick={() => setNavberOpenState(true)}
				isVisible={isNavbarAvailable && !navbarOpenState}
			>
				D
			</MenuButton>
			<NavBar isOpen={navbarOpenState} />
		</>
	);
};
