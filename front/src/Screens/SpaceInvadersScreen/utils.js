import { consts } from './consts';

export const canMoveLeft = position => {
	return position * consts.travelDistance > -46;
};
export const canMoveRight = position => {
	return position * consts.travelDistance < 46;
};
