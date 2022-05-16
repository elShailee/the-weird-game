import { useEffect, useState } from 'react';
import { consts } from './consts';

export const useBulletsTravel = tick => {
	const [bulletsState, setBulletsState] = useState([]);

	useEffect(() => {
		bulletsState.forEach((bullet, index) => {
			bullet.y += consts.bulletSpees;
			if (bullet.y > 100) bulletsState.splice(index, 1);
		});
	}, [bulletsState, tick]);

	const fireBulletFrom = xPosition => {
		setBulletsState([...bulletsState, { x: xPosition, y: 0 }]);
	};

	return { bulletsState, fireBulletFrom };
};
