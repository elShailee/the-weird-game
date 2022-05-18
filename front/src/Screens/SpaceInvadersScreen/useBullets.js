import { useEffect, useMemo, useRef, useState } from 'react';
import { consts } from './consts';

export const useBullets = ({ tick, level }) => {
	const bulletsPosArray = useMemo(() => [], []);
	const ammoRef = useRef(consts.bulletsMaxAmmo[level]);
	const [isCooling, setIsCooling] = useState(false);

	useEffect(() => {
		bulletsPosArray.forEach((bullet, index) => {
			bullet.y += consts.bulletSpeed[level];
			const maxBulletHightByPercent = 100;
			if (bullet.y > maxBulletHightByPercent) bulletsPosArray.splice(index, 1);
		});
	}, [bulletsPosArray, tick, level]);

	useEffect(() => {
		if (ammoRef.current < consts.bulletsMaxAmmo[level]) {
			ammoRef.current += consts.bulletsRechargeRate[level];
			if (ammoRef.current >= consts.bulletsMaxAmmo[level]) {
				setIsCooling(false);
			}
		}
	}, [tick, level]);

	const fireBulletFrom = xPosition => {
		if (ammoRef.current < consts.bulletsCost[level]) {
			return setIsCooling(true);
		}
		if (isCooling) return;

		bulletsPosArray.push({ x: xPosition, y: 0 });
		ammoRef.current -= consts.bulletsCost[level];
	};

	return { bulletsPosArray, fireBulletFrom, ammoCount: ammoRef.current, isCooling };
};
