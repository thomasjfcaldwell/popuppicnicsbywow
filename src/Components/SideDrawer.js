import React from 'react';

import '../styles/SideDrawer.css';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import { Image, Dropdown } from 'react-bootstrap';

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
					marginTop: '10px',
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
				<Dropdown>
					<Dropdown.Toggle
						style={{
							backgroundColor: '#f7901e',
							marginTop: '-5px',
							border: 'none',
							fontSize: '0.5em',
						}}>
						OTHER SERVICES
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/full-service-event-planning/'>
							Full Service Event Planning
						</Dropdown.Item>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/decor-props/'>
							Decor & Props
						</Dropdown.Item>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/entertainment-music/'>
							Entertainment & Music
						</Dropdown.Item>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/rentals/'>
							Rentals/Lounge Furniture
						</Dropdown.Item>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/event-catering/'>
							Catering
						</Dropdown.Item>
						<Dropdown.Item
							style={{
								color: '#727272',
							}}
							href='https://www.wowevents.com/event-venues/'>
							Event Venues
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</ul>
		</nav>
	);
};

export default sideDrawer;
