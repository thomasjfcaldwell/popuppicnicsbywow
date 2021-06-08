import React, { Component } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import HuntState from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/HuntingtonStateWeb.jpg';
import '/Users/thomascaldwell/wow/popuppicnics/src/styles/locations.css';

import Doheny from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/doheneyBeachWeb.jpg';
import Saltcreek from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/saltcreekbeachWeb.jpg';
import Bstreet from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/BstreetWeb.jpg';
import Corona from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/HillTopParkWeb.jpg';
import Heisler from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Locations/heislerpark.jpg';

class Footer extends Component {
	render() {
		return (
			<div className='locations'>
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
								STEP 3: SELECT A PREFERRED PICNIC LOCATION
							</h5>
						</div>
					</Row>
				</Container>
				<Container fluid>
					<Row>
						<Col lg={3}>
							<div>
								<p className='locationsText'>HUNTINGTON BEACH</p>
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
						</Col>

						<Col lg={3}>
							<div>
								<p className='locationsText'>NEWPORT BEACHES</p>
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
							<div>
								<p className='locationsText'>CORONA DEL MAR BEACH</p>
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
							<div>
								<p className='locationsText'>DANA POINT</p>
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
							<div>
								<p className='locationsText'>DOHENY BEACH</p>
							</div>
							<Image src={Doheny} alt='Doheny State Beach' className='images' />
							<div className='locationDetails'>
								<div>
									<h5 className='locationPrice'>$55</h5>
								</div>
							</div>
						</Col>
						<Col lg={3}>
							<div>
								<p className='locationsText'>LAGUNA BEACH</p>
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
							<div>
								<p className='locationsText'>SAN CLEMENTE</p>
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
							<div>
								<p className='locationsText'>SIGNAL HILL PARK</p>
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
								color: '#f7901e',
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
