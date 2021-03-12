import React, { Component } from 'react';
import { Row, Col, Container, Image, Nav, Button } from 'react-bootstrap';

import Picnic from '../Images/ServiceOptions/PicnicBefore.jpg';
import backYard from '../Images/ServiceOptions/MoviesBefore.jpg';
import Delivery from '../Images/ServiceOptions/DeliveryBefore.jpg';
import '../App.css';

class ServiceOptions extends Component {
	state = {};
	render() {
		return (
			<div
				style={{
					fontFamily: 'Montserrat',
					fontSize: '0.8em',
				}}>
				<Container fluid>
					<Row>
						<Col lg={4} sm={12} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<div className='locationsHeader'>
									<h5
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
											background: '#f7901e',
											color: 'white',
											padding: '10px',
										}}>
										POP-UP PICNICS
									</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={Picnic}
									alt='picnicImage'
									style={{
										width: '100%',
										boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
									}}
								/>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '10px',
									height: '100px',
								}}>
								<p
									style={{
										color: '#727272',
										marginTop: '30px',
										height: '50px',
									}}>
									Luxury Picnics in your Backyard, Park or Beach, that create
									lifelong memories
								</p>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									margin: '30px',
								}}>
								<Nav.Link
									href='/packages'
									style={{
										color: 'white',
									}}>
									<Button
										style={{
											backgroundColor: '#F78F1E',
											border: 'none',
										}}>
										See More
									</Button>
								</Nav.Link>
							</div>
						</Col>
						<Col lg={4} sm={12} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<div className='locationsHeader'>
									<h5
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
											background: '#f7901e',
											color: 'white',
											padding: '10px',
										}}>
										MOVIE NIGHTS
									</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={backYard}
									alt='BackYard Images'
									style={{
										width: '100%',
										boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
									}}
								/>
							</div>
							<div
								className='serviceText'
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '10px',
									height: '100px',
								}}>
								<p
									style={{
										color: '#727272',
										marginTop: '30px',
										height: '50px',
									}}>
									Grab the Popcorn and have a private viewing of a film or
									special events with your loved ones or work colleagues
								</p>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									margin: '30px',
								}}>
								<Nav.Link
									href='/backyardmovies'
									style={{
										color: 'white',
									}}>
									<Button
										style={{
											backgroundColor: '#F78F1E',
											border: 'none',
										}}>
										See More
									</Button>
								</Nav.Link>
							</div>
						</Col>
						<Col lg={4} sm={12} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<div className='locationsHeader'>
									<h5
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
											background: '#f7901e',
											color: 'white',
											padding: '10px',
										}}>
										CHARCUTERIE SERVICE
									</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={Delivery}
									alt='Delivery Images'
									style={{
										width: '100%',
										boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
									}}
								/>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '10px',
									height: '100px',
								}}>
								<p
									style={{
										color: '#727272',
										marginTop: '30px',
										height: '50px',
									}}>
									Bring it to a Party, Enjoy at Home for Small & Large Groups or
									Give as a Gift to Loved Ones, Employees or Clients
								</p>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									margin: '30px',
								}}>
								<Nav.Link
									href='/charcuterie'
									style={{
										color: 'white',
									}}>
									<Button
										style={{
											backgroundColor: '#F78F1E',
											border: 'none',
										}}>
										See More
									</Button>
								</Nav.Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ServiceOptions;
