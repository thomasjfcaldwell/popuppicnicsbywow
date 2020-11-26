import React, { Component } from 'react';

import {
	Row,
	Col,
	Card,
	Jumbotron,
	Container,
	ListGroup,
	Navbar,
	Nav,
	
} from 'react-bootstrap';
import  '../styles/sea.css';

import Footer from '../Components/Footer'




import basicPackage from '../Images/Packages/savvy.jpg';
import bells from '../Images/bell.jpg';
import speaker from '../Images/Packages/bluetooth.jpg';
import blanket from '../Images/Packages/blankets.jpg';

import Beverages from '../Images/Packages/beveragepackage.11.23.jpg';
import Dessert from '../Images/Packages/dessert.jpg';
import Music from '../Images/Packages/livemusic.jpg';
import MeatCheese from '../Images/Packages/meat.jpg';
import Multi from '../Images/Packages/medetrainann.jpg';
import Teepee from '../Images/Packages/teepee.11.23jpg.jpg';
import Umbrella from '../Images/Packages/umbrella.jpg';
import cheeseBox from '../Images/Packages/cheesebox.jpg';



class Packages extends Component {
	render() {
		return (
			<div>
				<Jumbotron className='bg-white'>
					<Row>
						<div id='top'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-6 offer mb-3 mb-lg-0'>
										<a href='#' className='btn btn-sm'>
											Packages
										</a>
										<a href='#' className='ml-1'></a>
									</div>
									<div className='col-lg-6 text-center text-lg-right'>
										<ul className='menu list-inline mb-0'>
											<li className='list-inline-item'>
												<a href='/'>Home</a>
											</li>
											<li className='list-inline-item'>
												<a href='/contact'>Contact</a>
											</li>
											<li className='list-inline-item'>
												<a href='/faq'>FAQs</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</Row>
				</Jumbotron>
				<Row className='border-0'>
					<Col sm={12} md={6}>
						<Card className='border-0'>
							<Card.Title
								className='text-center'
								style={{
									fontSize: '2em',
									marginTop: '2em',
									fontWeight: 'lighter',
									letterSpacing: '0.1em',
									margin: '0 auto',
								}}>
								Simply Savvy $160 - 2 hours
							</Card.Title>
							<Card.Body>
								<Card.Img
									src={basicPackage}
									style={{
										width: '80%',
										margin: '0 auto',
										padding: '1em',
									}}></Card.Img>
								<Card.Text className='border-0 text-center'>
									<h3
										style={{
											fontSize: '2em',
											marginTop: '2em',
											fontWeight: 'lighter',
											letterSpacing: '0.1em',
											margin: '0 auto',
										}}>
										Included
									</h3>
									<ListGroup className='border-0'>
										<ListGroup.Item className='border-0'>
											Personalized Welcome Sign
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Hand Crafted Wooden table
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Seat Pillow For Everyone
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Flatware/ plates/White Cloth NapkinsMetal Goblets
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Table Décor
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Blanket or Rug (floor covering)
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Side Table or Storage Area
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Perimeter Decor
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Add An Additional Person At $30 Each
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Add Additional Hour $75
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card.Body>
							{/* <Buttons /> */}
						</Card>
					</Col>
					<Col>
						<Card className='border-0'>
							<Card.Title
								className='text-center'
								style={{
									fontSize: '2em',
									marginTop: '2em',
									fontWeight: 'lighter',
									letterSpacing: '0.1em',
									margin: '0 auto',
								}}>
								Bells and Whistle $260 - 2 hours
							</Card.Title>
							<Card.Img
								src={bells}
								style={{
									width: '80%',
									margin: '0 auto',
									padding: '1em',
								}}></Card.Img>
							<Card.Body>
								<Card.Text className='border-0 text-center'>
									<h3
										style={{
											fontSize: '2em',
											marginTop: '2em',
											fontWeight: 'lighter',
											letterSpacing: '0.1em',
											margin: '0 auto',
										}}>
										Included
									</h3>
									<ListGroup>
										<ListGroup.Item className='border-0'>
											Everything included in Savvy{' '}
											<strong
												style={{
													borderBottom: 'double black',
												}}>
												PLUS
											</strong>
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Choice of One Picnic Platter
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Beverage Package for 2
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Bluetooth Speakers
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Rug for Seating
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Decorative Umbrella or Styled Teepee Corner
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Add an additional person at $30 each
										</ListGroup.Item>
										<ListGroup.Item className='border-0'>
											Add additional Hour $75
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card.Body>
							{/* <Buttons /> */}
						</Card>
					</Col>
				</Row>
				<div className='text-center m-5'>
					<h3
						style={{
							fontSize: '3em',
							marginTop: '2em',
							fontWeight: 'lighter',
							letterSpacing: '0.1em',
							margin: '0 auto',
						}}>
						Add on items
					</h3>
				</div>
				<div
					style={{
						border: 'solid 0.3em #F78F1E',
						margin: '2em',
					}}>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: '4em',
						}}>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Blanket Basket Rental $45
								</Card.Title>
								<Card.Img
									src={blanket}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
										boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Beverage Package for 2 @ $30
								</Card.Title>
								<Card.Img
									src={Beverages}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Additional Guest $5 pp for Beverage Package
								</Card.Title>
								<Card.Img
									src={blanket}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Teepee Cozy Corner <small>(with Throw and Decor)</small> $60
								</Card.Title>
								<Card.Img
									src={Teepee}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
					</Row>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Umbrella with Stand @ 100
								</Card.Title>
								<Card.Img
									src={Umbrella}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Dessert Platter @ $40
								</Card.Title>
								<Card.Img
									src={Dessert}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Cheese box @ $50
								</Card.Title>
								<Card.Img
									src={cheeseBox}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Medit-Platter @ $50
								</Card.Title>
								<Card.Img
									src={Multi}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
					</Row>

					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Cheese and Meat Platter @ $60
								</Card.Title>
								<Card.Img
									src={MeatCheese}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Live Music 2 hours
								</Card.Title>
								<Card.Img
									src={Music}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>one added hour</Card.Title>
								<Card.Img
									src={speaker}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={3}>
							<Card className='p-2 border-0 m-5'>
								<Card.Title className='text-center'>
									Blue Tooth Speaker rental
								</Card.Title>
								<Card.Img
									src={speaker}
									style={{
										maxWidth: '15em',
										margin: '0 auto',
									}}
								/>
								{/* <Buttons /> */}
							</Card>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Packages;
