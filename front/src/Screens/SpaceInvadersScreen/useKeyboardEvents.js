import { useEffect, useRef } from 'react';
import { consts } from './consts';

export const useKeyboardEvents = ({ tick, onLeft }) => {
	const pressedKeysRef = useRef({
		left: false,
		right: false,
		fire: false,
	});
	useEffect(() => {
		window.addEventListener('keydown', keyDownHandler);
		window.addEventListener('keyup', keyUpHandler);
	}, []);
	useEffect(() => {
		pressedKeysRef.current.left && onLeft();
	}, [tick]); // eslint-disable-line react-hooks/exhaustive-deps

	const keyDownHandler = e => {
		const { code: key } = e;
		if (consts.leftMovingKeys.includes(key)) {
			pressedKeysRef.current.left = true;
		}
		if (consts.rightMovingKeys.includes(key)) {
			pressedKeysRef.current.right = true;
		}
		if (consts.firingKeys.includes(key)) {
			pressedKeysRef.current.fire = true;
		}
	};

	const keyUpHandler = e => {
		const { code: key } = e;
		if (consts.leftMovingKeys.includes(key)) {
			pressedKeysRef.current.left = false;
		}
		if (consts.rightMovingKeys.includes(key)) {
			pressedKeysRef.current.right = false;
		}
		if (consts.firingKeys.includes(key)) {
			pressedKeysRef.current.fire = false;
		}
	};
	return pressedKeysRef.current;
};
