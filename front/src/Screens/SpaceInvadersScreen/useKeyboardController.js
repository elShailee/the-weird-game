import { useEffect, useRef } from 'react';
import { consts } from './consts';

export const useKeyboardController = ({ tick, onLeft, onRight, onFire }) => {
	const pressedKeysRef = useRef({
		left: false,
		right: false,
		fire: false,
	});

	useEffect(() => {
		window.addEventListener('keydown', e => keyHandler({ e, action: 'down' }));
		window.addEventListener('keyup', e => keyHandler({ e, action: 'up' }));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		pressedKeysRef.current.left && onLeft();
		pressedKeysRef.current.right && onRight();
		pressedKeysRef.current.fire && onFire();
	}, [tick]); // eslint-disable-line react-hooks/exhaustive-deps

	const keyHandler = ({ e, action }) => {
		if (action !== 'down' && action !== 'up') return;

		const { code: key } = e;
		const newKeyState = action === 'down'; //true if down, false if up;

		if (consts.leftMovingKeys.includes(key)) {
			pressedKeysRef.current.left = newKeyState;
		}
		if (consts.rightMovingKeys.includes(key)) {
			pressedKeysRef.current.right = newKeyState;
		}
		if (consts.firingKeys.includes(key)) {
			if (newKeyState) onFire();
			pressedKeysRef.current.fire = newKeyState;
		}
	};

	return pressedKeysRef.current;
};
