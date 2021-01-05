import React, { Component } from 'react';
import { Row, Col, Card, Container,} from 'react-bootstrap';
import '../styles/addon.css'
import blanket from '../Images/Packages/blankets.jpg';
import Beverages from '../Images/Packages/beveragepackagefor2.jpg';
import Teepee from '../Images/Packages/teepee.11.23jpg.jpg';
import Umbrella from '../Images/Packages/umbrella.jpg';
import Dessert from '../Images/Packages/dessert.jpg';
import Multi from '../Images/Packages/medboxNew12.17.jpg';
import cheeseBox from '../Images/Packages/cheesebox.jpg';
import MeatCheese from '../Images/Packages/meatandchesseNEW12.17.jpg';
import Music from '../Images/Packages/livemusic.jpg';
import speaker from '../Images/Packages/bluetooth.jpg';
import Beverages1 from '../Images/Packages/beveragepackage1.jpg'
import extraHour from '../Images/Packages/extrahour.jpg'

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
							STEP 3: SELECT ADDITIONAL ITEMS (OPTIONAL)
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
								<p className='m-1'>Cozy Blanket Basket</p>
								<h5 className='addonimg'> $25</h5>
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
								<p className='m-1'>Additional Beverages for One Guest</p>
								<h5 className='addonimg'>$5</h5>
								<Card.Img className='addonimg' src={Beverages1} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Tepee Package</p>
								<h5 className='addonimg'>$40</h5>
								<Card.Img className='addonimg' src={Teepee} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Posh Umbrella with Tassels</p>
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
								<p className='m-1'>Cheese Charcutier Box</p>
								<h5 className='addonimg'>$50</h5>
								<Card.Img className='addonimg' src={cheeseBox} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>VEGAN/VEGETARIAN CHARCUTERIE BOX</p>
								<h5 className='addonimg'>$60</h5>
								<Card.Img className='addonimg' src={Multi} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Meat & Cheese Charcutier Box</p>
								<h5 className='addonimg'>$60</h5>
								<Card.Img className='addonimg' src={MeatCheese} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Live Music Entertainment</p>
								<h5 className='addonimg'>$300+</h5>
								<Card.Img className='addonimg' src={Music} />
							</Card>
						</Col>
						<Col sm={4} md={4} lg={2}>
							<Card className='border-0'>
								<p className='m-1'>Additional Hour for Picnic</p>
								<h5 className='addonimg'>$75</h5>
								<Card.Img className='addonimg' src={extraHour} />
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
								width: '100%',
								color: '#727272',
							}}>
							20% Service Fee and Sales tax & Applicable Delivery Fee will be
							added to Pricing
						</p>
					</Row>
				</Container>
			</div>
		);
	}
}


export default Addon