import React from 'react';
import { Row, Col, Image, Card, Container } from 'react-bootstrap';
import DeliveryBox from '../../../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../../../Images/Charcuterie/flutes.jpg';
import Dessert from '../../../Images/Packages/dessertBox.jpg';
import Multi from '../../../Images/Packages/veggieBox.jpg';
import cheeseBox from '../../../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../../../Images/Packages/meatChesseBox.jpg';

function Charcuterie() {
	return (
		<>
			<Container className='charcuterie' fluid>
				<div>
					<h3>CHARCUTERIE DELIVERY/PICK UP</h3>
				</div>
				<Row>
					<Col lg={6} sm={12}>
						<Card.Text>
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
						</Card.Text>
					</Col>
					<Col lg={6} sm={12}>
						<Image fluid src={DeliveryBox} alt='deliveryBox' />
					</Col>
				</Row>
			</Container>

			<div>
				<Card.Header>Delivery and Pick Up options</Card.Header>
			</div>
			<Container fluid>
				<Row>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Header className='optionsTitle'>
							Meat & Cheese Box
						</Card.Header>
						<Card.Img
							variant='top'
							src={MeatCheese}
							alt='cheeseBox'
							className='deliveryImg'
						/>
						<Card.Body>
							<Card.Text className='options'>8x8 inches - $60.00</Card.Text>
							<Card.Text className='options'>10x10 inches - $85.00</Card.Text>
							<Card.Text className='options'>12x12 inches - $110.00</Card.Text>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Header className='optionsTitle'>Cheese Box</Card.Header>
						<Card.Img variant='top' src={cheeseBox} />
						<Card.Body>
							<Card.Text className='options'>8x8 inches - $55.00</Card.Text>
							<Card.Text className='options'>10x10 inches - $80.00</Card.Text>
							<Card.Text className='options'>12x12 inches - $105.00</Card.Text>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Header className='optionsTitle'>Veggie/Vegan Box</Card.Header>
						<Card.Img variant='top' src={Multi} />
						<Card.Body>
							<Card.Text className='options'>8x8 inches - $50.00</Card.Text>
							<Card.Text className='options'>10x10 inches - $75.00</Card.Text>
							<Card.Text className='options'>12x12 inches - $100.00</Card.Text>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Header className='optionsTitle'>Dessert Box</Card.Header>
						<Card.Img variant='top' src={Dessert} />
						<Card.Body>
							<Card.Text className='options'>6x6 inches - $35.00</Card.Text>
							<Card.Text className='options'>8x8 inches - $45.00</Card.Text>
						</Card.Body>
					</Col>
					<Col className='deliveryCard' lg={2} md={4} sm={6}>
						<Card.Header className='optionsTitle'>
							Charcuterie Fluties
						</Card.Header>
						<Card.Img variant='top' src={Flutes} />
						<Card.Body>
							<Card.Text className='options'>
								Order in Multiples of 20 - $200.00
							</Card.Text>
						</Card.Body>
					</Col>
				</Row>
			</Container>
			<Container>
				<p>
					20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
					Pricing
				</p>
			</Container>
		</>
	);
}

export default Charcuterie;
