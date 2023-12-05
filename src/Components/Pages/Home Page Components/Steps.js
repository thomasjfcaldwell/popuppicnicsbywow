import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

import step1 from '../../../Images/Steps/step1.png';
import step2 from '../../../Images/Steps/step2.png';
import step3 from '../../../Images/Steps/step3.png';
import step4 from '../../../Images/Steps/step4.png';
import '../../../App.css';

class Steps extends Component {
	render() {
		return (
			<div>
				<div
					className='d-flex align-items-center justify-content-center'
					data-aos='fade-in'>
					<Row className='text-center'>
						<div className='locationsHeader'>
							<h5>WOW! POP-UP PICNICS PROCESS</h5>
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
