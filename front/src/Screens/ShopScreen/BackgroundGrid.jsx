import React, { useState } from 'react';
import { BackgroundGridContainer, BackgroundItem1, BackgroundItem2, Item } from './styles';

export const BackgroundGrid = () => {
	const [colsState, setColsState] = useState(16);
	const Cells = [];
	const clickHandler = () => {
		colsState === 16 ? setColsState(9) : setColsState(16);
	};

	Cells.push(
		<BackgroundItem2 key='banana'>
			<Item onClick={clickHandler} key='asdasd' />
		</BackgroundItem2>,
	);

	for (let i = 8; i < 16 * 9; i++) {
		Cells.push(<BackgroundItem1 key={i} />);
	}

	return (
		<BackgroundGridContainer rows={9} cols={colsState}>
			{Cells}
		</BackgroundGridContainer>
	);
};
