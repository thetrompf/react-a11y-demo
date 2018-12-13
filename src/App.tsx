import React, { useCallback, useRef } from 'react';
import { setConfig, hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';
import { Sidebar } from './Components/Sidebar';
import { TabBoundary, TabRegistry } from '@secoya/tab-navigation.ts';
import { Main } from './Components/Main';

setConfig({
	pureSFC: true
});

interface Props {}

const App: React.SFC<Props> = _props => {
	const ref = useRef<TabBoundary | null>(null);
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (ref.current != null) {
				const tabRegistry = ref.current.context.tabRegistry as TabRegistry | null;
				if (tabRegistry != null) {
					tabRegistry.focusFirst();
				}
			}
		},
		[ref]
	);

	return (
		<ThemeProvider theme={Theme}>
			<TabBoundary onClick={onClick} ref={ref}>
				<Sidebar />
				<Main />
			</TabBoundary>
		</ThemeProvider>
	);
};

export default hot(module)(App);
