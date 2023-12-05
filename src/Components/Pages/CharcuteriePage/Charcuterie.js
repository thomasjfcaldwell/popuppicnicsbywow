import React from 'react';
import { Row, Col, Image, Card, Container } from 'react-bootstrap';
import DeliveryBox from '../../../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../../../Images/Charcuterie/flutes.jpg';
import Heart from '../../../Images/Charcuterie/VDay Dessert Box2.jpg';
import Dessert from '../../../Images/Packages/dessertBox.jpg';
import Multi from '../../../Images/Packages/veggieBox.jpg';
import cheeseBox from '../../../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../../../Images/Packages/meatChesseBox.jpg';
import treats from '../../../Images/Charcuterie/Smores Bar Box5.jpg';

function Charcuterie() {
	return (
		<div className='body'>
			<Container fluid>
				<div>
					<h3>CHARCUTERIE DELIVERY/PICK UP</h3>
				</div>
				<Row>
					<Col lg={6} sm={12}>
						<p>
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
						<Image fluid src={DeliveryBox} alt='deliveryBox' />
					</Col>
				</Row>
			</Container>
			<div>
				<h4>Delivery and Pick Up options</h4>
			</div>

			<Container fluid>
				<Row>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<p className='optionsTitle'>Meat & Cheese Box</p>
						<Card.Img
							variant='top'
							src={MeatCheese}
							alt='cheeseBox'
							className='deliveryImg'
						/>
						<Card.Body>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $60.00</p>
								<p className='options'>10x10 inches - $85.00</p>
								<p className='options'>12x12 inches - $110.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<p className='optionsTitle'>Cheese Box</p>
						<Card.Img variant='top' src={cheeseBox} />
						<Card.Body>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $55.00</p>
								<p className='options'>10x10 inches - $80.00</p>
								<p className='options'>12x12 inches - $105.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<p className='optionsTitle'>Veggie/Vegan Box</p>
						<Card.Img variant='top' src={Multi} />
						<Card.Body>
							<div className='optionsContainer'>
								<p className='options'>8x8 inches - $50.00</p>
								<p className='options'>10x10 inches - $75.00</p>
								<p className='options'>12x12 inches - $100.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<p className='optionsTitle'>Dessert Box</p>
						<Card.Img variant='top' src={Dessert} />
						<Card.Body>
							<div className='optionsContainer'>
								<p className='options'>6x6 inches - $35.00</p>
								<p className='options'>8x8 inches - $45.00</p>
							</div>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<p className='optionsTitle'>Charcuterie Fluties</p>
						<Card.Img variant='top' src={Flutes} />
						<Card.Body>
							<div className='optionsContainer'>
								<p className='options'>Order in Multiples of 20 - $200.00</p>
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col lg={6} sm={12}>
						<div>
							<p>Heart Box</p>
							<div>
								<Image fluid src={Heart} alt='heartBox' />
							</div>
							<div>
								<h4>Sweets Included</h4>
								<p className='sweetsText'>(1)Mini fruit tart</p>{' '}
								<p className='sweetsText'>(1) mini cream brûlée</p>
								<p className='sweetsText'>(8) Macaroons </p>
								<p className='sweetsText'>(2) mini strawberry Chau rings</p>
								<p className='sweetsText'>Chocolate Covered Pretzels</p>
								<p className='sweetsText'>Chocolate Covered Acai Balls</p>
								<h5>$50</h5>
							</div>
						</div>
					</Col>
					<Col lg={6} sm={12}>
						<div>
							<p>Smores Bar Box</p>
							<div>
								<Image fluid src={treats} alt='smoresBox' />
							</div>
							<div>
								<h4>Sweets Included</h4>
								<p className='sweetsText'>(16) Graham Crackers</p>{' '}
								<p className='sweetsText'>(6) Hershey’s Milk Chocolate Bars</p>
								<p className='sweetsText'>
									(4) Reese’s Peanut Butter Cups
								</p>{' '}
								<p className='sweetsText'>(30) Marshmallows</p>
								<h5>
									$60 <span>(Size serves up to 4 guests)</span>
								</h5>
								<h5>
									$180 <span>(Size serves up to 12 guests)</span>
								</h5>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<p>
						20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
						Pricing
					</p>
				</Row>
			</Container>
		</div>
	);
}

export default Charcuterie;
