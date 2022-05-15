import React, { useRef, useEffect } from 'react';
import { Ship } from './Ship';
import { ScreenContainer } from './styles';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const gameLoop = useGameLoop();

	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<ScreenContainer ref={focusRef}>
			<Ship tick={gameLoop.tick} />
			{/* {aliensGroup.aliens.map((alien, index) => {
				return <Alien key={index} position={alien.position} />;
			})} */}
		</ScreenContainer>
	);
};
