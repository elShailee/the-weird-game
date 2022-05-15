import { consts } from './consts';
import { Ship } from './Ship';

export const keyDownHandler = e => {
	const { code: key } = e;
	if (consts.leftMovingKeys.includes(key)) {
		Ship.moveDirection = 'left';
	} else if (consts.rightMovingKeys.includes(key)) {
		Ship.moveDirection = 'right';
	}
	if (consts.firingKeys.includes(key)) {
		console.log('firing');
	}
};

export const keyUpHandler = e => {
	const { code: key } = e;
	if (consts.getMovingKeys().includes(key)) {
		Ship.moveDirection = 'none';
	}
};
