import React, { useEffect, useRef } from 'react';
import { consts } from './consts';
import { ShipContainer } from './styles';
import { useKeyboardController } from './useKeyboardController';

export const Ship = ({ tick, fireBulletFrom, level }) => {
	const positionRef = useRef(0);
	// const [lastShotTime, setLastShotTime] = useState(0);
	let lastShotTime = useRef(0);

	useShipTeleportOnEdge(positionRef);

	useKeyboardController({
		tick,
		onLeft: () => (positionRef.current -= consts.shipSpeed[level]),
		onRight: () => (positionRef.current += consts.shipSpeed[level]),
		onFire: () => {
			if (tick - lastShotTime.current >= consts.bulletsDelay[level]) {
				fireBulletFrom(positionRef.current);
				lastShotTime.current = tick;
			}
		},
	});

	return <ShipContainer position={positionRef.current}>/---\</ShipContainer>;
};

const useShipTeleportOnEdge = positionRef => {
	useEffect(() => {
		if (positionRef.current < -consts.screenEdge) {
			positionRef.current = consts.screenEdge;
		}
		if (positionRef.current > consts.screenEdge) {
			positionRef.current = -consts.screenEdge;
		}
	}, [positionRef]);
};
