import React, { useRef, useEffect, useState } from 'react';
import { consts } from './consts';
import { Ship } from './Ship';
import { Bullet, ScreenContainer } from './styles';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const gameLoop = useGameLoop();
	const [bulletsState, setBulletsState] = useState([]);
	const fireBullet = xPosition => {
		setBulletsState([...bulletsState, { x: xPosition, y: 0 }]);
	};
	useEffect(() => {
		console.log(bulletsState);
		bulletsState.forEach((bullet, index) => {
			bullet.y += consts.bulletSpees;
			if (bullet.y > 100) bulletsState.splice(index, 1);
		});
	}, [bulletsState, gameLoop.tick]);

	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<ScreenContainer ref={focusRef}>
			<Ship tick={gameLoop.tick} fireBullet={fireBullet} />
			{bulletsState.map((position, index) => {
				return (
					<Bullet position={position} key={index}>
						|
					</Bullet>
				);
			})}
		</ScreenContainer>
	);
};
