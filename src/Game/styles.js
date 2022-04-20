import { GeneralButton } from 'Components/buttons';
import styled from 'styled-components';

export const MenuButton = styled(GeneralButton)`
	position: absolute;
	width: ${({ theme }) => theme.sizes.components.Button.L};
	height: ${({ theme }) => theme.sizes.components.Button.L};
	left: ${({ theme }) => theme.sizes.padding.XXL};
	top: ${({ theme }) => theme.sizes.padding.XXL};
	opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
	transition: opacity 1s;
`;
