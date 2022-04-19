import styled from 'styled-components';
import { enlarge } from 'theme';

const smallBoxShadow =
	'0px 3px 5px -1px rgba(0, 0, 0, 0.25), 0px 6px 10px 0px rgba(0, 0, 0, 0.2), 0px 1px 18px 0px rgba(0, 0, 0, 0.16)';
const bigBoxShadow =
	'0px 7px 8px -4px rgb(0, 0, 0, 0.25), 0px 12px 17px 2px rgb(0, 0, 0, 0.2),	0px 5px 22px 4px rgb(0, 0, 0, 0.16)';

export const FAB = styled.div`
	width: ${({ theme, size }) => theme.sizes.components.FAB[size]};
	height: ${({ theme, size }) => theme.sizes.components.FAB[size]};
	border-radius: 50%;
	box-shadow: ${smallBoxShadow};
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: ${({ theme, color, disabled }) =>
		disabled ? theme.colors.inputs.disabled.BG : color};
	color: ${({ theme, disabled, darken }) => {
		if (disabled) return theme.colors.inputs.disabled.text;
		if (darken) return theme.colors.inputs.dark.text;
		return theme.colors.inputs.light.text;
	}};
	font-size: ${({ theme, size }) => theme.sizes.text[enlarge(size, 1)]};
	transition: box-shadow 250ms ease, filter 400ms;
	${({ theme, disabled }) => {
		if (!disabled) return theme.customStyles.clickable;
	}};
	${({ theme }) => theme.customStyles.centerItems};
	${({ theme }) => theme.customStyles.nonSelectable};
	&:hover {
		filter: ${({ theme, darken, disabled }) => {
			if (disabled) return '';
			if (darken) return theme.filters.darken.S;
			return theme.filters.lighten.S;
		}};
		${({ disabled }) => (disabled ? '' : `box-shadow: ${bigBoxShadow};`)}
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

FAB.defaultProps = {
	children: '+',
};
