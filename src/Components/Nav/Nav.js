import React from 'react';
import TopComponent from './TopComponent';
import Toolbar from './Toolbar';

export default function Nav() {
	return (
		<section className='nav'>
			<TopComponent />
			<Toolbar />
		</section>
	);
}
