import React, { Component } from 'react';
import TopComponent from './TopComponent';
import Toolbar from './Toolbar';
// import Stack from 'react-bootstrap/Stack';

class Nav extends Component {
	render() {
		return (
			<div className='nav'>
				<TopComponent />
				<Toolbar />
			</div>
		);
	}
}
export default Nav;
