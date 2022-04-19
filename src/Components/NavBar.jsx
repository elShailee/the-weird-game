import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { useScreensContext } from 'Context/ScreensContext';
import styled from 'styled-components';
import { GeneralButton } from './buttons';

export const NavBar = () => {
	const { setCurrentScreenByTitle } = useScreensContext();
	const { playerDataState } = usePlayerDataContext();
	const { navbarButtons } = playerDataState;
	const getNavButtons = () => {
		return navbarButtons.map((buttonObj, index) => {
			const { title, icon } = buttonObj;
			const clickHandler = () => setCurrentScreenByTitle(title);
			return (
				<NavButton
					onClick={clickHandler}
					key={`${title} NavButton`}
					size='L'
					color='rgba(200, 200, 200, 0.3)'
				>
					{icon}
				</NavButton>
			);
		});
	};

	return <NavBarContainer>{getNavButtons()}</NavBarContainer>;
};

const NavBarContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: fit-content;
	left: 0;
	top: 0;
	background-color: rgba(200, 200, 200, 0.2);
	${({ theme }) => theme.shadows.L}
`;

const NavButton = styled(GeneralButton)`
	margin: ${({ theme }) => theme.sizes.padding.M};
	width: ${({ theme }) => theme.sizes.components.Button.L};
	height: ${({ theme }) => theme.sizes.components.Button.L};
	${({ theme }) => theme.shadows.Min}
`;
