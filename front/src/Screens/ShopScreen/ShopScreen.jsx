import React from 'react';
import { Card, CardsContainer, Header, ShopScreenContainer } from './styles';

export const ShopScreen = ({ screenFadeAnimation }) => {
	return (
		<ShopScreenContainer style={screenFadeAnimation}>
			<Header>The Weird Shop</Header>
			<CardsContainer>
				<Card>Item1</Card>
				<Card>Item2</Card>
				<Card>Item3</Card>
				<Card>Item1</Card>
				<Card>Item2</Card>
				<Card>Item3</Card>
				<Card>Item1</Card>
				<Card>Item2</Card>
				<Card>Item3</Card>
			</CardsContainer>
		</ShopScreenContainer>
	);
};
