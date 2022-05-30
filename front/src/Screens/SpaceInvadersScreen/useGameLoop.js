import { useEffect, useState } from 'react';

export const useGameLoop = interval => {
	const [tick, setTick] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let gameLoop;
		if (isRunning) {
			gameLoop = setInterval(() => {
				setTick(tick + 1);
			}, interval);
		}

		return () => {
			clearInterval(gameLoop);
		};
	}, [tick, interval, isRunning]);

	const start = () => {
		setIsRunning(true);
	};

	const pause = () => {
		setIsRunning(false);
	};

	return { tick, start, pause, isRunning };
};
