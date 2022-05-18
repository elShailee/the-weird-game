import { useEffect, useState } from 'react';
import { consts } from './consts';

export const useGameLoop = level => {
	const [tick, setTick] = useState(0);

	useEffect(() => {
		const gameLoop = setInterval(() => {
			setTick(tick + 1);
		}, consts.gameLoopInterval[level]);

		return () => {
			clearInterval(gameLoop);
		};
	}, [tick, level]);

	return { tick };
};
