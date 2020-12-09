import React, { Component } from 'react';
import {
	Row,
	Col,
	Image,
	Navbar,
	Nav,
	Container,
	Badge,
} from 'react-bootstrap';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import Ourstory from '../Components/Ourstory';
import Testimonals from '../Components/Testimonals';
import Steps from '../Components/Steps';
import Contact from '../Components/Contact';
import GalleryHome from '../Components/GalleryHome';

import phone from '../Images/Icons/smartphone.png';
import email from '../Images/Icons/email.png';
import facebook from '../Images/Icons/facebook.png';
import instagram from '../Images/Icons/instagram.png';
import twitter from '../Images/Icons/twitter.png'

import BasicRows from './BasicRows';

import '../styles/home.css';
import ContactForm from './ContactForm';
class Home extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Row>
					<Col lg={4} sm={4}>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<Badge>
								<Image src={phone} style={{ maxWidth: '1em' }} />
							</Badge>
							<Badge>Phone</Badge>
							<Badge>714.848.9698</Badge>
						</div>
					</Col>
					<Col lg={4} sm={4}>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<Badge>
								<Image src={email} style={{ maxWidth: '1em' }} />
							</Badge>
							<Badge>Email</Badge>
							<Badge>hello@wowevents.com</Badge>
						</div>
					</Col>
					<Col lg={4} sm={4}>
						<div className='d-flex align-items-center justify-content-center mt-1'>
							<Badge>
								<Image
									src={facebook}
									href=''
									style={{ maxWidth: '2em', margin: '0.5em' }}
								/>
							</Badge>
							<Badge>
								<Image
									src={instagram}
									href=''
									style={{ maxWidth: '2em', margin: '0.5em' }}
								/>
							</Badge>
							<Badge>
								<Image
									src={twitter}
									href=''
									style={{ maxWidth: '2em', margin: '0.5em' }}
								/>
							</Badge>
						</div>
					</Col>
				</Row>
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
											padding: '1em',
											color: 'white',
										}}>
										WOWEVENTS HOME
									</Nav.Link>
									<p></p>
									<Nav.Link
										href='/packages'
										style={{
											color: 'white',
											padding: '1em',
										}}>
										BOOK A PICNIC
									</Nav.Link>
									<Nav.Link
										href='/gallery'
										style={{
											color: 'white',
											padding: '1em',
										}}>
										GALLERY
									</Nav.Link>
									<Nav.Link
										href='/faq'
										style={{
											color: 'white',
											padding: '1em',
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
				<GalleryHome />
				<Steps />
				<Testimonals />
				<Contact />
			</div>
		);
	}
}

export default Home;
