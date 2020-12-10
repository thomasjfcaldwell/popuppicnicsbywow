import React, { Component } from 'react';
import {
	Row,
	Col,
	Image,
	Navbar,
	Nav,
	Container,
	Carousel,
	Badge,
	NavItem,
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
import twitter from '../Images/Icons/twitter.png';
import home from '../Images/Gallery/12personWeb.jpg'
import Carousel1 from '../Images/Carousel/cara1.jpg'
import Carousel2 from '../Images/Carousel/cara2.jpg'
import Carousel3 from '../Images/Carousel/carusel3.jpg'


import '../styles/home.css';
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
				<Row className='backgroundfont'>
					<Nav className='navbar navbar-expand-lg'>
						<Image
							lg={3}
							sm={12}
							className='navbar-brand'
							src={wowlogo}
							style={{
								width: '20%',
								margin: '0.2em',
								padding: '1em',
							}}
						/>

						<Navbar className='navbar-nav ml-auto' expand='lg'>
							<Navbar.Toggle aria-controls='responsive-navbar-nav' />
							<Navbar.Collapse id='responsive-navbar-nav'>
								<Nav
									// className='mr-auto'
									style={{
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
									}}>
									<Nav.Link
										onClick={this.handleClick.bind(this)}
										style={{
											color: 'white',
											padding: '0.5em',
										}}>
										WOWEVENTS.COM
									</Nav.Link>
									<Nav.Link
										href='/'
										style={{
											color: 'white',
											padding: '0.5em',
										}}>
										HOME PAGE
									</Nav.Link>
									<Nav.Link
										href='/packages'
										style={{
											color: 'white',
											padding: '0.5em',
										}}>
										BOOK A PICNIC
									</Nav.Link>
									<Nav.Link
										href='/faq'
										style={{
											color: 'white',
											padding: '0.5em',
										}}>
										FAQ
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Nav>
				</Row>
				<Carousel className='m-5 p-1' lg={12} md={12} sm={12}>
					<Carousel.Item>
						<img className='d-block w-100' src={Carousel1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={Carousel2} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={Carousel3} alt='Third slide' />
					</Carousel.Item>
				</Carousel>
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
