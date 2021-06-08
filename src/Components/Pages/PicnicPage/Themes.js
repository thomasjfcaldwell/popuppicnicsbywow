import React, { Component } from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import prettyInPink from '../../../Images/Themes/prettyinPink.jpg';
import nauticalChic from '../../../Images/Themes/nauticalChic.jpg';
import takeMeToCapri from '../../../Images/Themes/takemetoCapri.jpg';
import NaturalLuxury from '../../../Images/Themes/naturalLuxury.jpg';

import '../../../App.css';

class Themes extends Component {
	render() {
		return (
			<div className='themesContainer'>
				<Container>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
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
								STEP 2: CHOOSE A DESIGN THEME
							</h5>
						</div>
					</Row>
				</Container>
				<Container fluid>
					<Row>
						<Col lg={3} md={6} sm={12} className='themeCol'>
							<div className='themeText'>
								<p className='themeText'>Pretty in Pink</p>
							</div>
							<div>
								<Image fluid src={prettyInPink} className='themeImage' />
							</div>
							<div className='themeTextBelow'>
								<p>Love - Femininity - Relaxation</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12} className='themeCol'>
							<div className='themeText'>
								<p className='themeText'>Nautical Chic</p>
							</div>
							<div>
								<Image fluid src={nauticalChic} className='themeImage' />
							</div>
							<div className='themeTextBelow'>
								<p>Elegant - Stylish - Ocean Blue</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12} className='themeCol'>
							<div className='themeText'>
								<p className='themeText'>Take me to Capri</p>
							</div>
							<div>
								<Image fluid src={takeMeToCapri} className='themeImage' />
							</div>
							<div className='themeTextBelow'>
								<p>Dream - Happy - Paradise</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12} className='themeCol'>
							<div className='themeText'>
								<p className='themeText'>Bohemian Luxury</p>
							</div>
							<div>
								<Image fluid src={NaturalLuxury} className='themeImage' />
							</div>
							<div className='themeTextBelow'>
								<p>Extravagant - Rustic - Comfortable</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Themes;
