import { GeneralButton } from 'Components/buttons';
import styled from 'styled-components';

export const MenuButton = styled(GeneralButton)`
	position: absolute;
	left: 2rem;
	top: 2rem;
	opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
	transition: opacity 1s;
`;
