import styled from 'styled-components';

export const Link = styled.a`
	color: inherit;
	text-decoration: none;
	transition: filter 0.3s;
	&:hover {
		filter: ${({ theme }) => theme.filters.lighten.L};
	}
`;

Link.defaultProps = {
	target: '_blank',
	rel: 'noopener noreferrer',
};
