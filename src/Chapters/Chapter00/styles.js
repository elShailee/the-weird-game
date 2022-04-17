import { animated } from 'react-spring';
import styled from 'styled-components';

export const HiddenMessageTextContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const WelcomeScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: ${({ theme }) => theme.sizes.padding.L};
	background-color: ${({ theme }) => theme.colors.chapter00.welcomeScreenBG};
	color: ${({ theme }) => theme.colors.chapter00.welcomeScreenText};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;

export const IntroductionScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: ${({ theme }) => theme.sizes.padding.L};
	background-color: ${({ theme }) => theme.colors.chapter00.introScreenBG};
	color: ${({ theme }) => theme.colors.chapter00.introScreenText};
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ClickHintContainer = styled(animated.div)`
	font-size: ${({ theme }) => theme.sizes.text.S};
	margin-top: ${({ theme }) => theme.sizes.padding.M};
	letter-spacing: ${({ theme }) => theme.sizes.letterSpacing.L};
`;
