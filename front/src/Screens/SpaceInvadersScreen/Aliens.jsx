import React, { useEffect, useMemo, useRef } from 'react';
import { consts } from './consts';
import { Alien } from './styles';

const aliensSkinsByHealth = {
	0: '',
	1: '(---)',
	2: '|---|',
	3: '<--->',
};

const getAliensPosition = level => {
	const aliens = level.aliens;
	return aliens.map((row, rowIndex) => {
		return row.map((cel, celIndex) => {
			return {
				health: cel,
				x: level.aliensSize.x * (celIndex - (row.length - 1) / 2),
				y: level.aliensSize.y * (aliens.length - 1 - rowIndex) + 60,
			};
		});
	});
};

export const Aliens = ({ tick, bulletsPosArray, level, skipLevel }) => {
	const aliensPositions = useMemo(() => getAliensPosition(level), [level]);
	const directionRef = useRef('left');

	useEffect(() => {
		let shouldSwitchDirection = false;
		let isLevelDefeated = true;
		aliensPositions.forEach((row, rowIndex) => {
			row.forEach((alien, alienIndex) => {
				// hit checker
				bulletsPosArray.forEach((bulletPos, bulletIndex) => {
					if (
						Math.abs(alien.x - bulletPos.x) <= consts.aimAssist &&
						Math.abs(alien.y - bulletPos.y) <= consts.aimAssist &&
						alien.health > 0
					) {
						alien.health--;
						bulletsPosArray.splice(bulletIndex, 1);
					}
				});

				// aliens movement
				alien.x += (directionRef.current === 'left' ? -1 : 1) * level.aliensSpeed.x;
				if (Math.abs(alien.x) >= consts.aliensTravelDistance) {
					shouldSwitchDirection = true;
				}

				// level advance check
				if (alien.health > 0) {
					isLevelDefeated = false;
				}
			});
		});

		if (shouldSwitchDirection) {
			directionRef.current = directionRef.current === 'right' ? 'left' : 'right';
			aliensPositions.forEach(row =>
				row.forEach(alien => {
					alien.y -= level.aliensSpeed.y;
				}),
			);
		}

		if (isLevelDefeated) {
			skipLevel();
		}
	}, [tick, bulletsPosArray, aliensPositions, level, skipLevel]);

	const renderAliens = useMemo(
		() => {
			return aliensPositions.map((row, rowIndex) => {
				return row.map((alienPos, alienIndex) => {
					return (
						<Alien key={alienIndex} size={level.aliensSize} pos={alienPos}>
							{aliensSkinsByHealth[alienPos.health]}
						</Alien>
					);
				});
			});
		},
		[tick, aliensPositions], // eslint-disable-line react-hooks/exhaustive-deps
	);

	return <>{renderAliens}</>;
};
