import React, { useState } from 'react';
import {
	Header,
	ScreenContainer,
	ShopContainer,
	ItemsGrid,
	ItemContainer,
	EmptyGridCell,
	Item,
	GridContainer,
	PlaceHolder,
} from './styles';

export const ShopScreen = ({ screenFadeAnimation }) => {
	const [colsState, setColsState] = useState(16);
	const Cells = [];
	const clickHandler = () => {
		colsState === 16 ? setColsState(9) : setColsState(16);
	};

	Cells.push(
		<ItemContainer key='banana'>
			<Item onClick={clickHandler} key='asdasd' />
		</ItemContainer>,
	);

	for (let i = 8; i < 16 * 9; i++) {
		Cells.push(<EmptyGridCell key={i} />);
	}

	return (
		<ScreenContainer style={screenFadeAnimation}>
			<Header>The Weird Shop</Header>

			<ShopContainer>
				<GridContainer>
					<ItemsGrid rows={9} cols={colsState}>
						{Cells}
					</ItemsGrid>
				</GridContainer>
				{colsState === 9 && <PlaceHolder />}
			</ShopContainer>
		</ScreenContainer>
	);
};
