import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import HuntCity from '../Images/Locations/HuntingtonCityWeb.jpg';
import HuntState from '../Images/Locations/HuntingtonStateWeb.jpg';
import '../styles/locations.css';


import Doheny from '../Images/Locations/doheneyBeachWeb.jpg';
import Saltcreek from '../Images/Locations/saltcreekbeachWeb.jpg';
import Bstreet from '../Images/Locations/BstreetWeb.jpg';
import Corona from '../Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '../Images/Locations/HillTopParkWeb.jpg';

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
							}}>
							LOCATIONS
						</h1>
					</div>
				</Row>
				<Row className='m-5'>
					<Col lg={4}>
						<Card className='border-0'>
							<div class='locationsHeader'>
								<h3
									style={{
										marginTop: '1em',
										fontFamily: 'Montserrat',
										fontWeight: '500',
										letterSpacing: '0.1em',
									}}>
									HUNTINGTON BEACH
								</h3>
							</div>

							<Image
								src={HuntState}
								alt='huntington beach state beach'
								className='images'
							/>
							<h5 className='m-3'>State Beach</h5>
							<p>Public Bathroom, Parking</p>
						</Card>
					</Col>

					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
								}}>
								DOHENY
							</h3>
						</div>
						<Image src={Doheny} alt='Doheny State Beach' className='images' />
						<Card.Title className='m-3'>Doheny State Beach </Card.Title>
						<p>Public Bathroom, Parking</p>

						<Card.Title>Doheny State Park </Card.Title>
						<p>Public Bathroom, Parking, Access for Disabled</p>
					</Col>

					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
								}}>
								SAN CLEMENTE
							</h3>
						</div>

						<Image src={Saltcreek} alt='Salt Creek Beach' className='images' />
						<Card.Title className='m-3'>Salt Creek Beach ($55) </Card.Title>
						<p>Parking</p>
						<Card.Title>Salt Creek Park ($50)</Card.Title>
						<p>Public Bathroom, Access for Disabled, Free Parking</p>

						<Card.Title>Calafia Beach ($55)</Card.Title>
						<p>Public Bathroom ,Parking</p>
					</Col>
				</Row>

				<Row className='m-5'>
					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
								}}>
								NEWPORT BEACH
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
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
								}}>
								CORONA DEL MAR
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

					<Col lg={4}>
						<div class='locationsHeader'>
							<h3
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
								}}>
								SIGNAL HILL
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
			</div>
		);
	}
}

export default Footer;
