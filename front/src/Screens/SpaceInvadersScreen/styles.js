import styled from 'styled-components';
import { consts } from './consts';

export const ScreenContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
  font-size: ${({ theme }) => theme.sizes.text.L};
	background-color: aquamarine;
`;

export const Ship = styled.div`
	position: absolute;
	bottom: 2rem;
	transform: translateX(-50%);
	left: ${props => props.shipPositionState * consts.travelDistance + 50 + '%'};
`;
Ship.defaultProps = {
	children: `/---\\`,
};
