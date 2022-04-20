import { Navbar } from 'Components/Navbar';
import { useState } from 'react';
import { useCurrentScreen } from 'Utils/screensUtils';
import { NavbarOpenButton } from './styles';
import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { useTheme } from 'styled-components';

export const Game = () => {
	const theme = useTheme();
	const ScreenComponent = useCurrentScreen();
	const [navbarOpenState, setNavberOpenState] = useState(false);
	const { isNavbarAvailable } = usePlayerDataContext();

	return (
		<>
			{ScreenComponent ? <ScreenComponent /> : <div>Game Fallback</div>}

			<NavbarOpenButton
				size='L'
				color={theme.colors.navbar.openButtonBG}
				onClick={() => isNavbarAvailable && setNavberOpenState(true)}
				isVisible={isNavbarAvailable && !navbarOpenState}
			>
				N
			</NavbarOpenButton>

			<Navbar isOpen={navbarOpenState} closeNavbar={() => setNavberOpenState(false)} />
		</>
	);
};
