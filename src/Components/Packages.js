import React, { Component } from 'react';

import {
	Row,
	Col,
	Card,
	CardImg,
	Nav,
	Navbar,
	Image
	
} from 'react-bootstrap';
import  '../styles/sea.css';
import '../App.css'
import Addon from '../Components/Addon'

import Footer from '../Components/Footer'




import basicPackage from '../Images/Packages/savvy.jpg';
import bells from '../Images/bell.jpg';




class Packages extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: '3em',
					}}>
					<Navbar expand='lg'>
						<Navbar.Brand>
							<h1
								className='text-center'
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									margin: '0 auto',
									width: '100%',
								}}>
								PACKAGES
							</h1>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav
								className='mr-auto'
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									textAlign: 'right',
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
									href='/'
									style={{
										color: '#231F20',
										padding: '0.5em',
									}}>
									HOME PAGE
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
				</Row>

				<Row className='packages'>
					<Col sm={12} lg={6}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<h2
									className='text-center'
									style={{
										marginTop: '1em',
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
									}}>
									SIMPLY SAVVY - $160 - 2 HOURS
								</h2>
								<CardImg
									src={basicPackage}
									style={{
										width: '75%',
										margin: '0 auto',
										padding: '0.5em',
									}}
								/>
								<Card.Text>
									<ul className='nobullets'>
										<li>Personalized Welcome Sign</li>
										<li>Hand Crafted Wooden table</li>{' '}
										<li>Seat Pillow For Everyone</li>{' '}
										<li>Flatware/ plates/White Cloth Napkins</li>{' '}
										<li>Metal Goblets</li> <li>Table Décor</li>{' '}
										<li>Blanket or Rug (floor covering) </li>
										<li>Side Table or Storage Area Perimeter Decor</li>{' '}
										<li>Add An Additional Person At $30</li>{' '}
										<li>Each Add Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
					<Col sm={12} lg={6} style={{}}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<h2
									className='text-center'
									style={{
										marginTop: '1em',
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
									}}>
									BELLS AND WHISTLES $260 - 2 HOURS
								</h2>
								<CardImg
									src={bells}
									style={{
										width: '75%',
										margin: '0 auto',
										padding: '0.5em',
									}}
								/>
								<Card.Text>
									<ul className='nobullets'>
										<li>Everything included in Savvy PLUS</li>
										<li>Choice of One Picnic Platter</li>{' '}
										<li>Beverage Package for 2</li> <li>Bluetooth Speakers</li>{' '}
										<li>Decorative Umbrella or Styled Teepee Corner</li>{' '}
										<li>Add an additional person at $30 each</li>{' '}
										<li>Each Add Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
				</Row>

				<Addon />
				<Footer />
			</div>
		);
	}
}

export default Packages;
