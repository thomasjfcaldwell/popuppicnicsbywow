import React, { Component } from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import Ourstory from './Ourstory';
import Testimonals from './Testimonals';
import Steps from './Steps';
import Contact from '../../Contact';
import GalleryHome from './GalleryHome';
import '/Users/thomascaldwell/wow/popuppicnics/src/styles/home.css';
import ServiceOptions from './ServiceOptions';

class Home extends Component {
	render() {
		return (
			<div>
				<div
					className='homePageWrappers'
					style={{
						marginTop: '5em',
					}}>
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
