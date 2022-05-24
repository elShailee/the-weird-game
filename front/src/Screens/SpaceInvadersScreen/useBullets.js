import { useEffect, useMemo, useRef, useState } from 'react';

export const useBullets = ({ tick, level }) => {
	const bulletsPosArray = useMemo(() => [], []);
	const ammoRef = useRef(level.bulletsMaxAmmo);
	const [isCooling, setIsCooling] = useState(false);

	useEffect(() => {
		bulletsPosArray.forEach((bullet, index) => {
			bullet.y += level.bulletSpeed;
			const maxBulletHightByPercent = 100;
			if (bullet.y > maxBulletHightByPercent) bulletsPosArray.splice(index, 1);
		});
	}, [bulletsPosArray, tick, level]);

	useEffect(() => {
		if (ammoRef.current < level.bulletsMaxAmmo) {
			ammoRef.current += level.bulletsRechargeRate;
			if (ammoRef.current >= level.bulletsMaxAmmo) {
				setIsCooling(false);
			}
		}
	}, [tick, level]);

	const fireBulletFrom = xPosition => {
		if (ammoRef.current < level.bulletsCost) {
			return setIsCooling(true);
		}
		if (isCooling) return;

		bulletsPosArray.push({ x: xPosition, y: 0 });
		ammoRef.current -= level.bulletsCost;
	};

	return { bulletsPosArray, fireBulletFrom, ammoCount: ammoRef.current, isCooling };
};
