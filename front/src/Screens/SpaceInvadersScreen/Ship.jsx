import React, { useEffect, useRef, useState } from 'react';
import { consts } from './consts';
import { ShipContainer } from './styles';
import { useKeyboardController } from './useKeyboardController';

export const Ship = ({ tick, fireBulletFrom }) => {
	const positionRef = useRef(0);
	const blockRef = useRef({
		right: false,
		left: false,
	});
	const [lastShotTime, setLastShotTime] = useState(0);

	useEffect(() => {
		if (positionRef.current <= -consts.screenEdge) blockRef.current.left = true;
		else blockRef.current.left = false;
		if (positionRef.current >= consts.screenEdge) blockRef.current.right = true;
		else blockRef.current.right = false;
	}, [positionRef.current]); // eslint-disable-line react-hooks/exhaustive-deps

	useKeyboardController({
		tick,
		onLeft: () => {
			!blockRef.current.left && (positionRef.current -= consts.shipSpeed);
		},
		onRight: () => {
			!blockRef.current.right && (positionRef.current += consts.shipSpeed);
		},
		onFire: () => {
			if (tick - lastShotTime >= consts.fireDelay) {
				fireBulletFrom(positionRef.current);
				setLastShotTime(tick);
			}
		},
	});

	return <ShipContainer position={positionRef.current}>/--\</ShipContainer>;
};
