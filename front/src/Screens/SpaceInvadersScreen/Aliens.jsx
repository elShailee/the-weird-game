import React, { useEffect, useRef } from 'react';
import { consts } from './consts';
import { Alien, AliensContainer, AliensRow } from './styles';

export const Aliens = ({ tick }) => {
	const positionRef = useRef({ x: 0, y: 0, dir: 'left' });
	const aliens = [
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
	];
	useEffect(() => {
		console.log(positionRef.current.x);
		if (positionRef.current.dir === 'left') positionRef.current.x -= consts.aliensSpeed.x;
		else if (positionRef.current.dir === 'right') positionRef.current.x += consts.aliensSpeed.x;
		if (Math.abs(positionRef.current.x) >= consts.aliensTravelDistance) {
			console.log('switch');
			positionRef.current.dir = positionRef.current.dir === 'left' ? 'right' : 'left';
			positionRef.current.y += consts.aliensSpeed.y;
		}
	}, [tick]);

	const renderAliens = () => {
		return aliens.map((row, index) => {
			return (
				<AliensRow key={index}>
					{row.map((alien, index) => {
						return <Alien key={index}>|---|</Alien>;
					})}
				</AliensRow>
			);
		});
	};

	return (
		<AliensContainer left={positionRef.current.x} top={positionRef.current.y}>
			{renderAliens()}
		</AliensContainer>
	);
};
