import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	ListGroup,
	Image,
	Navbar,
	Nav,
	NavDropdown,
	Button,
} from 'react-bootstrap';
import background from '../Images/pierviewandsetupopacityLOW.jpg';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import ido from '../Images/sayidoweb.jpg';
import foodsetup from '../Images/foodsetup1web.jpg';
import foodandice from '../Images/foodandiceweb.jpg';
import circleimage from '../Images/circleimage.png';
import Ourstory from '../Components/Ourstory';
import Testimonals from '../Components/Testimonals';
import Steps from '../Components/Steps';
import Contact from '../Components/Contact';

import Footer from '../Components/Footer';
import BasicRows from './BasicRows';

import '../styles/home.css'
class Home extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Jumbotron
					className='topImage'
					fluid
					style={{
						backgroundImage: `url(${background})`,
						height: '100vh',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}>
					<Container fluid>
						<Row className='m-1'>
							<Col className='text-center' sm={6} md={6}>
								<Image
									src={wowlogo}
									className='d-inline-block align-top w-50 m-3'
									alt='wowevents logo'
								/>
							</Col>
							<Col
								style={{
									fontSize: '1.2em',
									fontFamily: 'Montserrat',
								}}>
								<Navbar expand=''>
									<Navbar.Toggle aria-controls='responsive-navbar-nav' />
									<Navbar.Collapse id='responsive-navbar-nav'>
										<Nav className='mr-auto font-weight-bold p-5'>
											<Nav.Link
												onClick={this.handleClick.bind(this)}
												style={{
													color: '#231F20',
													padding: '0.2em',
												}}>
												Return to Wow Events
											</Nav.Link>
											{/* <Nav.Link
												href='/'
												style={{
													color: '#231F20',
													padding: '1em',
												}}>
												
											</Nav.Link> */}
											<Nav.Link
												href='/packages'
												style={{
													color: '#231F20',
													padding: '0.2em',
												}}>
												PACKAGES & AVAILABILITY
											</Nav.Link>
											<Nav.Link
												href='/gallery'
												style={{
													color: '#231F20',
													padding: '0.2em',
												}}>
												GALLERY
											</Nav.Link>
											<Nav.Link
												href='/faq'
												style={{
													color: '#231F20',
													padding: '0.2em',
												}}>
												FAQ
											</Nav.Link>
										</Nav>
									</Navbar.Collapse>
								</Navbar>
							</Col>
						</Row>

						<Row>
							<Col
								style={{
									width: '100%',
								}}>
								<h1
									className='text-center'
									style={{
										fontFamily: 'Montserrat',
										fontSize: '3em',
										color: '#231F20',
									}}>
									Treat Someone Special
								</h1>

								<Row className='justify-content-center align-content-center'>
									<Button
										style={{
											background: '#231f20',
											width: '15em',
											borderRadius: '25px',
											border: '0.2em solid #F78F1E',
											margin: '2em',
										}}>
										<Nav.Link
											href='/packages'
											style={{
												color: '#fff',
												fontFamily: 'Montserrat',
											}}>
											More Information
										</Nav.Link>
									</Button>
								</Row>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
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
