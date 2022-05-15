import styled from 'styled-components';
import { consts } from './consts';
import { aliensGroup } from './entities';

export const ScreenContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
  font-size: ${({ theme }) => theme.sizes.text.L};
	background-color: aquamarine;
`;

export const ShipContainer = styled.div`
	position: absolute;
	bottom: 5rem;
	left: ${({ position }) => position * consts.travelDistance + 50 + '%'};
	transform: translateX(-50%);
`;

export const Alien = styled.div`
	position: absolute;
	top: 5rem;
	left: ${({ position }) => {
		return position * consts.travelDistance + 50 + '%';
	}};
	transform: translateX(-50%);
`;
Alien.defaultProps = {
	children: aliensGroup.alienText,
};
