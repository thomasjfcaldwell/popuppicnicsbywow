import React from 'react';
import { Image, Dropdown } from 'react-bootstrap';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';

const Toolbar = (props) => (
	<header className='toolbar'>
		<nav className='toolbar_navigation'>
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
						<a href='/contact'>CONTACT US</a>
					</li>
					<Dropdown>
						<Dropdown.Toggle>OTHER SERVICES</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='https://www.wowevents.com/full-service-event-planning/'>
								Full Service Event Planning
							</Dropdown.Item>
							<Dropdown.Item href='https://www.wowevents.com/decor-props/'>
								Decor & Props
							</Dropdown.Item>
							<Dropdown.Item href='https://www.wowevents.com/entertainment-music/'>
								Entertainment & Music
							</Dropdown.Item>
							<Dropdown.Item href='https://www.wowevents.com/rentals/'>
								Rentals/Lounge Furniture
							</Dropdown.Item>
							<Dropdown.Item href='https://www.wowevents.com/event-catering/'>
								Catering
							</Dropdown.Item>
							<Dropdown.Item href='https://www.wowevents.com/event-venues/'>
								Event Venues
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</ul>
			</div>
		</nav>
	</header>
);

export default Toolbar;
