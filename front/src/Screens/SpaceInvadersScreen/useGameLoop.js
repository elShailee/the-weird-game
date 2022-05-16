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

	return { tick };
};
