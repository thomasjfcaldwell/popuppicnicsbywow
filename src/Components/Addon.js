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
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0 '>
								<p className='m-1'>Blanket Basket Rental</p>
								<h5 className='addonimg'> $45</h5>
								<Card.Img className='addonimg' src={blanket} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Beverage Package for 2</p>
								<h5 className='addonimg'>$30</h5>
								<Card.Img className='addonimg' src={Beverages} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Additional Guest for Beverages </p>
								<h5 className='addonimg'>$5</h5>
								<Card.Img className='addonimg' src={Beverages} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Teepee Cozy Corner (with Throw and Decor)</p>
								<h5 className='addonimg'>$40</h5>
								<Card.Img className='addonimg' src={Teepee} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Umbrella With Stand</p>
								<h5 className='addonimg'>$45</h5>
								<Card.Img className='addonimg' src={Umbrella} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Dessert Platter </p>
								<h5 className='addonimg'>$40</h5>
								<Card.Img className='addonimg' src={Dessert} />
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
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Cheese Box</p>
								<h5 className='addonimg'>$50</h5>
								<Card.Img className='addonimg' src={cheeseBox} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Mediterranean Box </p>
								<h5 className='addonimg'>$50</h5>
								<Card.Img className='addonimg' src={Multi} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Cheese & Meat Box </p>
								<h5 className='addonimg'>$40</h5>
								<Card.Img className='addonimg' src={MeatCheese} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Live Music</p>
								<h5 className='addonimg'>$300</h5>
								<Card.Img className='addonimg' src={Music} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Extra Hour</p>
								<h5 className='addonimg'>$100</h5>
								<Card.Img className='addonimg' src={Umbrella} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>BlueTooth Speaker</p>
								<h5 className='addonimg'>$10</h5>
								<Card.Img className='addonimg' src={speaker} />
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


export default Addon