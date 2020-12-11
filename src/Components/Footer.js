import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import HuntState from '../Images/Locations/HuntingtonStateWeb.jpg';
import '../styles/locations.css';

import Doheny from '../Images/Locations/doheneyBeachWeb.jpg';
import Saltcreek from '../Images/Locations/saltcreekbeachWeb.jpg';
import Bstreet from '../Images/Locations/BstreetWeb.jpg';
import Corona from '../Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '../Images/Locations/HillTopParkWeb.jpg';
import Heisler from '../Images/Locations/heislerpark.jpg'

class Footer extends Component {
	render() {
		return (
			<div className='locations'>
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
								background: '#727272',
								color: 'white',
								padding: '0.4em',
							}}>
							STEP 2: SELECT A PICNIC LOCATION
						</h1>
					</div>
				</Row>
				<Row className='m-5'>
					<Col lg={4}>
						<Card className='border-0'>
							<div class='locationsHeader'>
								<h3
									style={{
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
										background: '#f7901e',
										color: 'white',
										padding: '0.2em',
									}}>
									HUNTINGTON BEACH
								</h3>
							</div>

							<Image
								src={HuntState}
								alt='huntington beach state beach'
								className='images'
							/>
							<h5 className='m-3'>State Beach ($30)</h5>
							<p>Public Bathroom, Parking</p>
						</Card>
					</Col>

					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '0.2em',
								}}>
								NEWPORT BEACHES/PARKS
							</h3>
						</div>

						<Image
							src={Bstreet}
							alt='image of bstreet in Newport'
							className='images'
						/>
						<Card.Title className='m-3'>
							B Street in Newport Beach ($40)
						</Card.Title>
						<p>Public Bathroom , Parking</p>

						<Card.Title>15th Street ($40)</Card.Title>
						<p>Public Bathroom</p>

						<p>Parking</p>
						<Card.Title>Harbour Patrol Beach ($45)</Card.Title>
						<p>Public Bathroom, Parking, Free Parking</p>

						<Card.Title>The Wedge Beach ($45)</Card.Title>
						<p>Free Parking</p>
						<Card.Title>The Wedge Park ($45)</Card.Title>
						<p>Free Parking,Access for Disabled</p>
					</Col>
					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '0.2em',
								}}>
								CORONA DEL MAR BEACH
							</h3>
						</div>
						<Image
							src={Corona}
							alt='Image of Corona Del Mar'
							className='images'
						/>
						<Card.Title className='m-3'>Corona Del Mar Beach ($55)</Card.Title>
						<p>Public Bathroom,Free Parking</p>
					</Col>
				</Row>

				<Row className='m-5'>
					<Col lg={3}>
						<div class='locationsHeader'>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '0.2em',
								}}>
								DOHENY BEACH/PARK
							</h3>
						</div>
						<Image src={Doheny} alt='Doheny State Beach' className='images' />
						<Card.Title className='m-3'>Doheny State Beach($45) </Card.Title>
						<p>Public Bathroom, Parking</p>

						<Card.Title>Doheny State Park($45) </Card.Title>
						<p>Public Bathroom, Parking, Access for Disabled</p>
					</Col>
					<Col lg={3}>
						<div class='locationsHeader'>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '0.2em',
								}}>
								LAGUNA BEACH/PARK
							</h3>
						</div>
						<Image src={Heisler} alt='Doheny State Beach' className='images' />
						<Card.Title className='m-3'>Heisler Park($50) </Card.Title>
						<p>Public Bathroom, Parking</p>

						<Card.Title>Heisler Beach ($55) </Card.Title>
						<p>Public Bathroom, Parking, Access for Disabled</p>
					</Col>

					<Col lg={3}>
						<div class='locationsHeader'>
							<h4
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									background: '#f7901e',
									color: 'white',
								}}>
								SAN CLEMENTE BEACHES/PARKS
							</h4>
						</div>

						<Image src={Saltcreek} alt='Salt Creek Beach' className='images' />
						<Card.Title className='m-3'>Salt Creek Beach ($55) </Card.Title>
						<p>Parking</p>
						<Card.Title>Salt Creek Park ($50)</Card.Title>
						<p>Public Bathroom, Access for Disabled, Free Parking</p>

						<Card.Title>Calafia Beach ($55)</Card.Title>
						<p>Public Bathroom ,Parking</p>
					</Col>

					<Col lg={3}>
						<div class='locationsHeader'>
							<h3
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '0.2em',
								}}>
								SIGNAL HILL PARK
							</h3>
						</div>
						<Image
							src={Hilltop}
							alt='Image of the Hilltop Park in Signal Hill'
							className='images'
						/>
						<Card.Title className='m-3'>
							Hilltop Park in Signal Hill ($45)
						</Card.Title>
						<p>Access for Disabled, Free Parking</p>
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
						NOTE: 20% Service Fee and Sales tax will be added to all pricing
					</p>
				</Row>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<Col>
						<div class='modal' tabindex='-1' role='dialog'>
							<div class='modal-dialog' role='document'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5 class='modal-title'>Modal title</h5>
										<button
											type='button'
											class='close'
											data-dismiss='modal'
											aria-label='Close'>
											<span aria-hidden='true'>&times;</span>
										</button>
									</div>
									<div class='modal-body'>
										<iframe
											title='bookingform'
											src='https://docs.google.com/forms/d/e/1FAIpQLScsdtaKV8fiRyJ6FiYpl5FyB-RyOZ9lLyBzb2NbanSh3FaVOw/viewform?embedded=true'
											frameborder='0'
											width='640'
											height='2000'>
											Loading…
										</iframe>
									</div>
									<div class='modal-footer'>
										<button type='button' class='btn btn-primary'>
											Save changes
										</button>
										<button
											type='button'
											class='btn btn-secondary'
											data-dismiss='modal'>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
						<div></div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Footer;
