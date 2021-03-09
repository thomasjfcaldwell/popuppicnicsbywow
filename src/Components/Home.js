import React, { Component } from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import Ourstory from '../Components/Ourstory';
import Testimonals from '../Components/Testimonals';
import Steps from '../Components/Steps';
import Contact from '../Components/Contact';
import GalleryHome from '../Components/GalleryHome';
import '../styles/home.css';
import ServiceOptions from './ServiceOptions';

class Home extends Component {
	render() {
		return (
			<div>
				<div className='homePageWrappers'>
					<ServiceOptions />
				</div>

				{/* <ImageSlider slides={SliderData} /> */}
				<div className='homePageWrappers'>
					<Ourstory />
				</div>
				<div className='homePageWrappers'>
					<GalleryHome />
				</div>
				<div className='homePageWrappers'>
					<Steps />
				</div>
				<Container>
					<Row>
						<Col>
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
										fontSize: '1em',
										fontWeight: '500',
										background: '#f7901e',
										color: 'white',
										padding: '0.7em',
										margin: '20px',
									}}>
									See Pricing For Picnics here
								</Nav.Link>
							</Nav>
						</Col>
					</Row>
				</Container>
				<div className='homePageWrappers'>
					<Testimonals />
				</div>
				<Contact />
			</div>
		);
	}
}

export default Home;
