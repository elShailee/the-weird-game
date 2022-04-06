import { animated } from 'react-spring';
import styled from 'styled-components';

export const ScareTextContainer = styled.div`
	${({ theme }) => theme.customStyles.isAScreen}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export const SacreText = styled.div`
	width: fit-content;
	font-size: 1.5em;
`;

export const WelcomeScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.isAScreen}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.chapter00.welcomeScreenBG};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 3rem;
`;

export const ChapterIndtoductionContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.isAScreen}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.chapter00.introScreenBG};
	color: ${({ theme }) => theme.colors.chapter00.introScreenText};
	font-size: 2rem;
	font-family: ${({ theme }) => theme.fonts.primary};
`;
