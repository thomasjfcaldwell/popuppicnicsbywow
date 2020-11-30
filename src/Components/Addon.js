import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import '../styles/addon.css'
import blanket from '../Images/Packages/blankets.jpg';
import Beverages from '../Images/Packages/beveragepackage.11.23.jpg';
import Teepee from '../Images/Packages/teepee.11.23jpg.jpg';
import Umbrella from '../Images/Packages/umbrella.jpg';
import Dessert from '../Images/Packages/dessert.jpg';
import Multi from '../Images/Packages/medetrainann.jpg';
import cheeseBox from '../Images/Packages/cheesebox.jpg';
import MeatCheese from '../Images/Packages/meat.jpg';
import Music from '../Images/Packages/livemusic.jpg';
import speaker from '../Images/Packages/bluetooth.jpg';

class Addon extends Component {
	render() {
		return (
			<div>
				<Row
					style={{
						background: '#555',
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<div class='locationsHeader'>
						<h1>Add On Items</h1>
					</div>
				</Row>
				<Row className='m-1'>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={blanket} />
							<Card.Title className='addonimg'>
								Blanket Basket Rental $45
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Beverages} />
							<Card.Title className='addonimg'>
								Beverage Package for 2 $30
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Beverages} />
							<Card.Title className='addonimg'>
								Additional Guest for Beverage Package $5
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Teepee} />
							<Card.Title className='addonimg'>
								Teepee Cozy Corner (with Throw and Decor) $60
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Umbrella} />
							<Card.Title className='addonimg'>Umbrella With Stand</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Dessert} />
							<Card.Title className='addonimg'>Dessert Platter $40</Card.Title>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={cheeseBox} />
							<Card.Title className='addonimg'>Cheese Box $50</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Multi} />
							<Card.Title className='addonimg'>
								Mediterranean Box $50
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={MeatCheese} />
							<Card.Title className='addonimg'>
								Cheese and Meat Platter $60
							</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Music} />
							<Card.Title className='addonimg'>Live Music</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={Umbrella} />
							<Card.Title className='addonimg'>Extra Hour</Card.Title>
						</Card>
					</Col>
					<Col sm={6} md={4} lg={2}>
						<Card className='addoncard'>
							<Card.Img className='addonimg' src={speaker} />
							<Card.Title className='addonimg'>Bluetooth Speaker</Card.Title>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}


export default Addon