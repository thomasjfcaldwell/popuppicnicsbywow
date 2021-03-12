import React, { Component } from 'react';

import {
	Row,
	Col,
	Navbar,
	Nav,
	Dropdown,
	Container,
	NavDropdown,
	Image,
} from 'react-bootstrap';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar expand='lg'>
					<Navbar.Brand href='/'>
						<Image
							src={wowlogo}
							style={{
								width: '20%',
							}}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav mr-auto' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#link'>Link</Nav.Link>
							<NavDropdown
								title='Dropdown'
								id='basic-nav-dropdown'
								dropdown-menu
								dropdown-menu-right>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Navbar
					style={{
						backgroundColor: '#727272',
						height: '30vh',
						fontSize: '1.2em',
					}}>
					<Nav.Link className='navbar-brand' href='https://www.wowevents.com'>
						<img
							src={wowlogo}
							alt='wowLogo'
							style={{
								width: '20%',
								margin: 'auto',
							}}
						/>
					</Nav.Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav
							className='ml-auto'
							style={{
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
								fontSize: '0.8em',
							}}>
							<Nav.Link
								href='/'
								style={{
									color: 'white',
								}}>
								HOME
							</Nav.Link>
							<Nav.Link
								href='/packages'
								style={{
									color: 'white',
								}}>
								POP UP PICNICS
							</Nav.Link>
							<Nav.Link
								href='/backyardmovies'
								style={{
									color: 'white',
								}}>
								MOVIE NIGHT
							</Nav.Link>
							<Nav.Link
								href='/charcuterie'
								style={{
									color: 'white',
								}}>
								CHARCUTERIE SERVICE
							</Nav.Link>
							<Dropdown>
								<Dropdown.Toggle
									variant='white'
									id='dropdown-basic'
									style={{
										color: 'white',
										fontSize: '0.9em',
										marginTop: '3px',
										letterSpacing: '1px',
									}}>
									OTHER SERVICES
								</Dropdown.Toggle>

								<Dropdown.Menu
									className='dropdown-menu dropdown-menu-right'
									style={{
										backgroundColor: 'transparent',
										border: 'none',
									}}>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/full-service-event-planning/'>
										Full Service Event Planning
									</Dropdown.Item>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/decor-props/'>
										Decor & Props
									</Dropdown.Item>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/entertainment-music/'>
										Entertainment & Music
									</Dropdown.Item>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/rentals/'>
										Rental/Lounge Furniture
									</Dropdown.Item>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/event-catering/'>
										Catering
									</Dropdown.Item>
									<Dropdown.Item
										className='dropdownText'
										href='https://www.wowevents.com/event-venues/'>
										Event Venues
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
