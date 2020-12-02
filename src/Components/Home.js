import React, { Component } from 'react';
import {
	Row,
	Col,
	Image,
	Navbar,
	Nav,
	Container,
} from 'react-bootstrap';
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
				<Container fluid className='bgimage'>
					<Row>
						<Col lg={6} sm={12}>
							<Navbar.Brand>
								<Image
									src={wowlogo}
									style={{
										width: '50%',
										margin: '2em',
										webkitFilter: 'drop-shadow(1px 1px 2px #FFFFFF)',
										filter: 'drop-shadow(1px 1px 2px #FFFFFF)',
									}}
								/>
							</Navbar.Brand>
						</Col>
						<Navbar expand='lg'>
							<Navbar.Toggle
								aria-controls='responsive-navbar-nav'
								className='color-white'
							/>
							<Navbar.Collapse id='responsive-navbar-nav'>
								<Nav className='mr-auto'>
									<Nav.Link
										onClick={this.handleClick.bind(this)}
										style={{
											padding: '0.2em',
											color: 'white',
										}}>
										WOWEVENTS.COM
									</Nav.Link>
									<Nav.Link
										href='/packages'
										style={{
											color: 'white',
											padding: '0.2em',
										}}>
										PACKAGES & AVAILABILITY
									</Nav.Link>
									<Nav.Link
										href='/gallery'
										style={{
											color: 'white',
											padding: '0.2em',
										}}>
										GALLERY
									</Nav.Link>
									<Nav.Link
										href='/faq'
										style={{
											color: 'white',
											padding: '0.2em',
										}}>
										FAQ
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Row>

					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<div className='headline'>
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
