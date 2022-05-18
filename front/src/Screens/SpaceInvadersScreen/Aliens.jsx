import React, { useEffect, useMemo, useRef } from 'react';
import { consts } from './consts';
import { Alien } from './styles';

const getAliensPosition = level => {
	const aliens = consts.aliens[level];
	return aliens.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return {
				isAlive: true,
				x: consts.aliensSize.x * (colIndex - (row.length - 1) / 2),
				y: consts.aliensSize.y * (aliens.length - 1 - rowIndex) + 60,
			};
		});
	});
};

export const Aliens = ({ tick, bulletsPosArray, level, skipLevel }) => {
	const aliensPositions = useMemo(() => getAliensPosition(level), [level]);
	const directionRef = useRef('left');

	useEffect(() => {
		let shouldSwitchDirection = false;
		aliensPositions.forEach((row, rowIndex) => {
			row.forEach((alien, alienIndex) => {
				// hit checker
				bulletsPosArray.forEach((bulletPos, bulletIndex) => {
					if (
						Math.abs(alien.x - bulletPos.x) <= consts.aimAssist &&
						Math.abs(alien.y - bulletPos.y) <= consts.aimAssist &&
						alien.isAlive
					) {
						alien.isAlive = false;
						bulletsPosArray.splice(bulletIndex, 1);
					}
				});

				// aliens movement
				alien.x += (directionRef.current === 'left' ? -1 : 1) * consts.aliensSpeed[level].x;
				if (Math.abs(alien.x) >= consts.aliensTravelDistance) {
					shouldSwitchDirection = true;
				}
			});
		});

		if (shouldSwitchDirection) {
			directionRef.current = directionRef.current === 'right' ? 'left' : 'right';
			aliensPositions.forEach(row =>
				row.forEach(alien => {
					alien.y -= consts.aliensSpeed[level].y;
				}),
			);
		}
	}, [tick, bulletsPosArray, aliensPositions, level]);

	// useEffect(() => {
	// 	if (positionRef.current.dir === 'left') positionRef.current.x -= consts.aliensSpeed.x;
	// 	else if (positionRef.current.dir === 'right') positionRef.current.x += consts.aliensSpeed.x;
	// 	if (Math.abs(positionRef.current.x) >= consts.aliensTravelDistance) {
	// 		positionRef.current.dir = positionRef.current.dir === 'left' ? 'right' : 'left';
	// 		positionRef.current.y -= consts.aliensSpeed.y;
	// 	}
	// }, [tick]);

	// useEffect(() => {
	// 	bulletsPosArray.forEach((bullet, bulletIndex) => {
	// 		let didHit = false;
	// 		aliensState.forEach((row, rowIndex) => {
	// 			if (didHit) return;
	// 			row.forEach((alien, alienIndex) => {
	// 				if (didHit) return;
	// 				if (
	// 					Math.abs(
	// 						bullet.x -
	// 							(alienIndex - (row.length - 1) / 2) * (consts.aliensWidth + 1) -
	// 							positionRef.current.x,
	// 					) <= 3 &&
	// 					Math.abs(bullet.y - consts.bulletSpeed / 2 - positionRef.current.y - rowIndex) <= 1.5 &&
	// 					alien === 1
	// 				) {
	// 					didHit = true;
	// 					aliensState[rowIndex][alienIndex] = 2;
	// 					setAliensState(aliensState);
	// 					bulletsPosArray.splice(bulletIndex, 1);
	// 				}
	// 			});
	// 		});
	// 	});
	// }, [tick, aliensState, bulletsPosArray]);

	const renderAliens = useMemo(
		() => {
			return aliensPositions.map((row, rowIndex) => {
				return row.map((alienPos, alienIndex) => {
					// if (alienPos > 1 && alienPos <= 10) {
					// 	aliensPositionState[rowIndex][alienIndex]++;
					// 	return (
					// 		<Alien key={alienIndex} size={consts.aliensSize} pos={alienPos}>
					// 			X
					// 		</Alien>
					// 	);
					// }
					return (
						<Alien key={alienIndex} size={consts.aliensSize} pos={alienPos}>
							{alienPos.isAlive ? '(---)' : ''}
						</Alien>
					);
				});
			});
		},
		[tick, aliensPositions], // eslint-disable-line react-hooks/exhaustive-deps
	);

	return <>{renderAliens}</>;
};
