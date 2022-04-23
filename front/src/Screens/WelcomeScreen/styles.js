import { animated } from 'react-spring';
import styled from 'styled-components';

export const ScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: ${({ theme }) => theme.sizes.padding.XL};
	background-color: ${({ theme }) => theme.colors.introScreen.welcomeScreenBG};
	color: ${({ theme }) => theme.colors.introScreen.welcomeScreenText};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;

export const HiddenMessageTextContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: ${({ theme }) => theme.fonts.primary};
`;
