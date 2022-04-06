import { animated } from 'react-spring';
import styled from 'styled-components';

export const ScareTextContainer = styled.div`
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
`;

export const SacreText = styled.div`
	width: fit-content;
	position: absolute;
	font-size: 1.5em;
	bottom: 4vmin;
	right: 4vmin;
`;

export const WelcomeScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.isAScreen}
	${({ theme }) => theme.customStyles.centerItems}
	background-color: #f55;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 3rem;
`;

export const ChapterIndtoductionContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.isAScreen}
	${({ theme }) => theme.customStyles.centerItems}
	background: #222;
	color: #999;
	font-size: 2rem;
	font-family: ${({ theme }) => theme.fonts.primary};
`;
