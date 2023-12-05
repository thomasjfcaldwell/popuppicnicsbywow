import React, { Component } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import '../../../App.css';
import Addon from './Addon';
import Footer from './Footer';
import PicnicFQA from '../../Modals/PicnicFQA';
import BandWPackage from '../../../Images/Packages/bellsandwhistles.jpg';
import simplySavvy from '../../../Images/Packages/simplysavvy.jpg';
import Themes from './Themes';
import BasicBeauty from '../../../Images/Packages/basicBeauty.jpg';

class Packages extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<div className='locationsHeader'>
							<h5>STEP 1: SELECT A PICNIC PACKAGE</h5>
						</div>
					</Row>
				</Container>
				<Container fluid>
					<Row className='packages'>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>BASIC BEAUTY PACKAGE $155+++</p>

								<Image
									className='packagesImage'
									src={BasicBeauty}
									alt='Basic Beauty package images'
								/>

								<ul className='no_bullets'>
									<li>
										1 ½ Hour POP-UP Picnic for <span>2 Guests maximum</span>
									</li>{' '}
									<li>Personalized Letter board</li>
									<li>Small Hand Crafted Wood Table(approx 16x16in)</li>{' '}
									<li>Tapestry blanket (floor covering) </li>
									<li>Pillow Seating for Guests </li>
									<li>Flatware, small Plates/Cloth Napkins</li>
									<li>Gold Metal Goblets</li>
									<li>Tapestry Blanket/Floor covering</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>SIMPLY SAVVY PACKAGE $195+++</p>

								<Image
									className='packagesImage'
									src={simplySavvy}
									alt='simply Savvy package images'
								/>

								<ul className='no_bullets'>
									<li>Two Hour POP-UP Picnic for 2 Guests</li>{' '}
									<li>Sign Hand Crafted Wood Picnic Table</li>{' '}
									<li>Pillow Seating for Guests</li>
									<li>Flatware/Plates/Cloth Napkins</li>
									<li>Metal Goblets</li> <li>Table Décor</li>
									<li>Rug/floor covering</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} lg={4}>
							<div className='packagesContainer'>
								<p className='packagesHeader'>
									THE BELLS & WHISTLES PACKAGE $295+++
								</p>

								<Image
									src={BandWPackage}
									className='packagesImage'
									alt='Bells & Whistles Package Image'
								/>

								<ul className='no_bullets'>
									<li>Two Hour POP-UP Picnic for 2 Guests</li>{' '}
									<li>Personalized Letter Board Sign</li>
									<li>Hand Crafted Wood Picnic Table</li>{' '}
									<li>Pillow Seating for Guests</li>
									<li>Flatware/Plates/Cloth Napkins</li>
									<li>Metal Goblets</li> <li>Table Décor </li>
									<li>Rug/floor covering </li>
									<li>
										Beverage Package for 2 Guests{' '}
										<span>
											(2 Sparking flavored Perrier, 2 Fiji water, Ice & Ice
											bucket)
										</span>
									</li>{' '}
									<li>Bluetooth Speaker for Music </li>
									<li>Choice of Posh Umbrella with Tassels or Teepee Set-Up</li>
									<li>Small Hand Crafted Wood side Table</li>
									<li>Floor & Perimeter Décor</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<p>Lower your per person price by inviting more guests</p>
					</Row>
				</Container>
				<Container>
					<Row>
						<p>
							Location Fee, 20% Service Fee and Sales tax will be added to
							Pricing
						</p>
					</Row>
				</Container>
				<Themes />
				<Footer />
				<Addon />
				<div>
					<PicnicFQA />
				</div>
				<Container>
					<Row>
						<div className='locationsHeader'>
							<h5>STEP 5: BOOK YOUR PICNIC HERE</h5>
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Packages;
