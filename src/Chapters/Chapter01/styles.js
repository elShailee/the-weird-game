import { animated } from 'react-spring';
import styled from 'styled-components';

export const ChapterContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.nonSelectable}
  ${({ theme }) => theme.customStyles.centerItems}
  font-size:${({ theme }) => theme.sizes.text.M};
	font-family: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.colors.chapter01.BG};
	color: ${({ theme }) => theme.colors.chapter01.text.light};
`;

const smallBoxShadow =
	'0px 3px 5px -1px rgba(0, 0, 0, 0.25), 0px 6px 10px 0px rgba(0, 0, 0, 0.2), 0px 1px 18px 0px rgba(0, 0, 0, 0.16)';
const bigBoxShadow =
	'0px 7px 8px -4px rgb(0, 0, 0, 0.25), 0px 12px 17px 2px rgb(0, 0, 0, 0.2),	0px 5px 22px 4px rgb(0, 0, 0, 0.16)';

export const AddButton = styled(animated.div)`
	width: 3.5rem;
	height: 3.5rem;
	background-color: ${({ bgc }) => bgc};
	border-radius: 50%;
	font-size: ${({ theme }) => theme.sizes.text.L};
	color: ${({ theme }) => theme.colors.chapter01.addButton.text};
	${({ theme }) => theme.customStyles.centerItems};
	${({ theme }) => theme.customStyles.clickable};
	box-shadow: ${smallBoxShadow};
	transition: box-shadow 250ms ease, filter 400ms;

	&:hover {
		filter: brightness(123%);
	}
	&:hover {
		box-shadow: ${bigBoxShadow};
	}

	&:active {
		transition: box-shadow 250ms ease, filter 0ms;
		filter: brightness(185%) saturate(65%);
	}
`;

export const SumContainer = styled.div`
	font-size: ${({ shouldShow }) => (shouldShow ? '2rem' : '0')};
	overflow: hidden;
	transition: font-size 1s ease-in-out;
`;

export const Btn = styled.button`
	width: 5rem;
	height: 5rem;
	font-size: 2rem;
	border-radius: 50%;
	margin: 1rem;
`;

export const TrashButton = styled.button`
	border-radius: 5px;
	height: 2rem;
	position: absolute;
	bottom: 5rem;
	right: 3rem;
	opacity: ${({ shouldShow }) => (shouldShow ? '1' : '0')};
	transition: opacity 1s;
`;

export const TipContainer = styled.div`
	position: absolute;
	top: 2rem;
	font-size: ${({ theme }) => theme.sizes.text.S};
`;
