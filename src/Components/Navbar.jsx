import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { useScreensContext } from 'Context/ScreensContext';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { GeneralButton } from './buttons';

export const Navbar = ({ isOpen, closeNavbar }) => {
	const { setCurrentScreenByTitle } = useScreensContext();
	const { playerDataState } = usePlayerDataContext();
	const { navbarButtons } = playerDataState;
	const theme = useTheme();
	const getNavButtons = () => {
		return Object.keys(navbarButtons).map((buttonTitle, index) => {
			const buttonProps = navbarButtons[buttonTitle];
			if (!buttonProps.isActive) return null;
			const { icon } = buttonProps;
			const clickHandler = () => {
				if (buttonTitle === 'closeNavbar') closeNavbar();
				else setCurrentScreenByTitle(buttonTitle);
			};
			return (
				<NavButton
					onClick={clickHandler}
					key={`${buttonTitle} NavButton:${index}`}
					size='L'
					color={theme.colors.navbar.buttonsBG}
				>
					{icon}
				</NavButton>
			);
		});
	};

	return <NavBarContainer isOpen={isOpen}>{getNavButtons()}</NavBarContainer>;
};

const NavBarContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: fit-content;
	left: ${({ isOpen }) => (isOpen ? '0' : '-6rem')};
	top: 0;
	background-color: ${({ theme }) => theme.colors.navbar.BG};
	${({ theme }) => theme.shadows.L}
	transition: left 1s;
`;

const NavButton = styled(GeneralButton)`
	margin: ${({ theme }) => theme.sizes.padding.M};
	width: ${({ theme }) => theme.sizes.components.Button.L};
	height: ${({ theme }) => theme.sizes.components.Button.L};
	${({ theme }) => theme.shadows.Min}
`;
