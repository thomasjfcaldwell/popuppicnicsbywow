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
			<div className='addons'>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<div class='locationsHeader'>
						<h1
							style={{
								marginTop: '1em',
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
							}}>
							ADD ON ITEMS
						</h1>
					</div>
				</Row>
				<Container
					fluid
					style={{
						width: '80%',
					}}>
					<Row className='m-4'>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0 '>
								<p>Blanket Basket Rental</p>
								<Card.Img className='addonimg' src={blanket} />
								<h5 className='addonimg'> $45</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Beverage Package for 2</p>
								<Card.Img className='addonimg' src={Beverages} />
								<h5 className='addonimg'>$30</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Additional Guest for Beverages </p>
								<Card.Img className='addonimg' src={Beverages} />
								<h5 className='addonimg'>$5</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Teepee Cozy Corner (with Throw and Decor)</p>
								<Card.Img className='addonimg' src={Teepee} />
								<h5 className='addonimg'>$40</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Umbrella With Stand</p>
								<Card.Img className='addonimg' src={Umbrella} />
								<h5 className='addonimg'>$45</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Dessert Platter </p>
								<Card.Img className='addonimg' src={Dessert} />
								<h5 className='addonimg'>$40</h5>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container
					fluid
					style={{
						width: '80%',
					}}>
					<Row className='m-4'>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Cheese Box</p>
								<Card.Img className='addonimg' src={cheeseBox} />
								<h5 className='addonimg'>$50</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Mediterranean Box </p>
								<Card.Img className='addonimg' src={Multi} />
								<h5 className='addonimg'>$50</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Cheese & Meat Box </p>
								<Card.Img className='addonimg' src={MeatCheese} />
								<h5 className='addonimg'>$40</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Live Music</p>
								<Card.Img className='addonimg' src={Music} />
								<h5 className='addonimg'>$300</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>Extra Hour</p>
								<Card.Img className='addonimg' src={Umbrella} />
								<h5 className='addonimg'>$100</h5>
							</Card>
						</Col>
						<Col sm={4} md={2} lg={2}>
							<Card className='border-0'>
								<p>BlueTooth Speaker</p>
								<Card.Img className='addonimg' src={speaker} />
								<h5 className='addonimg'>$10</h5>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


export default Addon