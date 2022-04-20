import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { useScreensContext } from 'Context/ScreensContext';
import styled from 'styled-components';
import { GeneralButton } from './buttons';

export const NavBar = props => {
	const { setCurrentScreenByTitle } = useScreensContext();
	const { playerDataState } = usePlayerDataContext();
	const { navbarButtons } = playerDataState;
	const getNavButtons = () => {
		return Object.keys(navbarButtons).map((buttonTitle, index) => {
			const buttonProps = navbarButtons[buttonTitle];
			if (!buttonProps.isActive) return null;
			const { icon } = buttonProps;
			const clickHandler = () => setCurrentScreenByTitle(buttonTitle);
			return (
				<NavButton
					onClick={clickHandler}
					key={`${buttonTitle} NavButton:${index}`}
					size='L'
					color='rgba(128, 128, 128, 0.3)'
				>
					{icon}
				</NavButton>
			);
		});
	};

	return <NavBarContainer {...props}>{getNavButtons()}</NavBarContainer>;
};

const NavBarContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: fit-content;
	left: ${({ isOpen }) => (isOpen ? '0' : '-6rem')};
	top: 0;
	background-color: rgba(128, 128, 128, 0.2);
	${({ theme }) => theme.shadows.L}
	transition: left 1s;
`;

const NavButton = styled(GeneralButton)`
	margin: ${({ theme }) => theme.sizes.padding.M};
	width: ${({ theme }) => theme.sizes.components.Button.L};
	height: ${({ theme }) => theme.sizes.components.Button.L};
	${({ theme }) => theme.shadows.Min}
`;
