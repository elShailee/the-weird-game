import React, { useRef, useEffect } from 'react';
import { Ship } from './Ship';
import { Bullet, ScreenContainer } from './styles';
import { useBulletsTravel } from './useBulletsTravel';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const gameLoop = useGameLoop();
	const bullets = useBulletsTravel(gameLoop.tick);
	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<ScreenContainer ref={focusRef}>
			<Ship tick={gameLoop.tick} fireBulletFrom={bullets.fireBulletFrom} />
			{bullets.bulletsState.map((position, index) => {
				return (
					<Bullet position={position} key={index}>
						|
					</Bullet>
				);
			})}
		</ScreenContainer>
	);
};
