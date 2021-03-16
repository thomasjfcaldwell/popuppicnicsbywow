import React from 'react';
import { Row, Col, Image, Card, Container } from 'react-bootstrap';
import DeliveryBox from '../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../Images/Charcuterie/flutes.jpg';
import Jarcuterie4 from '../Images/Charcuterie/Jarcuterie4.jpg';
import Heart from '../Images/Charcuterie/VDay Dessert Box2.jpg';
import CharcuterieBookingForm from './CharcuterieBookingForm';
import Dessert from '../Images/Packages/dessertBox.jpg';
import Multi from '../Images/Packages/veggieBox.jpg';
import cheeseBox from '../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../Images/Packages/meatChesseBox.jpg';
import treats from '../Images/Charcuterie/Smores Bar Box5.jpg';
import '../styles/Charcuterie.css';

function Charcuterie() {
	return (
		<div className='body'>
			<Container fluid>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<Col className='text-center' lg={6} sm={12}>
						<div>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#727272',
									color: 'white',
									marginTop: '50px',
									padding: '10px',
								}}>
								CHARCUTERIE DELIVERY/PICK UP
							</h3>
						</div>
						<p
							style={{
								fontWeight: '300',
								margin: '20px 30px',
							}}>
							One of our newest services, Charcuterie by WOW! Events was born
							during our worldwide pandemic when my Event Planning Company of 17
							years, was forced to stop doing business in March of 2020. Events
							over 10 people (family, neighbors or close friends only) were not
							allowed in California and my talented team and I decided to pivot
							and create new services that people could enjoy during COVID-19
							and beyond. We combined our love of hosting events with delicious
							food and Charcuterie by WOW! Events was born. We prepare
							deliciously curated and thoughtfully created made to order Cheese,
							Meat & Cheese, Veggie/Vegan and Dessert Charcuterie Boxes for your
							enjoyment and entertaining occasions. Our Charcuterie Boxes are
							available for Delivery, Curbside Pick-Up or can be added to our
							POP-UP Picnic Packages. We also offer Grazing Tables for larger
							celebrations and that WOW! Factor. Our Charcuterie Boxes are great
							for all occasions such as birthdays, holidays, picnics, thank you
							gifts, corporate meetings, open house, game day, parties, date
							nights, wine tastings, wedding party snacks or casual gatherings.
							We use fresh, seasonal ingredients, creating scrumptious boards to
							suit your needs. WOW! Events is a certified woman owned small
							business enterprise (W.O.S.B.E.).
						</p>
					</Col>
					<Col lg={6} sm={12}>
						<Image
							fluid
							src={DeliveryBox}
							alt='deliveryBox'
							style={{
								width: '80%',
								margin: '0 auto',
								padding: '10px',
							}}
						/>
					</Col>
				</Row>
			</Container>
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					marginTop: '20px',
				}}>
				<h4
					style={{
						fontWeight: '300',
						background: '#f7901e',
						color: 'white',
						padding: '10px',
						textTransform: 'uppercase',
					}}>
					Delivery and Pick Up options
				</h4>
			</div>
			<Container fluid>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						marginTop: '100px',
						width: '100%',
					}}>
					<Col lg={6} sm={12}>
						<Container>
							<Row
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<Col sm={6}>
									<div
										style={{
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										<div className='valentinesDay'>
											<h3
												style={{
													backgroundColor: '#f7901e',
													color: 'white',
												}}>
												Heart Box
											</h3>
											<div
												style={{
													color: '#727272',
												}}>
												<h4>Sweets Included</h4>
												<p>(2)Mini fruit tart</p> <p>(2) mini cream brûlée</p>
												<p>(2) mini lemon tarts</p> <p>(5) Macaroons </p>
												<p>(2) mini strawberry Chau rings</p>
												<p>(1) Fruit Tart</p>
												<p>(1) Creme Brûlée </p>
												<p>(1) Peach Tart</p>
											</div>
										</div>
										<div>
											<h5
												style={{
													backgroundColor: '#f7901e',
												}}>
												$45
											</h5>
										</div>
									</div>
								</Col>
								<Col>
									<Image
										fluid
										src={Heart}
										alt='heartBox'
										style={{
											width: '100%',
											margin: '0 auto',
											padding: '10px',
										}}
									/>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col lg={6} sm={12} xsm={12}>
						<Container>
							<Row
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<Col sm={6}>
									<div
										style={{
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										<div className='valentinesDay'>
											<h3
												style={{
													backgroundColor: '#f7901e',
													color: 'white',
												}}>
												Smores Bar Box
											</h3>
											<div
												style={{
													height: '250px',
													color: '#727272',
												}}>
												<h4>Sweets Included</h4>
												<p>(16) Graham Crackers</p>{' '}
												<p>(6) Hershey’s Milk Chocolate Bars</p>
												<p>(4) Reese’s Peanut Butter Cups</p>{' '}
												<p>(30) Marshmallows</p>
											</div>
										</div>
										<div>
											<h5
												style={{
													backgroundColor: '#f7901e',
												}}>
												$40
											</h5>
										</div>
									</div>
								</Col>
								<Col>
									<Image
										fluid
										src={treats}
										alt='smoresBox'
										style={{
											width: '100%',
											margin: '0 auto',
											padding: '10px',
										}}
									/>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			<Container
				fluid
				style={{
					marginTop: '100px',
				}}>
				<Row
					style={{
						width: '100%',
						justifyContent: 'center',
						textAlign: 'center',
						marginTop: '100px',
						margin: 'auto',
					}}>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Img
							variant='top'
							src={MeatCheese}
							alt='cheeseBox'
							className='deliveryImg'
						/>
						<Card.Body>
							<p className='optionsTitle'>Meat & Cheese Box</p>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $55.00</p>
								<p className='options'>10x10 inches - $80.00</p>
								<p className='options'>12x12 inches - $105.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Img variant='top' src={cheeseBox} />
						<Card.Body>
							<p className='optionsTitle'>Cheese Box</p>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $50.00</p>
								<p className='options'>10x10 inches - $75.00</p>
								<p className='options'>12x12 inches - $100.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Img variant='top' src={Multi} />
						<Card.Body>
							<p className='optionsTitle'>Veggie/Vegan Box</p>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $45.00</p>
								<p className='options'>10x10 inches - $70.00</p>
								<p className='options'>12x12 inches - $95.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Img variant='top' src={Dessert} />
						<Card.Body>
							<p className='optionsTitle'>Dessert Box</p>
							<div className='optionsContainer'>
								<p className='options'>6x6 inches - $30.00</p>
								<p className='options'>8x8 inches - $40.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Img variant='top' src={Flutes} />
						<Card.Body>
							<p className='optionsTitle'>Charcutie Fluties</p>
							<div className='optionsContainer'>
								<p className='options'>Order in Multiples of 10 - $90.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard'>
						<Card.Img variant='top' src={Jarcuterie4} />
						<Card.Body>
							<p className='optionsTitle'>Jarcuterie</p>
							<div className='optionsContainer'>
								<p className='options'>Order in Multiples of 10 - $100.00</p>
							</div>
						</Card.Body>
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
							color: '#727272',
							width: '75%',
						}}>
						20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
						Pricing
					</p>
				</Row>
			</Container>

			<CharcuterieBookingForm />
		</div>
	);
}

export default Charcuterie;
