import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Aliens } from './Aliens';
import { consts } from './consts';
import { getLevelBynum } from './levels';
import { Ship } from './Ship';
import { AmmoBar, Bullet, ScreenContainer } from './styles';
import { useBullets } from './useBullets';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const startingLevel = useMemo(() => getLevelBynum(consts.startingLevel), []);
	const [levelState, setLevelState] = useState(startingLevel);
	const gameLoop = useGameLoop(levelState.gameLoopInterval);
	const bullets = useBullets({ tick: gameLoop.tick, level: levelState });

	const skipLevel = () => {
		setLevelState(getLevelBynum(levelState.num + 1));
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
			<Ship tick={gameLoop.tick} fireBulletFrom={bullets.fireBulletFrom} level={levelState} />

			{renderBullets}
			<AmmoBar ammoPercent={(100 * bullets.ammoCount) / levelState.bulletsMaxAmmo} />
			<Aliens
				tick={gameLoop.tick}
				bulletsPosArray={bullets.bulletsPosArray}
				level={levelState}
				skipLevel={skipLevel}
			/>
		</ScreenContainer>
	);
};
