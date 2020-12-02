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
} from 'react-bootstrap';

import step1 from '../Images/Steps/step1.png';
import step2 from '../Images/Steps/step2.png';
import step3 from '../Images/Steps/step3.png';
import step4 from '../Images/Steps/step4.png';

import '../App.css'

class Steps extends Component {
	render() {
		return (
			<div>
				<div className='d-flex align-items-center justify-content-center'>
					<Row className='text-center'>
						<h1
							style={{
								fontFamily: 'Montserrat',
								fontWeight: '500',
								background: '#231f20',
								color: 'white',
								padding: '0.2em',
							}}>
							STEPS TO YOUR PICNIC
						</h1>
					</Row>
				</div>
				<Container fluid className='w-10 '>
					<Row className='row align-items-center p-2 m-1'>
						<Col sm={6} lg={3}>
							<Image src={step1} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col sm={6} lg={3}>
							<Image src={step2} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col sm={6} lg={3}>
							<Image src={step3} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col sm={6} lg={3}>
							<Image src={step4} className='img-fluid' alt='Responsive image' />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Steps;
