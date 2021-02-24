import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import '../styles/addon.css';
import blanket from '../Images/Packages/blankets.jpg';
import Beverages from '../Images/Packages/beveragepackagefor2.jpg';
import Teepee from '../Images/Packages/TeePee for site.jpg';
import Umbrella from '../Images/Packages/UmbrellaForWeb.jpg';
import Dessert from '../Images/Packages/dessertBox.jpg';
import Multi from '../Images/Packages/veggieBox.jpg';
import cheeseBox from '../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../Images/Packages/meatChesseBox.jpg';
import Music from '../Images/Packages/livemusic.jpg';
import speaker from '../Images/Packages/BlueTooth for site.jpg';
import Beverages1 from '../Images/Packages/beveragepackage1.jpg';
import extraHour from '../Images/Packages/extrahour.jpg';
import ballons from '../Images/Packages/balloons.jpg';

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
							STEP 3: SELECT ADDITIONAL ITEMS (OPTIONAL)
						</h5>
					</div>
				</Row>
				<Container fluid>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0 '>
								<p className='serviceHeader'>Cozy Blanket Basket</p>
								<h5 className='pricing'> $25</h5>
								<Card.Img className='addonimg' src={blanket} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Beverage Package for 2</p>
								<h5 className='pricing'>$30</h5>
								<Card.Img className='addonimg' src={Beverages} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>
									Additional Beverages for One Guest
								</p>
								<h5 className='pricing'>$5</h5>
								<Card.Img className='addonimg' src={Beverages1} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Tepee Package</p>
								<h5 className='pricing'>$40</h5>
								<Card.Img className='addonimg' src={Teepee} />
							</Card>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Posh Umbrella with Tassels</p>
								<h5 className='pricing'>$45</h5>
								<Card.Img className='addonimg' src={Umbrella} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={2} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Dessert Platter </p>
								<h5 className='pricing'>$40</h5>
								<Card.Img className='addonimg' src={Dessert} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Cheese Charcuterie Box</p>
								<h5 className='pricing'>$50</h5>
								<Card.Img className='addonimg' src={cheeseBox} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>
									Vegan/Vegetarian Charcuterie Box
								</p>
								<h5 className='pricing'>$45</h5>
								<Card.Img className='addonimg' src={Multi} />
							</Card>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Meat & Cheese Charcutier Box</p>
								<h5 className='pricing'>$55</h5>
								<Card.Img className='addonimg' src={MeatCheese} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Live Music Entertainment</p>
								<h5 className='pricing'>$300+</h5>
								<Card.Img className='addonimg' src={Music} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>Additional Hour for Picnic</p>
								<h5 className='pricing'>$75</h5>
								<Card.Img className='addonimg' src={extraHour} />
							</Card>
						</Col>
						<Col xs={6} sm={6} md={4} lg={2} className='addonCol'>
							<Card className='border-0'>
								<p className='serviceHeader'>BlueTooth Speaker</p>
								<h5 className='pricing'>$10</h5>
								<Card.Img className='addonimg' src={speaker} />
							</Card>
						</Col>
					</Row>
				</Container>

				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						margin: '20px',
					}}>
					<Col sm={12} lg={6}>
						<Image
							fluid
							src={ballons}
							alt='balloons'
							className='balloonImage'
							style={{ width: '75%' }}
						/>
					</Col>
					<Col
						sm={12}
						lg={6}
						style={{
							width: '100%',
						}}>
						<Card className='border-0 text-center'>
							<Card.Text className='m-1'>
								Balloon Garland for Teepee= $97.75 + $55 Delivery fee
							</Card.Text>
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
							color: '#727272',
							width: '75%',
						}}>
						20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
						Pricing
					</p>
				</Row>
			</div>
		);
	}
}

export default Addon;
