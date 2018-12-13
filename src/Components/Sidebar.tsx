import React from 'react';
import { styled } from '../Theme';
import { MenuItem } from './Sidebar/MenuItem';
import { TabBoundary } from '@secoya/tab-navigation.ts';

const Container = styled.div`
	background: red;
	width: 300px;
	height: 100px;
`;

interface Props {}

export const Sidebar: React.SFC<Props> = props => {
	return (
		<Container>
			<TabBoundary boundaryKey="sidebar" focusParentOnEscape={true}>
				<MenuItem focusKey="page1">Page 1</MenuItem>
				<MenuItem focusKey="page2">Page 2</MenuItem>
			</TabBoundary>
		</Container>
	);
};
