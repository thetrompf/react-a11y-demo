import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
	layout: {
		padding: 15
	}
};

export const styled = baseStyled as ThemedStyledInterface<typeof Theme>;
