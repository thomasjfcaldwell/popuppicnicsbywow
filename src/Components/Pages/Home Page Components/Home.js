import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import Ourstory from './Ourstory';
import Testimonals from './Testimonals';
import Steps from './Steps';
import GalleryHome from './GalleryHome';
import ServiceOptions from './ServiceOptions';

class Home extends Component {
	render() {
		return (
			<div className='main'>
				<ServiceOptions />
				<Ourstory />
				<GalleryHome />
				<Steps />
				<Container>
					<Nav>
						<Nav.Link href='/packages'>See Pricing For Picnics here</Nav.Link>
					</Nav>
				</Container>
				<Testimonals />
			</div>
		);
	}
}

export default Home;
