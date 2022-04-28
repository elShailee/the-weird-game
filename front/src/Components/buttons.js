import styled from 'styled-components';
import { enlarge } from 'theme';

export const GeneralButton = styled.div`
	height: fit-content;
	background-color: ${({ theme, color, disabled }) =>
		disabled ? theme.colors.inputs.disabled.BG : color};

	color: ${({ theme, disabled, darken }) => {
		if (disabled) return theme.colors.inputs.disabled.text;
		if (darken) return theme.colors.inputs.dark.text;
		return theme.colors.inputs.light.text;
	}};

	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: ${({ theme, size }) => theme.sizes.borderRadius[size]};
	padding: ${({ theme, size }) => theme.sizes.padding[size]};
	font-size: ${({ theme, size }) => theme.sizes.text[size]};
	line-height: ${({ theme, size }) => theme.sizes.text[size]};
	transition: box-shadow 250ms ease, filter 400ms;

	${({ theme }) => theme.customStyles.centerItems};
	${({ theme }) => theme.customStyles.nonSelectable};
	box-shadow: ${({ theme }) => theme.shadows.S};
	${({ theme, disabled }) => {
		if (!disabled) return theme.customStyles.clickable;
	}};

	&:hover {
		filter: ${({ theme, darken, disabled }) => {
			if (disabled) return '';
			if (darken) return theme.filters.darken.S;
			return theme.filters.lighten.S;
		}};
		${({ disabled, theme }) => (disabled ? '' : `box-shadow:${theme.shadows.L};`)}
	}

	&:active {
		filter: ${({ theme, darken, disabled }) => {
			if (disabled) return '';
			if (darken) return theme.filters.darken.L;
			return theme.filters.lighten.L;
		}};
		transition: box-shadow 250ms ease, filter 0ms;
	}
`;

export const SquareButton = styled(GeneralButton)`
	width: ${({ theme }) => theme.sizes.components.Button.L};
	height: ${({ theme }) => theme.sizes.components.Button.L};
`;

export const FloatingActionButton = styled(GeneralButton)`
	width: ${({ theme, size }) => theme.sizes.components.FAB[size]};
	height: ${({ theme, size }) => theme.sizes.components.FAB[size]};
	border-radius: 50%;
	font-size: ${({ theme, size }) => theme.sizes.text[enlarge(size, 1)]};
	line-height: ${({ theme, size }) => theme.sizes.text[enlarge(size, 1)]};
`;
