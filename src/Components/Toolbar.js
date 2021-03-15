import React from 'react';
import '../styles/Toolbar.css';
import { Image } from 'react-bootstrap';

import '../Components/DrawerToggleButton';
import DrawerToggleButton from '../Components/DrawerToggleButton';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

const Toolbar = (props) => (
	<header className='toolbar'>
		<nav className='toolbar_navigation'>
			<div className='toolbar__toggle-button'>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className='toolbar_logo'>
				<a href='https://www.wowevents.com/'>
					<Image
						src={wowlogo}
						style={{
							height: '100px',
						}}
					/>
				</a>
			</div>
			<div className='spacer' />
			<div className='toolbar_navigation-items'>
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
					<li>
						<a href='/packages'> </a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Toolbar;