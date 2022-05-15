import { useEffect, useState } from 'react';
import { consts } from './consts';

export const useGameLoop = () => {
	const [tick, setTick] = useState(0);

	useEffect(() => {
		const gameLoop = setInterval(() => {
			setTick(tick + 1);
		}, consts.gameLoopInterval);

		return () => {
			clearInterval(gameLoop);
		};
	}, [tick]);

	// const moveShip = () => {
	// 	if (ship.moveDirection === 'left' && ship.blockedFrom !== 'left') {
	// 		ship.position = ship.position - 1;
	// 	} else if (ship.moveDirection === 'right' && ship.blockedFrom !== 'right') {
	// 		ship.position = ship.position + 1;
	// 	}
	// 	if (ship.position <= -46) {
	// 		ship.blockedFrom = 'left';
	// 	} else if (ship.position >= 46) {
	// 		ship.blockedFrom = 'right';
	// 	} else {
	// 		ship.blockedFrom = null;
	// 	}
	// };

	// const moveAliens = () => {
	// 	if (tick % consts.alienMoveTick !== 0) return;
	// };

	return { tick };
};
