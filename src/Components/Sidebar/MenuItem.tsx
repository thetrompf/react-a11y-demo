import React, { useRef, useCallback } from 'react';
import { styled } from '../../Theme';
import { Focuser } from '@secoya/tab-navigation.ts';

const Content = styled.div`
	background: blue;
	border: 1px solid transparent;
	padding: ${props => props.theme.layout.padding}px;
`;

const Container = styled.div`
	width: 100%;
	> .focuser:focus + ${Content} {
		border: 1px solid purple;
	}
`;

interface Props {
	focusKey: string;
}

export const MenuItem: React.SFC<Props> = props => {
	const focuserRef = useRef<Focuser | null>(null);
	const handleClick = useCallback(() => {
		if (focuserRef.current != null) {
			focuserRef.current.focus();
		}
	}, []);

	return (
		<Container onClick={handleClick}>
			<Focuser autoFocus={props.focusKey === 'page1'} focusKey={props.focusKey} ref={focuserRef} />
			<Content>{props.children}</Content>
		</Container>
	);
};
