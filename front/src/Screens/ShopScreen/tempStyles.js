import styled from 'styled-components';

export const ContentContainer = styled.div`
	width: 80vw;
	height: 100%;
`;

export const ItemsGridContainer = styled.div`
	height: ${({ isItemSelected }) => (isItemSelected ? 'calc(100% - 20rem)' : '100%')};
	transition: height 0.5s ease-in-out;
	overflow-y: auto;
	${({ theme }) => theme.customStyles.hideScrollbar}
`;

export const ItemsGrid = styled.div`
	background-color: #000;
	display: grid;
	grid-gap: 1rem;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, minmax(3.5rem, 4.5rem));
	grid-auto-rows: 4rem;
`;

export const Item = styled.div`
	height: 100%;
	border-radius: 15%;
	background-color: #555;
`;

export const ItemWindowContainer = styled.div`
	width: 80vw;
	height: ${({ isItemSelected }) => (isItemSelected ? '20rem' : '0')};
	background-color: rgba(200, 200, 200, 0.5);
	padding: ${({ isItemSelected, theme }) => (isItemSelected ? theme.sizes.padding.XXL : '0')};
	transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
	box-sizing: border-box;
`;
