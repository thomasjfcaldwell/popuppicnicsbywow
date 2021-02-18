import React, { Component } from 'react';
import { Row, Col, Card, CardImg } from 'react-bootstrap';
import '../styles/sea.css';
import '../App.css';
import Addon from '../Components/Addon';
import BookingForm from '../Components/BookingForm';
import Footer from '../Components/Footer';
import BandWPackage from '../Images/Packages/savvy.jpg';
import simplySavvy from '../Images/Packages/simplysavvy.jpg';

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
						textAlign: 'center',
					}}>
					<div className='locationsHeader'>
						<h1
							style={{
								marginTop: '1em',
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
								background: '#727272',
								color: 'white',
								padding: '0.4em',
							}}>
							STEP 1: SELECT A PICNIC PACKAGE
						</h1>
					</div>
				</Row>
				<Row className='packages'>
					<Col sm={12} lg={6}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<h4
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
									SIMPLY SAVVY PACKAGE $160+
								</h4>
								<div className='m-3'>
									<CardImg
										src={simplySavvy}
										style={{
											width: '75%',
											margin: '0 auto',
											boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
										}}
									/>
								</div>
								<Card.Text>
									<ul className='nobullets'>
										<li>Two Hour POP-UP Picnic for 2 People</li>
										<li>Personalized Welcome Sign</li>
										<li>Hand Crafted Wooden table</li>{' '}
										<li>Seat Pillow For Everyone</li>{' '}
										<li>Flatware/Plates/White Cloth Napkins</li>{' '}
										<li>Metal Goblets</li> <li>Table Décor</li>{' '}
										<li>Blanket or Rug (floor covering) </li>
										<li>Add An Additional Person At $30</li>{' '}
										<li>Each Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
					<Col sm={12} lg={6} style={{}}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<h4
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
									THE BELLS & WHISTLES PACKAGE $260+
								</h4>
								<div className='m-3'>
									<CardImg
										src={BandWPackage}
										style={{
											width: '75%',
											margin: '0 auto',

											boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
										}}
									/>
								</div>
								<Card.Text>
									<ul className='nobullets'>
										<li>Two Hour POP-UP Picnic for 2 People</li>
										<li>Everything included in Savvy PLUS</li>
										<li>Small artisian cheese box</li>{' '}
										<li>Beverage Package for 2</li> <li>Bluetooth Speaker</li>{' '}
										<li>Decorative Umbrella or Styled Teepee Corner</li>{' '}
										<li>Side Table or Storage Area Perimeter Decor</li>{' '}
										<li>Add An Additional Person At $30</li>{' '}
										<li>Each Additional Hour $75</li>
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
					<h5
						style={{
							fontFamily: 'Montserrat',
							fontWeight: '500',
							width: '100%',
							color: '#727272',
						}}>
						Location Fee, 20% Service Fee and Sales tax will be added to Pricing
					</h5>
				</Row>
				<Footer />
				<Addon />
				<BookingForm />
			</div>
		);
	}
}

export default Packages;
