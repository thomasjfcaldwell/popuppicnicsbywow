import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardImg,
	Container,
	Image,
	Nav,
	Button,
} from 'react-bootstrap';

import Picnic from '../Images/ServiceOptions/PicnicAfter.jpg';
import backYard from '../Images/ServiceOptions/MoviesAfter.jpg';
import Delivery from '../Images/ServiceOptions/DeliveryAfter.jpg';
import { NavLink } from 'react-router-dom';
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
					<Row className='m-4'>
						<Col lg={4} sm={4} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<Image
									fluid
									className='servicesImage'
									src={Picnic}
									alt='picnicImage'
									style={{
										width: '80%',
										boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
									}}
								/>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									height: '110px',
									padding: '10px',
								}}>
								<p
									style={{
										color: '#727272',
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
						<Col lg={4} sm={4} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<Image
									fluid
									className='servicesImage'
									src={backYard}
									alt='BackYard Images'
									style={{
										width: '80%',
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
								}}>
								<p
									style={{
										color: '#727272',
									}}>
									Grab the Popcorn and have a private viewing of a film or
									special events with your loved ones” and say ““Grab the
									Popcorn and have a private viewing of a film or special events
									with your loved ones or work colleagues
								</p>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
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
						<Col lg={4} sm={4} className='serviceCols'>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<Image
									fluid
									className='servicesImage'
									src={Delivery}
									alt='Delivery Images'
									style={{
										width: '80%',
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
								}}>
								<p
									style={{
										color: '#727272',
									}}>
									No Mess, No Stress when you order your food with us. Many
									options and sizes available for delivery or pick up” and say
									“Bring it to a Party, Enjoy at Home for Small & Large Groups
									or Give as a Gift to Loved Ones, Employees or Clients”
								</p>
							</div>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
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
