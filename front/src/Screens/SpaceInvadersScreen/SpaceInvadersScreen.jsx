import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Aliens } from './Aliens';
import { consts } from './consts';
import { getLevelByNum } from './levels';
import { Ship } from './Ship';
import { AmmoBar, Bullet, LevelNumDisplay, ScreenContainer } from './styles';
import { useBullets } from './useBullets';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const startingLevel = useMemo(() => getLevelByNum(consts.startingLevel), []);
	const [levelState, setLevelState] = useState(startingLevel);
	const [isSwitchingLevels, setIsSwitchingLevels] = useState(true);
	const gameLoop = useGameLoop(levelState.gameLoopInterval);
	const bullets = useBullets({ tick: gameLoop.tick, level: levelState });

	const skipLevel = () => {
		setLevelState(getLevelByNum(levelState.levelNum + 1));
		setIsSwitchingLevels(true);
		setTimeout(() => setIsSwitchingLevels(false), consts.levelSwitchDelay);
	};

	useEffect(() => {
		focusRef.current.focus();
		setTimeout(() => setIsSwitchingLevels(false), consts.levelSwitchDelay);
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

			<LevelNumDisplay isShown={isSwitchingLevels}>Level {levelState.levelNum}</LevelNumDisplay>
		</ScreenContainer>
	);
};
