import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Aliens } from './Aliens';
import { consts } from './consts';
import { GameStartModal } from './GameStartModal';
import { getLevelByNum } from './levels';
import { Ship } from './Ship';
import { AmmoBar, Bullet, LevelNumDisplay, ScreenContainer } from './styles';
import { useBullets } from './useBullets';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const scoreRef = useRef(0);
	const startingLevel = useMemo(() => getLevelByNum(consts.startingLevel), []);
	const [levelState, setLevelState] = useState(startingLevel);
	const [isSwitchingLevels, setIsSwitchingLevels] = useState(false);
	const gameLoop = useGameLoop(levelState.gameLoopInterval);
	const bullets = useBullets({ tick: gameLoop.tick, level: levelState });

	const skipLevel = () => {
		const nextLevel = getLevelByNum(levelState.levelNum + 1);
		if (nextLevel !== null) {
			setLevelState(nextLevel);
			setIsSwitchingLevels(true);
			setTimeout(() => setIsSwitchingLevels(false), consts.levelSwitchDelay);
		} else {
			setTimeout(handleGameEnd, 500);
		}
	};

	useEffect(() => {
		focusRef.current.focus();
		setTimeout(() => setIsSwitchingLevels(false), consts.levelSwitchDelay);
	}, []);

	const startNewGame = () => {
		scoreRef.current = 0;
		gameLoop.start();
		setLevelState(startingLevel);
		setIsSwitchingLevels(true);
		setTimeout(() => setIsSwitchingLevels(false), consts.levelSwitchDelay);
	};
	const handleGameEnd = () => {
		gameLoop.pause();
	};

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
				scoreRef={scoreRef}
				handleGameEnd={handleGameEnd}
			/>

			{/* {isSwitchingLevels && ( */}
			<LevelNumDisplay isShown={isSwitchingLevels}>Level {levelState.levelNum}</LevelNumDisplay>
			{/* )} */}
			{!gameLoop.isRunning && (
				<GameStartModal
					isShown={!gameLoop.isRunning}
					score={scoreRef.current}
					startGame={startNewGame}
				/>
			)}
		</ScreenContainer>
	);
};
