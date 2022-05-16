import React, { useEffect, useRef, useState } from 'react';
import { consts } from './consts';
import { ShipContainer } from './styles';
import { useKeyboardController } from './useKeyboardController';

export const Ship = ({ tick, fireBulletFrom }) => {
	const positionRef = useRef(0);
	const [lastShotTime, setLastShotTime] = useState(0);

	useShipTeleportOnEdge(positionRef);

	useKeyboardController({
		tick,
		onLeft: () => (positionRef.current -= consts.shipSpeed),
		onRight: () => (positionRef.current += consts.shipSpeed),
		onFire: () => {
			if (tick - lastShotTime >= consts.fireDelay) {
				fireBulletFrom(positionRef.current);
				setLastShotTime(tick);
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
	}, [positionRef.current]); // eslint-disable-line react-hooks/exhaustive-deps
};
