import React, { useState } from 'react';
import { Header, ScreenContainer } from './styles';
import {
	ContentContainer,
	Item,
	ItemsGrid,
	ItemsGridContainer,
	ItemWindowContainer,
} from './tempStyles';

export const ShopScreen = ({ screenFadeAnimation }) => {
	const [selectedItemState, setSelectedItem] = useState(false);

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
			<ContentContainer>
				<ItemsGridContainer
					isItemSelected={selectedItemState}
					onClick={() => setSelectedItem(!selectedItemState)}
				>
					<ItemsGrid>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
					</ItemsGrid>
				</ItemsGridContainer>
				<ItemWindowContainer isItemSelected={selectedItemState}></ItemWindowContainer>
			</ContentContainer>
		</ScreenContainer>
	);
};
