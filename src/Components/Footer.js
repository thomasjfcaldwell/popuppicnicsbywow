import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	ListGroup,
	Image,
	Navbar,
	Nav,
	NavDropdown,
	Button,
	Carousel,
	ListGroupItem,
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
						<Image src={HuntCity} className='images' />
						<Card.Title>City Beach</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
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
						<Image src={HuntState} className='images' />
						<Card.Title>State Beach</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
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
						<Image src={Doheny} className='images' />
						<Card.Title>Doheny State Beach </Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
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
						<Image src={DohenySP} className='images' />
						<Card.Title>Doheny State Park </Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
						<p>Access for Disabled</p>
						<img src={Disability} className='smallicons' />
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
						<Image src={Saltcreek} className='images' />
						<Card.Title>Salt Creek Beach ($55) </Card.Title>
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
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
						<Image src={Saltcreekpark} className='images' />
						<Card.Title>Salt Creek Park ($50)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
						<p>Access for Disabled</p>
						<img src={Disability} className='smallicons' />
						<p>Free Parking</p>
						<img src={freeParking} className='smallicons' />
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
						<Image src={Calafia} className='images' />
						<Card.Title>Calafia Beach ($55)</Card.Title>
						<p>Public Bathroom</p>
						<img src={Potty} className='smallicons' />
						<p>Parking</p>
						<img src={Parking} className='smallicons' />
					</Col>
				</Row>
				<Container />
			</div>
		);
	}
}


export default Footer 