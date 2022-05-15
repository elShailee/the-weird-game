import React, { useState } from 'react';
import { ShipContainer } from './styles';
import { useKeyboardEvents } from './useKeyboardEvents';

export const Ship = ({ tick }) => {
	const [position, setPosition] = useState(0);
	useKeyboardEvents({
		tick,
		onLeft: () => {
			setPosition(position - 1);
		},
	});

	return <ShipContainer position={position}>/--\</ShipContainer>;
};
