import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

import step1 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Steps/step1.png';
import step2 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Steps/step2.png';
import step3 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Steps/step3.png';
import step4 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Steps/step4.png';

import '/Users/thomascaldwell/wow/popuppicnics/src/App.css';
import '/Users/thomascaldwell/wow/popuppicnics/src/styles/locations.css';

class Steps extends Component {
	render() {
		return (
			<div>
				<div
					className='d-flex align-items-center justify-content-center'
					data-aos='fade-in'>
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
						<Col xs={12} sm={6} lg={3}>
							<Image
								fluid
								src={step1}
								className='stepsImage'
								alt='Responsive image'
							/>
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<Image
								fluid
								src={step2}
								className='stepsImage'
								alt='Responsive image'
							/>
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<Image
								fluid
								src={step3}
								className='stepsImage'
								alt='Responsive image'
							/>
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<Image
								fluid
								src={step4}
								className='stepsImage'
								alt='Responsive image'
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Steps;
