import React, { useRef, useEffect } from 'react';
import { ScreenContainer, Ship } from './styles';
import { useGameLoop } from './useGameLoop';

export const SpaceInvadersScreen = () => {
	const focusRef = useRef();
	const gameLoop = useGameLoop();

	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<ScreenContainer
			onKeyDown={gameLoop.keyDownHandler}
			onKeyUp={gameLoop.keyUpHandler}
			tabIndex='0'
			ref={focusRef}
		>
			<Ship shipPositionState={gameLoop.shipPositionState} />
		</ScreenContainer>
	);
};
