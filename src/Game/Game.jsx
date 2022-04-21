import { Navbar } from 'Components/Navbar';
import { useState } from 'react';
import { useCurrentScreen, useNextScreen } from 'Utils/screensUtils';
import { NavbarOpenButton } from './styles';
import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { useTheme } from 'styled-components';
import { useSpring } from 'react-spring';
import { useScreensContext } from 'Context/ScreensContext';

export const Game = () => {
	const theme = useTheme();
	const CurrentScreen = useCurrentScreen();
	const NextScreen = useNextScreen();
	const [navbarOpenState, setNavberOpenState] = useState(false);
	const { isNavbarAvailable } = usePlayerDataContext();
	const [isScreenFadingState, setIsScreenFadingState] = useState(false);
	const { currentScreenTitle, setCurrentScreenByTitle, setNextScreenByTitle } = useScreensContext();

	const screenFadeAnimation = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		config: { duration: 500 },
		pause: !isScreenFadingState,
		reset: true,
	});

	const fadeToScreen = screenTitle => {
		if (screenTitle === currentScreenTitle) return;

		setNextScreenByTitle(screenTitle);
		setIsScreenFadingState(true);
		setTimeout(() => {
			setCurrentScreenByTitle(screenTitle);
			setIsScreenFadingState(false);
			setNextScreenByTitle(null);
		}, 500);
	};

	return (
		<>
			{NextScreen && <NextScreen key='nextScreen' />}
			{CurrentScreen ? (
				<CurrentScreen
					key='currentScreen'
					screenFadeAnimation={screenFadeAnimation}
					fadeToScreen={fadeToScreen}
				/>
			) : (
				<div>Game Fallback</div>
			)}

			<NavbarOpenButton
				size='L'
				color={theme.colors.navbar.openButtonBG}
				onClick={() => isNavbarAvailable && setNavberOpenState(true)}
				isVisible={isNavbarAvailable && !navbarOpenState}
			>
				N
			</NavbarOpenButton>

			<Navbar
				isOpen={navbarOpenState}
				closeNavbar={() => setNavberOpenState(false)}
				fadeToScreen={fadeToScreen}
			/>
		</>
	);
};
