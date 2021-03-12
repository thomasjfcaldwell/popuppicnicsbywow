import React from 'react';

import '../styles/SideDrawer.css';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import { Image } from 'react-bootstrap';

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					marginTop: '50px',
				}}>
				<a href='https://www.wowevents.com/'>
					<Image
						src={wowlogo}
						style={{
							height: '100px',
						}}
					/>
				</a>
			</div>
			<ul>
				<li>
					<a href='/'>HOME</a>
				</li>
				<li>
					<a href='/packages'>POP-UP PICNICS</a>
				</li>
				<li>
					<a href='/backyardmovies'>MOVIE NIGHT</a>
				</li>
				<li>
					<a href='/charcuterie'>CHARCUTERIE SERVICE</a>
				</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;
