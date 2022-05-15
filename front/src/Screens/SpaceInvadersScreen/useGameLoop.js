import { useEffect, useState } from 'react';
import { consts } from './consts';
import { canMoveLeft, canMoveRight } from './utils';

export const useGameLoop = () => {
	const [moveDirection, setMoveDirection] = useState('none');
	const [shipPositionState, setShipPositionState] = useState(0);
	useEffect(() => {
		const gameLoop = setInterval(() => {
			if (moveDirection === 'left' && canMoveLeft(shipPositionState)) {
				setShipPositionState(shipPositionState - 1);
			} else if (moveDirection === 'right' && canMoveRight(shipPositionState)) {
				setShipPositionState(shipPositionState + 1);
			}
		}, consts.gameLoopInterval);

		return () => {
			clearInterval(gameLoop);
		};
	}, [moveDirection, shipPositionState]);

	const keyDownHandler = e => {
		const { code: key } = e;
		if (consts.leftMovingKeys.includes(key)) {
			setMoveDirection('left');
		} else if (consts.rightMovingKeys.includes(key)) {
			setMoveDirection('right');
		}
		if (consts.firingKeys.includes(key)) {
			console.log('firing');
		}
	};

	const keyUpHandler = e => {
		const { code: key } = e;
		if (consts.getMovingKeys().includes(key)) {
			setMoveDirection(false);
		}
	};

	return { keyDownHandler, keyUpHandler, shipPositionState };
};
