import React, { Component } from 'react';
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
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
				<Container data-aos='fade-in'>
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
								STEP 3: SELECT A PREFERRED PICNIC LOCATION
							</h5>
						</div>
					</Row>
				</Container>
				<Container fluid>
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
									<div>
										<h5 className='locationPrice'>$30</h5>
									</div>
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
								<div>
									<h5 className='locationPrice'>$45</h5>
								</div>
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
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
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
							<Image
								src={Saltcreek}
								alt='Salt Creek Beach'
								className='images'
							/>
							<div className='locationDetails'>
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid>
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
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
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
							<Image
								src={Heisler}
								alt='Heisler Picnic Site'
								className='images'
							/>
							<div className='locationDetails'>
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
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
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
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
								<div>
									<h5 className='locationPrice'>$45</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Container>
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
				</Container>
			</div>
		);
	}
}

export default Footer;
