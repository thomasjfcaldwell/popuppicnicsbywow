import React, { Component } from 'react';
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
import '../App.css';
import Addon from '../Components/Addon';
import BookingForm from '../Components/BookingForm';
import Footer from '../Components/Footer';
import PicnicFQA from '../Components/Modals/PicnicFQA';
import BandWPackage from '../Images/Packages/savvy.jpg';
import simplySavvy from '../Images/Packages/simplysavvy.jpg';
import Themes from '../Components/Themes';
import BasicBeauty from '../Images/Packages/basicBeauty.jpg';

class Packages extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div className='locationsHeader'>
							<h5
								style={{
									marginTop: '1em',
									display: 'inline',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#727272',
									color: 'white',
									padding: '0.4em',
								}}>
								STEP 1: SELECT A PICNIC PACKAGE
							</h5>
						</div>
					</Row>
				</Container>
				<Container fluid>
					<Row className='packages'>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>BASIC BEAUTY PACKAGE $150+++</p>

								<Image
									className='packagesImage'
									src={BasicBeauty}
									alt='Basic Beauty package images'
								/>

								<ul className='nobullets'>
									<li>1 ½ Hour POP-UP Picnic for 2 People</li>{' '}
									<li>Personalized Letterboard Sign</li>
									<li>Small Hand Crafted Wood Table</li>{' '}
									<li>Tapestry blanket</li> <li>Pillow Seating</li>{' '}
									<li>
										Flatware, Plates/White Cloth Napkins Gold Metal Goblets
									</li>{' '}
									<li>Table Decor</li> <li>(2) Wood Crate Side Tables</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>SIMPLY SAVVY PACKAGE $180+++</p>

								<Image
									className='packagesImage'
									src={simplySavvy}
									alt='simply Savvy package images'
								/>

								<ul className='nobullets'>
									<li>Two Hour POP-UP Picnic for 2 People</li>
									<li>Personalized Welcome Sign</li>
									<li>Hand Crafted Wooden table</li>{' '}
									<li>Seat Pillow For Everyone</li>{' '}
									<li>Flatware/Plates/White Cloth Napkins</li>{' '}
									<li>Gold Metal Goblets</li> <li>Table Décor</li>{' '}
									<li>Blanket or Rug (floor covering) </li>
									<li>Add An Additional Person At $30</li>{' '}
									<li>Each Additional Hour $75</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>
									THE BELLS & WHISTLES PACKAGE $280+++
								</p>

								<Image
									src={BandWPackage}
									className='packagesImage'
									alt='Bells & Whistles Package Image'
								/>

								<ul className='nobullets'>
									<li>Two Hour POP-UP Picnic for 2 People</li>
									<li>All Items in the Simply Savvy Package Included</li>
									<li>8x8 Cheese Charcuterie Box</li>{' '}
									<li>Beverage Package for 2</li> <li>Bluetooth Speaker</li>{' '}
									<li>
										Choice of a Posh Umbrella with Tassels or Teepee Set-Up
									</li>{' '}
									<li>Hand Crafted Side Table</li>{' '}
									<li>Floor & Perimeter Décor</li>
									<li>Add An Additional Person At $30</li>{' '}
									<li>Each Additional Hour $75</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
				<Container>
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
								color: '#f7901e',
								width: '75%',
							}}>
							Lower your per person price by inviting more guests
						</p>
					</Row>
				</Container>
				<Container>
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
								color: '#727272',
								width: '75%',
							}}>
							Location Fee, 20% Service Fee and Sales tax will be added to
							Pricing
						</p>
					</Row>
				</Container>
				<Themes />
				<Footer />
				<Addon />
				<div
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						margin: '50px',
					}}>
					<PicnicFQA />
				</div>
				<Container>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div className='locationsHeader'>
							<h5
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#727272',
									color: 'white',
									padding: '0.4em',
								}}>
								STEP 5: BOOK YOUR PICNIC HERE
							</h5>
						</div>
					</Row>
				</Container>
				<BookingForm />
			</div>
		);
	}
}

export default Packages;
