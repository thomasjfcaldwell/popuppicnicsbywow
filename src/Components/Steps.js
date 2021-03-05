import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

import step1 from '../Images/Steps/step1.png';
import step2 from '../Images/Steps/step2.png';
import step3 from '../Images/Steps/step3.png';
import step4 from '../Images/Steps/step4.png';

import '../App.css';
import '../styles/locations.css';

class Steps extends Component {
	render() {
		return (
			<div>
				<div className='d-flex align-items-center justify-content-center'>
					<Row className='text-center'>
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
								WOW! POP-UP PICNICS PROCESS
							</h5>
						</div>
					</Row>
				</div>
				<Container fluid>
					<Row className='row align-items-center '>
						<Col xs={6} sm={6} lg={3}>
							<Image src={step1} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col xs={6} sm={6} lg={3}>
							<Image src={step2} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col xs={6} sm={6} lg={3}>
							<Image src={step3} className='img-fluid' alt='Responsive image' />
						</Col>
						<Col xs={6} sm={6} lg={3}>
							<Image src={step4} className='img-fluid' alt='Responsive image' />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Steps;
