import React from 'react';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';

export default function Toolbar(theme) {
	return (
		<div className='tool_bar'>
			<div>
				<a href='https://www.wowevents.com/'>
					<img src={wowlogo} alt='logo' />
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
				<li>
					<a href='/contact'>CONTACT US</a>
				</li>
			</ul>
		</div>
	);
}
