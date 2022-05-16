import { useEffect, useRef, useState } from 'react';
import { consts } from './consts';

export const useBullets = tick => {
	const [bulletsState, setBulletsState] = useState([]);
	const ammoRef = useRef(consts.bulletsMaxAmmo);
	const [isCooling, setIsCooling] = useState(false);

	useEffect(() => {
		bulletsState.forEach((bullet, index) => {
			bullet.y += consts.bulletSpeed;
			const maxBulletHightByPercent = 100;
			if (bullet.y > maxBulletHightByPercent) bulletsState.splice(index, 1);
		});
	}, [bulletsState, tick]);

	useEffect(() => {
		if (ammoRef.current < consts.bulletsMaxAmmo) {
			ammoRef.current += consts.bulletsRechargeRate;
			if (ammoRef.current === consts.bulletsMaxAmmo) {
				setIsCooling(false);
			}
		}
	}, [tick]);

	const fireBulletFrom = xPosition => {
		if (ammoRef.current < consts.bulletsCost) {
			return setIsCooling(true);
		}
		if (isCooling) return;

		setBulletsState([...bulletsState, { x: xPosition, y: 0 }]);
		ammoRef.current -= consts.bulletsCost;
	};

	return { bulletsState, fireBulletFrom, ammoCount: ammoRef.current, isCooling };
};
