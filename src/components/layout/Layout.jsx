import React from 'react';

import { MainNav, LeftNav } from '../../navigations';

function Layout({ children }) {
	return (
		<>
			<MainNav />
			<LeftNav />
			<main className="main from-left">
				<br />
				<br />
				<br />
				<br />

				{children}
			</main>
		</>
	);
}

export default Layout;
