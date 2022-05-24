import { useEffect, useState } from 'react';

export const useGameLoop = interval => {
	const [tick, setTick] = useState(0);

	useEffect(() => {
		const gameLoop = setInterval(() => {
			setTick(tick + 1);
		}, interval);

		return () => {
			clearInterval(gameLoop);
		};
	}, [tick, interval]);

	return { tick };
};
