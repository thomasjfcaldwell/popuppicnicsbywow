import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
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
			<Row
				className='m-1'
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					marginTop: '10px',
					width: '100%',
				}}>
				<Col className='text-center' lg={6} sm={12}>
					<h1
						style={{
							marginTop: '1em',
							fontFamily: 'Montserrat',
							fontWeight: '500',
							background: '#727272',
							color: 'white',
							padding: '8px',
						}}>
						Charcuterie Delivery/Pick Up
					</h1>
					<p
						style={{
							fontSize: '0.8em',
							padding: '40px',
							fontWeight: '300',
							lineHeight: '1.8em',
						}}>
						One of our newest services, Charcuterie by WOW! Events was born
						during our worldwide pandemic when my Event Planning Company of 17
						years, was forced to stop doing business in March of 2020. Events
						over 10 people (family, neighbors or close friends only) were not
						allowed in California and my talented team and I decided to pivot
						and create new services that people could enjoy during COVID-19 and
						beyond. We combined our love of hosting events with delicious food
						and Charcuterie by WOW! Events was born. We prepare deliciously
						curated and thoughtfully created made to order Cheese, Meat &
						Cheese, Veggie/Vegan and Dessert Charcuterie Boxes for your
						enjoyment and entertaining occasions. Our Charcuterie Boxes are
						available for Delivery, Curbside Pick-Up or can be added to our
						POP-UP Picnic Packages. We also offer Grazing Tables for larger
						celebrations and that WOW! Factor. Our Charcuterie Boxes are great
						for all occasions such as birthdays, holidays, picnics, thank you
						gifts, corporate meetings, open house, game day, parties, date
						nights, wine tastings, wedding party snacks or casual gatherings. We
						use fresh, seasonal ingredients, creating scrumptious boards to suit
						your needs. WOW! Events is a certified woman owned small business
						enterprise (W.O.S.B.E.). We look forward to serving and creating a
						box or board just fo
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
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					margin: '40px',
				}}>
				<h4
					style={{
						display: 'inline',
						fontWeight: '300',
						lineHeight: '1.2em',
						background: '#f7901e',
						color: 'white',
						padding: '10px',
						marginTop: '100px',
					}}>
					Delivery and Pick Up options
				</h4>
			</div>
			<Row
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					marginTop: '100px',
					width: '100%',
				}}>
				<Col lg={3} sm={6}>
					<div
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<div className='valentinesDay'>
							<h3>Heart Box</h3>
							<h4>Treats Included</h4>
							<p>(2)Mini fruit tart</p> <p>(2) mini cream brûlée</p>
							<p>(2) mini lemon tarts</p> <p>(5) Macaroons </p>
							<p>(2) mini strawberry Chau rings</p>
							<p>(1) Fruit Tart</p>
							<p>(1) Creme Brûlée </p>
							<p>(1) Peach Tart</p>
						</div>
					</div>
				</Col>
				<Col lg={3} sm={6}>
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
				<Col lg={3} sm={6} xsm={6}>
					<div
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<div className='valentinesDay'>
							<h3>Smores Bar Box</h3>
							<h4>Treats Included</h4>
							<p>(16) Graham Crackers</p>{' '}
							<p>(6) Hershey’s Milk Chocolate Bars</p>
							<p>(4) Reese’s Peanut Butter Cups</p> <p>(30) Marshmallows</p>
						</div>
					</div>
				</Col>
				<Col lg={3} sm={6} xsm={6}>
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
			<Row
				style={{
					width: '80%',
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
						<Card.Title>Meat & Cheese Box</Card.Title>
						<div className='optionsContainer'>
							<p>8x8 inches</p>
							<p className='options'>10x10 inches</p>
							<p className='options'>12x12 inches</p>
						</div>
					</Card.Body>
				</Col>
				<Col className='deliveryCard' lg={2} md={4} sm={6}>
					<Card.Img variant='top' src={cheeseBox} />
					<Card.Body>
						<Card.Title as='h4'>Cheese Box</Card.Title>
						<div className='optionsContainer'>
							<p>8x8 inches</p>
							<p className='options'>10x10 inches</p>
							<p className='options'>12x12 inches</p>
						</div>
					</Card.Body>
				</Col>
				<Col className='deliveryCard' lg={2} md={4} sm={6}>
					<Card.Img variant='top' src={Multi} />
					<Card.Body>
						<Card.Title>Veggie/Vegan Box</Card.Title>
						<div className='optionsContainer'>
							<p>8x8 inches</p>
							<p className='options'>10x10 inches</p>
							<p className='options'>12x12 inches</p>
						</div>
					</Card.Body>
				</Col>
				<Col className='deliveryCard' lg={2} md={4} sm={6}>
					<Card.Img variant='top' src={Dessert} />
					<Card.Body>
						<Card.Title>Dessert Box</Card.Title>
						<div className='optionsContainer'>
							<p>6x6 inches</p>
							<p className='options'>8x8 inches</p>
						</div>
					</Card.Body>
				</Col>
				<Col className='deliveryCard' lg={2} md={4} sm={6}>
					<Card.Img variant='top' src={Flutes} />
					<Card.Body>
						<Card.Title>Flutes</Card.Title>
						<div className='optionsContainer'>
							<p>Order in Multiples of 10</p>
						</div>
					</Card.Body>
				</Col>
				<Col className='deliveryCard'>
					<Card.Img variant='top' src={Jarcuterie4} />
					<Card.Body>
						<Card.Title>Jarcuterie</Card.Title>
						<div className='optionsContainer'>
							<p>Order in Multiples of 10</p>
						</div>
					</Card.Body>
				</Col>
			</Row>

			<CharcuterieBookingForm />
		</div>
	);
}

export default Charcuterie;
