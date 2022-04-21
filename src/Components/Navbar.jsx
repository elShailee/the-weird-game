import { usePlayerDataContext } from 'Context/PlayerDataContext';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { SquareButton } from './buttons';

export const Navbar = ({ isOpen, closeNavbar, fadeToScreen }) => {
	const navbarButtons = usePlayerDataContext().playerDataState.navbarButtons;
	const theme = useTheme();

	const getNavButtons = () => {
		return Object.keys(navbarButtons).map((buttonTitle, index) => {
			const buttonProps = navbarButtons[buttonTitle];
			if (!buttonProps.isActive) return null;
			const { icon } = buttonProps;
			const clickHandler = () => {
				if (buttonTitle === 'closeNavbar') closeNavbar();
				else fadeToScreen(buttonTitle);
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
	background-color: ${({ theme }) => theme.colors.navbar.BG};
	${({ theme }) => theme.shadows.L}
	left: ${({ isOpen }) => (isOpen ? '0' : '-6rem')};
	transition: left 1s;
`;

const NavButton = styled(SquareButton)`
	margin: ${({ theme }) => theme.sizes.padding.M};
	${({ theme }) => theme.shadows.Min}
`;
