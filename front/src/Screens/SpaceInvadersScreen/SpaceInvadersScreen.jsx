import React, { useRef, useEffect, useState } from 'react';
import { Aliens } from './Aliens';
import { consts } from './consts';
import { Ship } from './Ship';
import { AmmoBar, Bullet, ScreenContainer } from './styles';
import { useBullets } from './useBullets';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const [levelNumState, setLevelNumState] = useState(consts.startingLevel);
	const gameLoop = useGameLoop(levelNumState);
	const bullets = useBullets({ tick: gameLoop.tick, level: levelNumState });

	const skipLevel = () => {
		setLevelNumState(levelNumState + 1);
	};

	useEffect(() => {
		focusRef.current.focus();
	}, []);

	const renderBullets = bullets.bulletsPosArray.map((position, index) => {
		return (
			<Bullet position={position} key={index}>
				|
			</Bullet>
		);
	});

	return (
		<ScreenContainer ref={focusRef}>
			<Ship tick={gameLoop.tick} fireBulletFrom={bullets.fireBulletFrom} level={levelNumState} />

			{renderBullets}
			<AmmoBar ammoPercent={(100 * bullets.ammoCount) / consts.bulletsMaxAmmo[levelNumState]} />
			<Aliens
				tick={gameLoop.tick}
				bulletsPosArray={bullets.bulletsPosArray}
				level={levelNumState}
				skipLevel={skipLevel}
			/>
		</ScreenContainer>
	);
};
