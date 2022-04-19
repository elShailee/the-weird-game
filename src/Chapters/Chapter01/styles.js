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

export const SumContainer = styled.div`
	position: absolute;
	top: ${({ shouldShow }) => (shouldShow ? '20vh' : '40vh')};
	height: ${({ shouldShow }) => (shouldShow ? '5rem' : '0')};
	font-size: ${({ theme }) => theme.sizes.text.XL};
	overflow: hidden;
	transition: height 0.5s ease-in-out, top 1s ease-in-out;
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

export const TipContainer = styled(animated.div)`
	position: absolute;
	padding: ${({ theme }) => theme.sizes.padding.M} ${({ theme }) => theme.sizes.padding.L};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	top: 2rem;
	font-size: ${({ theme }) => theme.sizes.text.S};
`;
