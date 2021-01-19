import React, { Component } from 'react';

import {
	Row,
	Col,
	Card,
	CardImg,
	Nav,
	Navbar,
	Image,
	Form,
	Button,
} from 'react-bootstrap';
import '../styles/sea.css';
import '../App.css';
import Addon from '../Components/Addon';
import BookingForm from '../Components/BookingForm'

import Footer from '../Components/Footer';

import basicPackage from '../Images/Packages/savvy.jpg';
import bells from '../Images/bell.jpg';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class Packages extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
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
						<h1
							className='text-center'
							style={{
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
								margin: '0 auto',
								background: '#727272',
								color: 'white',
								padding: '0.2em',
							}}>
							BOOK A PICNIC
						</h1>

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
						</Navbar>
					</Nav>
				</Row>
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
									SIMPLY SAVVY PACKAGE $160+
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
										<li>Each Additional Hour $75</li>
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
									THE BELLS & WHISTLES PACKAGE $260+
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

				{/* <Form
					action='https://docs.google.com/forms/u/1/d/e/1FAIpQLScHmtoLhomB2jJnCtEeY8mOZFDMz5aSBB6tn0Un4EkT_pFwBQ/formResponse'
					method='post'>
					<Row>
						<Col sm={12} lg={2}>
							<div className='form-element'>
								<span>Date Of Picnic</span>
								<input
									type='text'
									required
									name='entry.135545915'
									placeHolder='Date of Picnic'
								/>
							</div>
							<div className='form-element'>
								<span>Ideal Start Time</span>
								<input
									type='text'
									required
									name='entry.2070316693'
									placeHolder='Start Time'
								/>
							</div>
							<div className='form-element'>
								<span>Number Of Guests</span>
								<input
									type='text'
									required
									name='entry.1156058948'
									placeHolder='Number Of Guests'
								/>
							</div>
						</Col>
						<Col sm={12} lg={2}>
							<div className='form-element radio-buttons'>
								<span>Choose A Package(pick one)</span>
								<label for='Simply Savvy Package - $160+ 2 Hour Picnic'>
									<span>Simply Savvy Package - $160+ 2 Hour Picnic</span>
									<input
										type='radio'
										required
										name='entry.776276188'
										id='Simply Savvy Package - $160+ 2 Hour Picnic'
										value='Simply Savvy Package - $160+ 2 Hour Picnic'
									/>
								</label>
								<label for='Bells And Whistles Package - $160 + 2 Hour Picnic'>
									<span>Bells And Whistles Package - $160 + 2 Hour Picnic</span>
									<input
										type='radio'
										name='entry.776276188'
										id='Bells And Whistles Package - $160 + 2 Hour Picnic'
										value='Bells And Whistles Package - $160 + 2 Hour Picnic'
									/>
								</label>
							</div>
						</Col>
						<Col sm={12} lg={3}>
							<div className='form-element radio-buttons'>
								<span>Preferred Picnic Location(pick one)</span>
								<label for='Huntington Beach - State Beach $30'>
									<span>Huntington Beach - State Beach $30</span>
									<input
										type='radio'
										required
										name='entry.1498930863'
										id='Huntington Beach - State Beach $30'
										value='Huntington Beach - State Beach $30'
									/>
								</label>
								<label for='Huntington Beach -  Huntington Central Park $20'>
									<span>Huntington Beach - Huntington Central Park $20</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Huntington Beach -  Huntington Central Park $20'
										value='Huntington Beach -  Huntington Central Park $20'
									/>
								</label>
								<label for='Doheny State Beach $45'>
									<span>Doheny State Beach $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Doheny State Beach $45'
										value='Doheny State Beach $45'
									/>
								</label>
								<label for='Doheny State Park $45'>
									<span>Doheny State Park $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Doheny State Park $45'
										value='Doheny State Park $45'
									/>
								</label>
								<label for='Dana Point - Salt Creek Beach $55'>
									<span>Dana Point - Salt Creek Beach $55</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Dana Point - Salt Creek Beach $55'
										value='Dana Point - Salt Creek Beach $55'
									/>
								</label>
								<label for='Dana Point - Salt Creek Park $45'>
									<span>Dana Point - Salt Creek Park $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Dana Point - Salt Creek Park $45'
										value='Dana Point - Salt Creek Park $45'
									/>
								</label>
								<label for='San Clemente Calafia Beach $55'>
									<span>San Clemente Calafia Beach $55</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='San Clemente Calafia Beach $55'
										value='San Clemente Calafia Beach $55'
									/>
								</label>
								<label for='Newport Beach - B Street $45'>
									<span>Newport Beach - B Street $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Newport Beach - B Street $45'
										value='Newport Beach - B Street $45'
									/>
								</label>
								<label for='Newport Beach - 15th Street $45'>
									<span>Newport Beach - 15th Street $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Newport Beach - 15th Street $45'
										value='Newport Beach - 15th Street $45'
									/>
								</label>
								<label for='Newport Beach - Harbor Patrol Beach $45'>
									<span>Newport Beach - Harbor Patrol Beach $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Newport Beach - Harbor Patrol Beach $45'
										value='Newport Beach - Harbor Patrol Beach $45'
									/>
								</label>
								<label for='Newport Beach - The Wedge Beach $45'>
									<span>Newport Beach - The Wedge Beach $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Newport Beach - The Wedge Beach $45'
										value='Newport Beach - The Wedge Beach $45'
									/>
								</label>
								<label for='Newport Beach - The Wedge Park $40'>
									<span>Newport Beach - The Wedge Park $40</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Newport Beach - The Wedge Park $40'
										value='Newport Beach - The Wedge Park $40'
									/>
								</label>
								<label for='Laguna Beach - Heisler Park $45'>
									<span>Laguna Beach - Heisler Park $45</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Laguna Beach - Heisler Park $45'
										value='Laguna Beach - Heisler Park $45'
									/>
								</label>
								<label for='Laguna Beach - Heisler Beach $55'>
									<span>Laguna Beach - Heisler Beach $55</span>
									<input
										type='radio'
										name='entry.1498930863'
										id='Laguna Beach - Heisler Beach $55'
										value='Laguna Beach - Heisler Beach $55'
									/>
								</label>
							</div>
						</Col>
						<Col sm={12} lg={3}>
							<div className='form-element radio-buttons'>
								<span>Add on Items(add as many as you like)</span>
								<label for='Cozy Blanket Basket $25'>
									<span>Cozy Blanket Basket $25</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Cozy Blanket Basket $25'
										value='Cozy Blanket Basket $25'
									/>
								</label>
								<label for='Beverage Package for Two $30'>
									<span>Beverage Package for Two $30</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Beverage Package for Two $30'
										value='Beverage Package for Two $30'
									/>
								</label>
								<label for='Add One Guest to Beverages Package $5'>
									<span>Add One Guest to Beverages Package $5</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Add One Guest to Beverages Package $5'
										value='Add One Guest to Beverages Package $5'
									/>
								</label>
								<label for='Tepee Package $40'>
									<span>Tepee Package $40</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Tepee Package $40'
										value='Tepee Package $40'
									/>
								</label>
								<label for='Posh Umbrella with Tassels $45'>
									<span>Posh Umbrella with Tassels $45</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Posh Umbrella with Tassels $45'
										value='Posh Umbrella with Tassels $45'
									/>
								</label>
								<label for='Meat & Cheese Charcuterie Box $55'>
									<span>Meat & Cheese Charcuterie Box $55</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Meat & Cheese Charcuterie Box $55'
										value='Meat & Cheese Charcuterie Box $55'
									/>
								</label>
								<label for='Cheese Charcuterie Box $50'>
									<span>Cheese Charcuterie Box $50</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Cheese Charcuterie Box $50'
										value='Cheese Charcuterie Box $50'
									/>
								</label>
								<label for='Vegan/Vegetarian Charcuterie Box $55'>
									<span>Vegan/Vegetarian Charcuterie Box $55</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Vegan/Vegetarian Charcuterie Box $55'
										value='Vegan/Vegetarian Charcuterie Box $55'
									/>
								</label>
								<label for='Dessert Box $40'>
									<span>Dessert Box $40</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Dessert Box $40'
										value='Dessert Box $40'
									/>
								</label>
								<label for='Live Music=$300+'>
									<span>Live Music=$300+ (We will send more details)</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Live Music=$300+ (We will send more details)'
										value='Live Music=$300+ (We will send more details)'
									/>
								</label>
								<label for='One Extra Picnic Hour $75'>
									<span>One Extra Picnic Hour $75</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='One Extra Picnic Hour $75'
										value='One Extra Picnic Hour $75'
									/>
								</label>
								<label for='Bluetooth Speaker $10'>
									<span>Bluetooth Speaker $10</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Bluetooth Speaker $10'
										value='Bluetooth Speaker $10'
									/>
								</label>
								<label for='Balloon Garland for Tepee Set-Up $97.75 + $55 Delivery fee'>
									<span>
										Balloon Garland for Tepee Set-Up $97.75 + $55 Delivery fee
									</span>
									<input
										type='checkbox'
										name='entry.747267870'
										id='Balloon Garland for Tepee Set-Up $97.75 + $55 Delivery fee'
										value='Balloon Garland for Tepee Set-Up $97.75 + $55 Delivery fee'
									/>
								</label>
							</div>
						</Col>
						<Col sm={12} lg={2}>
							<div className='form-element radio-buttons'>
								<span>Where did you hear about us?</span>
								<label for='Internet Search Engine'>
									<span>Internet Search Engine</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Internet Search Engine'
										value='Internet Search Engine'
									/>
								</label>
								<label for='Facebook'>
									<span>Facebook</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Facebook'
										value='Facebook'
									/>
								</label>
								<label for='Instagram'>
									<span>Instagram</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Instagram'
										value='Instagram'
									/>
								</label>
								<label for='Twitter'>
									<span>Twitter</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Twitter'
										value='Twitter'
									/>
								</label>
								<label for='Nextdoor'>
									<span>Nextdoor</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Nextdoor'
										value='Nextdoor'
									/>
								</label>
								<label for='Referral'>
									<span>Referral</span>
									<input
										type='radio'
										name='entry.1739141604'
										id='Referral'
										value='Referral'
									/>
								</label>
							</div>
							<div className='form-element'>
								<span>Name</span>
								<input
									type='text'
									required
									name='entry.985650252'
									placeholder='Name'></input>
							</div>
							<div className='form-element'>
								<span>Email</span>
								<input
									type='email'
									required
									name='entry.448811785'
									placeholder='Email'></input>
							</div>
							<div className='form-element'>
								<span>Phone</span>
								<input
									type='text'
									name='entry.1432620145'
									placeholder='Phone'></input>
							</div>
						</Col>
						<Button
							type='submit'
							style={{
								width: '100%',
								padding: '20px',
								color: '#F78F1E',
								background: 'white',
								borderRadius: '5px',
								border: 'none',
							}}>
							Send Message
						</Button>
					</Row>
				</Form> */}
			</div>
		);
	}
}

export default Packages;
