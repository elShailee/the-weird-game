import React, { useState } from 'react';
import {
	Header,
	ScreenContainer,
	// ShopContainer,
	// ItemsGrid,
	// ItemContainer,
	// EmptyGridCell,
	// Item,
	// GridContainer,
	// PlaceHolder,
} from './styles';

export const ShopScreen = ({ screenFadeAnimation }) => {
	// const [colsState, setColsState] = useState(16);
	// const Cells = [];
	// const clickHandler = () => {
	// 	colsState === 16 ? setColsState(9) : setColsState(16);
	// };

	// Cells.push(
	// 	<ItemContainer key='banana'>
	// 		<Item onClick={clickHandler} key='asdasd' />
	// 	</ItemContainer>,
	// );

	// for (let i = 8; i < 16 * 9; i++) {
	// 	Cells.push(<EmptyGridCell key={i} />);
	// }

	// scroll handling
	const scrollHandler = e => {
		const tar = e.target;
		const isTopScrolled = tar.scrollTop === 0;
		const isBottomScrolled = Math.abs(tar.scrollHeight - tar.scrollTop - tar.clientHeight) < 1;
		console.log(`top: ${isTopScrolled}\nbottom: ${isBottomScrolled}`);
	};

	return (
		<ScreenContainer style={screenFadeAnimation}>
			<Header>The Weird Shop</Header>

			{/* <ShopContainer>
				<GridContainer onScroll={scrollHandler} isTipVisible={colsState === 9}>
					<ItemsGrid rows={9} cols={colsState}>
						{Cells}
					</ItemsGrid>
				</GridContainer>
				<PlaceHolder isVisible={colsState === 9} />
			</ShopContainer> */}
		</ScreenContainer>
	);
};
