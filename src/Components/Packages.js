import React, { Component } from 'react';

import {
	Row,
	Col,
	Card,
	CardImg,
	Nav,
	Navbar,
	
} from 'react-bootstrap';
import  '../styles/sea.css';
import '../App.css'
import Addon from '../Components/Addon'

import Footer from '../Components/Footer'
import Contact from '../Components/Contact'




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
						background: '#727272',
						width: '100%',
						height: '17em',
					}}>
					<Navbar expand='lg'>
						<Row>
							<Navbar.Brand>
								<h1
									style={{
										fontFamily: 'Montserrat',
										color: 'white',
										fontWeight: '500',
										margin: '0 auto',
										width: '80%',
									}}>
									BOOK A PICNIC
								</h1>
							</Navbar.Brand>
							<Navbar.Toggle
								aria-controls='responsive-navbar-nav'
								
							/>
							<Navbar.Collapse id='responsive-navbar-nav'>
								<Nav
									// className='mr-auto'
									style={{
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
										marginLeft: '1.9em',
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
										href='/gallery'
										style={{
											color: 'white',
											padding: '0.5em',
										}}>
										GALLERY
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
						</Row>
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
										background: '#f7901e',
										color: 'white',
										padding: '0.2em',
									}}>
									SIMPLY SAVVY $160+
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
										<li>Two Hour POP-UP Picnic</li>
										<li>Personalized Welcome Sign</li>
										<li>Hand Crafted Wooden table</li>{' '}
										<li>Seat Pillow For Everyone</li>{' '}
										<li>Flatware/Plates/White Cloth Napkins</li>{' '}
										<li>Metal Goblets</li> <li>Table Décor</li>{' '}
										<li>Blanket or Rug (floor covering) </li>
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
										background: '#f7901e',
										color: 'white',
										padding: '0.2em',
									}}>
									BELLS AND WHISTLES $260+
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
										<li>Two Hour POP-UP Picnic</li>
										<li>Everything included in Savvy PLUS</li>
										<li>Small artisian cheese box</li>{' '}
										<li>Beverage Package for 2</li> <li>Bluetooth Speaker</li>{' '}
										<li>Decorative Umbrella or Styled Teepee Corner</li>{' '}
										<li>Side Table or Storage Area Perimeter Decor</li>{' '}
										<li>Add An Additional Person At $30</li>{' '}
										<li>Each Add Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
				</Row>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<p
						style={{
							fontFamily: 'Montserrat',
							fontWeight: '500',
							width: '100%',
						}}>
						NOTE: 20% Service Fee and Sales tax will be added to all pricing
					</p>
				</Row>

				<Footer />
				<Addon />
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<iframe
						src='https://docs.google.com/forms/d/e/1FAIpQLScsdtaKV8fiRyJ6FiYpl5FyB-RyOZ9lLyBzb2NbanSh3FaVOw/viewform?embedded=true'
						width='640'
						height='2326'
						frameborder='0'
						marginheight='0'
						marginwidth='0'>
						Loading…
					</iframe>
				</Row>
			</div>
		);
	}
}

export default Packages;
