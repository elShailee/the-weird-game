import { animated } from 'react-spring';
import styled from 'styled-components';

export const IntroductionScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	padding: ${({ theme }) => theme.sizes.padding.XL};
	background-color: ${({ theme }) => theme.colors.introScreen.dialogScreenBG};
	color: ${({ theme }) => theme.colors.introScreen.dialogScreenText};
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ClickHintContainer = styled(animated.div)`
	font-size: ${({ theme }) => theme.sizes.text.S};
	margin-top: ${({ theme }) => theme.sizes.padding.M};
	letter-spacing: ${({ theme }) => theme.sizes.letterSpacing.L};
`;
