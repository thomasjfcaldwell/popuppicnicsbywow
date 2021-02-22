import React, { Component } from 'react';
import { Row, Col, Image, Navbar, Nav, Carousel, Badge } from 'react-bootstrap';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';
import Ourstory from '../Components/Ourstory';
import Testimonals from '../Components/Testimonals';
import Steps from '../Components/Steps';
import Contact from '../Components/Contact';
import GalleryHome from '../Components/GalleryHome';
import ImageSlider from '../Components/ImageSlider';
import '../styles/home.css';
import { SliderData } from './SliderData';
import ServiceOptions from './ServiceOptions';
class Home extends Component {
	
	render() {
		return (
			<div>
				<ServiceOptions />
				
				<ImageSlider slides={SliderData} />
				<Ourstory />
				<GalleryHome />
				<Steps />
				<Row>
					<Col xsm={10} sm={10} lg={12}>
						<Nav
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							<Nav.Link
								href='/packages'
								style={{
									fontFamily: 'Montserrat',
									fontSize: '2em',
									fontWeight: '500',
									background: '#f7901e',
									color: 'white',
									padding: '0.7em',
									margin: '2em',
								}}>
								See Pricing For Picnics here
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Testimonals />
				<Contact />
				
			</div>
		);
	}
}

export default Home;
