import React, { Component } from 'react';
import { Row, Nav, Container, Navbar, Image, Col } from 'react-bootstrap';
import '../styles/grid.css';
import '../App.css';
import image1 from '../Images//12personWeb.jpg';
import image2 from '../Images/Gallery/4personWeb.jpg';
import image3 from '../Images/couple.sunset.jpg';
import image4 from '../Images/sayidoweb.jpg';
import image5 from '../Images/foodandiceweb.jpg';
import image6 from '../Images/2personWeb.jpg';
import image7 from '../Images/beachsetup.jpg';
import image8 from '../Images/foodsetup1web.jpg';
import image9 from '../Images/Testimonals/anniversary.jpg';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class BasicRows extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Container fluid>
					<Row className='rowbackground'
						sm={12}
						style={{
							background: '#727272',
							width: '100%',
							height: '30vh',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Col sm={12} lg={6}>
							<Navbar>
								<Nav className='navbar navbar-expand-lg navbar-dark rounded w-100'>
									<Image className='logo'
										src={wowlogo}
										style={{
											width: '40%',
											padding: '0.5em',
											// margin: '0 auto',
										}}
									/>
								</Nav>
							</Navbar>
						</Col>

						<Col>
							<h1
								className='text-center'
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									margin: '0 auto',
									background: '#727272',
									color: 'white',
								}}>
								GALLERY
							</h1>
						</Col>

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

						{/* <Col lg={6} sm={6}>
							<Image
								src={wowlogo}
								style={{
									width: '40%',

									padding: '0.4em',
								}}
							/>
						</Col>
						<Col
							lg={6} sm={6}
							>
							<Navbar
								expand='lg'
								style={{
									verticalAlign: 'center',
								}}>
								<Navbar.Brand>
									<h1
										className='text-center'
										style={{
											fontFamily: 'Montserrat',
											color: 'white',
											fontWeight: '500',
											letterSpacing: '0.1em',
											margin: '0 auto',
											width: '100%',
										}}>
										GALLERY
									</h1>
								</Navbar.Brand>
								<Navbar.Toggle aria-controls='responsive-navbar-nav' />
								<Navbar.Collapse id='responsive-navbar-nav'>
									<Nav
										
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
											WOW EVENTS HOME
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
						</Col> */}
					</Row>
				</Container>
				<div fluid className='gallery-block grid-gallery'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image1}>
									<img
										className='img-fluid image scale-on-hover'
										src={image1}
										alt='picnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image2}>
									<img
										className='img-fluid image scale-on-hover'
										src={image2}
										alt='beachpicnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image6}>
									<img
										className='img-fluid image scale-on-hover'
										src={image6}
										alt='4personsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image5}>
									<img
										className='img-fluid image scale-on-hover'
										src={image5}
										alt='dessertpackage'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image4}>
									<img
										className='img-fluid image scale-on-hover'
										src={image4}
										alt='sayidosign'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image8}>
									<img
										className='img-fluid image scale-on-hover'
										src={image8}
										alt='picnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image7}>
									<img
										className='img-fluid image scale-on-hover'
										src={image7}
										alt='more food pics'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image3}>
									<img
										className='img-fluid image scale-on-hover'
										src={image3}
										alt='picnicsetuponhuntingtonbeach'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image9}>
									<img
										className='img-fluid image scale-on-hover'
										src={image9}
										alt='couple on beach'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BasicRows;
