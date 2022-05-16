import React, { useRef, useEffect } from 'react';
import { consts } from './consts';
import { Ship } from './Ship';
import { AmmoBar, Bullet, ScreenContainer } from './styles';
import { useBullets } from './useBullets';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const gameLoop = useGameLoop();
	const bullets = useBullets(gameLoop.tick);
	useEffect(() => {
		focusRef.current.focus();
	}, []);

	const renderBullets = bullets.bulletsState.map((position, index) => {
		return (
			<Bullet position={position} key={index}>
				|
			</Bullet>
		);
	});

	return (
		<ScreenContainer ref={focusRef}>
			<Ship tick={gameLoop.tick} fireBulletFrom={bullets.fireBulletFrom} />

			{renderBullets}
			<AmmoBar ammoPercent={(100 * bullets.ammoCount) / consts.bulletsMaxAmmo} />
		</ScreenContainer>
	);
};
