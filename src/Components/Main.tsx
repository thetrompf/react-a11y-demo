import React from 'react';
import { Section } from '@secoya/tab-navigation.ts';

interface Props {}

export const Main: React.SFC<Props> = props => {
	return <Section focusKey="main">{props.children}</Section>;
};
