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
					<Row className='m-5'>
						<Col lg={4}>
							<div>
								<Image
									src={Picnic}
									alt='picnicImage'
									style={{
										width: '100%',
										margin: '10px',
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
						<Col lg={4}>
							<div>
								<Image
									src={backYard}
									alt='BackYard Images'
									style={{
										width: '100%',
										margin: '10px',
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
									Grab the Popcorn and have a private viewing of a film or
									special events with your loved ones
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
						<Col lg={4}>
							<div>
								<Image
									src={Delivery}
									alt='Delivery Images'
									style={{
										width: '100%',
										margin: '10px',
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
									No Mess,No Stress When you order your food with us.
                                    Many options and Sizes available for delivery or pick up
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
