import React, { Component } from 'react';
import {
	Row,
	Col,
	Jumbotron,
	Image,
	Navbar,
	Nav,
	Button,
	Container,
} from 'react-bootstrap';
import background from '../Images/pierviewandsetupopacityLOW.jpg';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import Ourstory from '../Components/Ourstory';
import Testimonals from '../Components/Testimonals';
import Steps from '../Components/Steps';
import Contact from '../Components/Contact';

import BasicRows from './BasicRows';

import '../styles/home.css';
class Home extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Container
					fluid
					className='bgimage'
					style={{
						backgroundImage: `url(${background})`,
					}}>
					<Row>
						<Col>
							<Navbar expand='lg'>
									<Navbar.Brand>
										<Image
											src={wowlogo}
											style={{
												width: '35%',
												
											}}
										/>
									</Navbar.Brand>
								<Navbar.Toggle aria-controls='responsive-navbar-nav' />
								<Navbar.Collapse id='responsive-navbar-nav'>
									<Nav
										className='mr-auto'
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
											
										}}>
										<Nav.Link
											onClick={this.handleClick.bind(this)}
											style={{
												color: '#231F20',
												padding: '0.5em',
											}}>
											WOWEVENTS.COM
										</Nav.Link>
										<Nav.Link
											href='/packages'
											style={{
												color: '#231F20',
												padding: '0.5em',
											}}>
											PACKAGES & AVAILABILITY
										</Nav.Link>
										<Nav.Link
											href='/gallery'
											style={{
												color: '#231F20',
												padding: '0.5em',
											}}>
											GALLERY
										</Nav.Link>
										<Nav.Link
											href='/faq'
											style={{
												color: '#231F20',
												padding: '0.5em',
											}}>
											FAQ
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Col>
					</Row>

					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<div>
							<h1>Treat Someone Special</h1>
						</div>
					</Row>
				</Container>
				<Ourstory />
				<BasicRows />
				<Steps />
				<Testimonals />
				<Contact />
			</div>
		);
	}
}

export default Home;
