import React, { Component } from 'react';

import {
	Row,
	Col,
	Card,
	CardImg,
	
} from 'react-bootstrap';
import  '../styles/sea.css';
import Addon from '../Components/Addon'

import Footer from '../Components/Footer'




import basicPackage from '../Images/Packages/savvy.jpg';
import bells from '../Images/bell.jpg';




class Packages extends Component {
	render() {
		return (
			<div>
				<Row>
					<div id='top'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-6 offer mb-3 mb-lg-0'>
									<a href='#' className='btn btn-sm' />
							PACKAGES
									<a href='#' className='ml-1' />
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
				<Row className='mt-1'>
					<Col
						sm={12}
						lg={6}
						style={{
							background: '#F78F1E',
							color: '#231F20',
						}}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<Card.Title>Simply Savvy $160 - 2 hours</Card.Title>
								<CardImg src={basicPackage} />
								<Card.Text>
									<ul className='nobullets'>
										<li>Personalized Welcome Sign</li>
										<li>Hand Crafted Wooden table</li>{' '}
										<li>Seat Pillow For Everyone</li>{' '}
										<li>Flatware/ plates/White Cloth Napkins</li>{' '}
										<li>Metal Goblets</li> <li>Table Décor</li>{' '}
										<li>Blanket or Rug (floor covering) </li>
										<li>Side Table or Storage Area Perimeter Decor</li>{' '}
										<li>Add An Additional Person At $30</li>{' '}
										<li>Each Add Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
					<Col
						sm={12}
						lg={6}
						style={{
							background: '#555',
							color: 'white',
						}}>
						<div>
							<Card className='border-0 m-5 text-center bg-transparent'>
								<Card.Title>Bells and Whistle $260 - 2 hours</Card.Title>
								<CardImg src={bells} />
								<Card.Text>
									<ul className='nobullets'>
										<li>Everything included in Savvy PLUS</li>
										<li>Choice of One Picnic Platter</li>{' '}
										<li>Beverage Package for 2</li> <li>Bluetooth Speakers</li>{' '}
										<li>Decorative Umbrella or Styled Teepee Corner</li>{' '}
										<li>Add an additional person at $30 each</li>{' '}
										<li>Each Add Additional Hour $75</li>
									</ul>
								</Card.Text>
							</Card>
						</div>
					</Col>
				</Row>

				<Addon />
				<Footer />
			</div>
		);
	}
}

export default Packages;
