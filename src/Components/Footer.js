import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import HuntState from '../Images/Locations/HuntingtonStateWeb.jpg';
import '../styles/locations.css';

import Doheny from '../Images/Locations/doheneyBeachWeb.jpg';
import Saltcreek from '../Images/Locations/saltcreekbeachWeb.jpg';
import Bstreet from '../Images/Locations/BstreetWeb.jpg';
import Corona from '../Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '../Images/Locations/HillTopParkWeb.jpg';
import Heisler from '../Images/Locations/heislerpark.jpg';

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
							STEP 2: SELECT A PICNIC LOCATION
						</h5>
					</div>
				</Row>

				<Row>
					<Col lg={3}>
						<Card className='border-0'>
							<div className='locationsHeader'>
								<p
									style={{
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
										background: '#f7901e',
										color: 'white',
										padding: '10px',
									}}>
									HUNTINGTON BEACH
								</p>
							</div>

							<Image
								src={HuntState}
								alt='huntington beach state beach'
								className='images'
							/>
							<div className='locationDetails'>
								<h5 className='locationPrice'>Huntington Central Park($20)</h5>
								<p>Public Bathroom, Parking</p>
								<h5 className='locationPrice'>State Beach ($30)</h5>
								<p>Public Bathroom, Parking</p>
							</div>
						</Card>
					</Col>

					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								NEWPORT BEACHES/PARKS
							</p>
						</div>

						<Image
							src={Bstreet}
							alt='image of bstreet in Newport'
							className='images'
						/>
						<div className='locationDetails'>
							<h5 className='locationPrice'>B Street in Newport Beach ($45)</h5>
							<p>Public Bathroom , Parking</p>

							<h5 className='locationPrice'>15th Street ($45)</h5>
							<p>Public Bathroom, Parking</p>
							<h5 className='locationPrice'>Harbour Patrol Beach ($45)</h5>
							<p>Public Bathroom, Parking, Free Parking</p>

							<h5 className='locationPrice'>The Wedge Beach ($45)</h5>
							<p>Free Parking</p>
							<h5 className='locationPrice'>The Wedge Park ($40)</h5>
							<p>Free Parking,Access for Disabled</p>
						</div>
					</Col>
					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								CORONA DEL MAR BEACH
							</p>
						</div>
						<Image
							src={Corona}
							alt='Image of Corona Del Mar'
							className='images'
						/>
						<div className='locationDetails'>
							<h5 className='locationPrice'>Corona Del Mar Beach ($55)</h5>
							<p>Public Bathroom,Free Parking</p>
						</div>
					</Col>
					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								DANA POINT
							</p>
						</div>
						<Image src={Saltcreek} alt='Salt Creek Beach' className='images' />
						<div className='locationDetails'>
							<h5 className='locationPrice'>Salt Creek Beach ($55) </h5>
							<p>Parking</p>
							<h5 className='locationPrice'>Salt Creek Park ($45)</h5>
							<p>Public Bathroom, Access for Disabled, Free Parking</p>
						</div>
					</Col>
				</Row>

				<Row>
					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								DOHENY BEACH/PARK
							</p>
						</div>
						<Image src={Doheny} alt='Doheny State Beach' className='images' />
						<div className='locationDetails'>
							<h5 className='locationPrice'>Doheny State Beach($55) </h5>
							<p>Public Bathroom, Parking</p>

							<h5 className='locationPrice'>Doheny State Park($45) </h5>
							<p>Public Bathroom, Parking, Access for Disabled</p>
						</div>
					</Col>
					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								LAGUNA BEACH/PARK
							</p>
						</div>
						<Image src={Heisler} alt='Heisler Picnic Site' className='images' />
						<div className='locationDetails'>
							<h5 className='locationPrice'>Heisler Park($45) </h5>
							<p>Public Bathroom, Parking</p>
							<h5 className='locationPrice'>Heisler Beach ($55) </h5>
							<p>Public Bathroom, Parking, Access for Disabled</p>
						</div>
					</Col>

					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								SAN CLEMENTE
							</p>
						</div>

						<Image
							src={Saltcreek}
							alt='Calafia Beach Picnic Site'
							className='images'
						/>
						<div className='locationDetails'>
							<h5 className='locationPrice'>Calafia Beach ($55)</h5>
							<p>Public Bathroom ,Parking</p>
						</div>
					</Col>

					<Col lg={3}>
						<div className='locationsHeader'>
							<p
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#f7901e',
									color: 'white',
									padding: '10px',
								}}>
								SIGNAL HILL PARK
							</p>
						</div>
						<Image
							src={Hilltop}
							alt='Image of the Hilltop Park in Signal Hill'
							className='images'
						/>
						<div className='locationDetails'>
							<h5 className='locationPrice'>
								Hilltop Park in Signal Hill ($45)
							</h5>
							<p>Access for Disabled, Free Parking</p>
						</div>
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
						20% Service Fee and Sales tax will be added to Pricing
					</p>
				</Row>
			</div>
		);
	}
}

export default Footer;
