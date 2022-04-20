import { SquareButton } from 'Components/buttons';
import styled from 'styled-components';

export const NavbarOpenButton = styled(SquareButton)`
	position: absolute;
	left: ${({ theme }) => theme.sizes.padding.XXL};
	top: ${({ theme }) => theme.sizes.padding.XXL};
	opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
	transition: opacity 1s ease-out;
	cursor: ${({ isVisible }) => (isVisible ? 'pointer' : 'default')};
`;
