import React, { useEffect, useRef, useState } from 'react';
import { consts } from './consts';
import { Alien, AliensContainer, AliensRow } from './styles';

export const Aliens = ({ tick, bulletsPosArray }) => {
	const positionRef = useRef({ x: 0, y: 70, dir: 'left' });
	const [aliensState, setAliensState] = useState([
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
	]);
	useEffect(() => {
		if (positionRef.current.dir === 'left') positionRef.current.x -= consts.aliensSpeed.x;
		else if (positionRef.current.dir === 'right') positionRef.current.x += consts.aliensSpeed.x;
		if (Math.abs(positionRef.current.x) >= consts.aliensTravelDistance) {
			positionRef.current.dir = positionRef.current.dir === 'left' ? 'right' : 'left';
			positionRef.current.y -= consts.aliensSpeed.y;
		}
	}, [tick]);

	useEffect(() => {
		bulletsPosArray.forEach((bullet, bulletIndex) => {
			let didHit = false;
			aliensState.forEach((row, rowIndex) => {
				if (didHit) return;
				row.forEach((alien, alienIndex) => {
					if (didHit) return;
					if (
						Math.abs(
							bullet.x -
								(alienIndex - (row.length - 1) / 2) * (consts.aliensWidth + 1) -
								positionRef.current.x,
						) <= 3 &&
						Math.abs(bullet.y - consts.bulletSpeed / 2 - positionRef.current.y - rowIndex) <= 1.5 &&
						alien === 1
					) {
						didHit = true;
						aliensState[rowIndex][alienIndex] = 2;
						setAliensState(aliensState);
						bulletsPosArray.splice(bulletIndex, 1);
					}
				});
			});
		});
	}, [tick, aliensState, bulletsPosArray]);

	const renderAliens = () =>
		aliensState.map((row, rowIndex) => {
			return (
				<AliensRow key={rowIndex}>
					{row.map((alien, alienIndex) => {
						if (alien > 1 && alien <= 10) {
							aliensState[rowIndex][alienIndex]++;
							return (
								<Alien key={alienIndex} width={consts.aliensWidth}>
									X
								</Alien>
							);
						}
						return (
							<Alien key={alienIndex} width={consts.aliensWidth}>
								{alien === 1 ? '(---)' : ''}
							</Alien>
						);
					})}
				</AliensRow>
			);
		});

	return (
		<AliensContainer left={positionRef.current.x} top={positionRef.current.y}>
			{renderAliens()}
		</AliensContainer>
	);
};
