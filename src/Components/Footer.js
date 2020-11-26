import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	
	Container,

	Image,

} from 'react-bootstrap';
import Disability from '../Images/Icons/disability.png';
import HuntCity from '../Images/Locations/HuntingtonCityWeb.jpg';
import HuntState from '../Images/Locations/HuntingtonStateWeb.jpg';
import '../styles/locations.css'
import Potty from '../Images/Icons/toilets.png';
import Parking from '../Images/Icons/parking-area.png';
import freeParking from '../Images/Icons/free-parking.png';

import Doheny from '../Images/Locations/doheneyBeachWeb.jpg';
import DohenySP from '../Images/Locations/DohenyStateParkWeb.jpg';
import Calafia from '../Images/Locations/calafiaBeachWeb.jpg';
import Saltcreek from '../Images/Locations/saltcreekbeachWeb.jpg';
import Saltcreekpark from '../Images/Locations/slatcreekparkWeb.jpg';
import Bstreet from '../Images/Locations/BstreetWeb.jpg';
import Street15 from '../Images/Locations/15thstreetWeb.jpg';
import Harbour from '../Images/Locations/haborPatrolWeb.jpg';
import Wedge from '../Images/Locations/theWedgeWeb.jpg';
import Corona from '../Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '../Images/Locations/HillTopParkWeb.jpg';

class Footer extends Component {
	render() {
		return (
			<div>
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#555',
							color: 'white',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>Huntington Beach</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={HuntCity}
							alt='huntington beach city beach'
							className='images'
						/>
						<Card.Title>City Beach</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={HuntState}
							alt='huntington beach state beach'
							className='images'
						/>
						<Card.Title>State Beach</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
				</Row>
				<Container />
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#F78F1E',
							color: '#231F20',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>Doheny</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image src={Doheny} alt='Doheny State Beach' className='images' />
						<Card.Title>Doheny State Beach </Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image src={DohenySP} alt='Doheny State Park' className='images' />
						<Card.Title>Doheny State Park </Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
						<p>Access for Disabled</p>
						<img
							src={Disability}
							alt='icon for disability access'
							className='smallicons'
						/>
					</Col>
				</Row>
				<Container />
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#555',
							color: 'white',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>San Clemente</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={3}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image src={Saltcreek} alt='Salt Creek Beach' className='images' />
						<Card.Title>Salt Creek Beach ($55) </Card.Title>
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
					<Col
						sm={12}
						md={4}
						lg={3}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Saltcreekpark}
							alt='saltcreek park image'
							className='images'
						/>
						<Card.Title>Salt Creek Park ($50)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
						<p>Access for Disabled</p>
						<img
							src={Disability}
							alt='icon for disability access'
							className='smallicons'
						/>
						<p>Free Parking</p>
						<img
							src={freeParking}
							alt='icon for free parking'
							className='smallicons'
						/>
					</Col>
					<Col
						sm={12}
						md={12}
						lg={3}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Calafia}
							alt='Image of Calafia Beach'
							className='images'
						/>
						<Card.Title>Calafia Beach ($55)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
				</Row>
				<Container />
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#F78F1E',
							color: '#231F20',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>Newport Beach</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Bstreet}
							alt='image of bstreet in Newport'
							className='images'
						/>
						<Card.Title>B Street in Newport Beach ($40)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
					<Col
						sm={12}
						md={4}
						lg={5}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Street15}
							alt='image of 15th street Newport Beach'
							className='images'
						/>
						<Card.Title>15th Street ($40)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
					</Col>
					<Col
						sm={12}
						md={4}
						lg={4}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Harbour}
							alt='image of harbour in Newport Beach'
							className='images'
						/>
						<Card.Title>Harbour Patrol Beach ($45)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Parking</p>
						<img src={Parking} alt='icon for parking' className='smallicons' />
						<p>Free Parking</p>
						<img
							src={freeParking}
							alt='icon for free parking'
							className='smallicons'
						/>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={4}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Wedge}
							alt='image of the Wedge in Newport Beach'
							className='images'
						/>
						<Card.Title>The Wedge Beach ($45)</Card.Title>
						<img
							src={Parking}
							alt='icon for free parking'
							className='smallicons'
						/>
						<p>Free Parking</p>
					</Col>
					<Col
						sm={12}
						md={4}
						lg={4}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Wedge}
							alt='image of the Wedge in Newport Beach'
							className='images'
						/>
						<Card.Title>The Wedge Park ($45)</Card.Title>
						<img
							src={Parking}
							alt='icon for free parking'
							className='smallicons'
						/>
						<p>Free Parking</p>
						<p>Access for Disabled</p>
						<img
							src={Disability}
							alt='icon for Disabled Access'
							className='smallicons'
						/>
					</Col>
				</Row>
				<Container />
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#F78F1E',
							color: '#231F20',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>Corona Del Mar</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={8}
						lg={10}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Corona}
							alt='Image of Corona Del Mar'
							className='images'
						/>
						<Card.Title>Corona Del Mar Beach ($55)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} alt='icon for bathroom' className='smallicons' />
						<p>Free Parking</p>
						<img
							src={Parking}
							alt='icon for free parking'
							className='smallicons'
						/>
					</Col>
				</Row>
				<Container />
				<Container fluid className='mt-1' />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
						style={{
							background: '#555',
							color: 'white',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<div class='locationsHeader'>
							<h1>Signal Hill</h1>
						</div>
					</Col>
					<Col
						sm={12}
						md={8}
						lg={10}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={Hilltop}
							alt='Image of the Hilltop Park in Signal Hill'
							className='images'
						/>
						<Card.Title>Hilltop Park in Signal Hill ($45)</Card.Title>
						<p>Access for Disabled</p>
						<img
							src={Disability}
							alt='icon for Disabled Access'
							className='smallicons'
						/>
						<p>Free Parking</p>
						<img
							src={Parking}
							alt='icon for Parking'
							className='smallicons'
						/>
					</Col>
				</Row>
				<Container />
			</div>
		);
	}
}


export default Footer 