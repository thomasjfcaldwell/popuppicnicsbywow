import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import '../styles/addon.css';
import blanket from '../Images/Packages/blankets.jpg';
import Beverages from '../Images/Packages/beveragepackage3.31.2021.jpg';
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
import ballons from '../Images/Packages/ballonGarland.4.9.2021.jpg';
import smores from '../Images/Packages/smores.4.9.201.jpg';
import Heart from '../Images/Charcuterie/VDay Dessert Box2.jpg';

class Addon extends Component {
	render() {
		return (
			<div className='addons'>
				<Container>
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
								STEP 4: SELECT ADDITIONAL OPTIONS
							</h5>
						</div>
					</Row>
				</Container>
				<Container>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Cozy Blanket Basket</p>
							<Image className='addonimg' src={blanket} />
							<h5 className='pricing'> $25</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Beverage Package for 2</p>
							<Image className='addonimg' src={Beverages} />
							<h5 className='pricing'>$30</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>
								Additional Beverages for One Guest
							</p>
							<Image className='addonimg' src={Beverages1} />
							<h5 className='pricing'>$5</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Teepee Set-Up</p>
							<Image className='addonimg' src={Teepee} />
							<h5 className='pricing'>$40</h5>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Posh Umbrella with Tassels</p>
							<Image className='addonimg' src={Umbrella} />
							<h5 className='pricing'>$45</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Dessert Platter </p>
							<Image className='addonimg' src={Dessert} />
							<h5 className='pricing'>$40</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Cheese Charcuterie Box</p>
							<Image className='addonimg' src={cheeseBox} />
							<h5 className='pricing'>$50</h5>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='addonCol'>
							<p className='serviceHeader'>Vegan/Vegetarian Charcuterie Box</p>
							<Image className='addonimg' src={Multi} />
							<h5 className='pricing'>$45</h5>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Col xs={6} sm={6} md={4} lg={3} className='addonCol'>
							<p className='serviceHeader'>Meat & Cheese Charcutier Box</p>
							<Image className='addonimg' src={MeatCheese} />
							<h5 className='pricing'>$55</h5>
						</Col>
						<Col xs={6} sm={6} md={4} lg={3} className='addonCol'>
							<p className='serviceHeader'>Live Music Entertainment</p>
							<Image className='addonimg' src={Music} />
							<h5 className='pricing'>$300+</h5>
						</Col>
						<Col xs={6} sm={6} md={4} lg={3} className='addonCol'>
							<p className='serviceHeader'>Additional Hour for Picnic</p>
							<Image className='addonimg' src={extraHour} />
							<h5 className='pricing'>$75</h5>
						</Col>
						<Col xs={6} sm={6} md={4} lg={3} className='addonCol'>
							<p className='serviceHeader'>BlueTooth Speaker</p>
							<Image className='addonimg' src={speaker} />
							<h5 className='pricing'>$10</h5>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							marginTop: '20px',
						}}>
						<Col sm={12} lg={4}>
							<Image
								fluid
								src={ballons}
								alt='balloons'
								className='balloonImage'
								style={{ width: '75%', margin: '5px' }}
							/>
							<p className='serviceHeader'>
								One Balloon Garland for Teepee Set-Up (approx. 5 feet)
								<span>* TeePee not included</span>
							</p>
							<h5 className='pricing'>$225</h5>
						</Col>
						<Col sm={12} lg={4}>
							<Image
								fluid
								src={smores}
								alt='balloons'
								className='balloonImage'
								style={{ width: '75%', margin: '5px' }}
							/>
							<p className='serviceHeader'>Smores Boxes</p>
							<h5 className='pricing'>
								$50{' '}
								<span
									style={{
										color: 'white',
										fontSize: '0.5em',
									}}>
									(serves up to 4 guests)
								</span>{' '}
								$150{' '}
								<span
									style={{
										color: 'white',
										fontSize: '0.5em',
									}}>
									(serves up to 12 guests)
								</span>
							</h5>
						</Col>
						<Col sm={12} lg={4}>
							<Image
								fluid
								src={Heart}
								alt='Heart Shaped Box'
								className='balloonImage'
								style={{ width: '75%', margin: '5px' }}
							/>
							<p className='serviceHeader'>Heart Shaped Box</p>
							<h5 className='pricing'>$45</h5>
						</Col>
					</Row>
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<p
							style={{
								fontFamily: 'Montserrat',
								fontWeight: '500',
								color: '#f7901e',
								marginTop: '20px',
							}}>
							20% Service Fee,Sales tax & Applicable Delivery Fee will be added
							to Pricing
						</p>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Addon;
