import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import table from '../Images/MovieNight/movienightTable.jpg';
import sign from '../Images/MovieNight/movienightsign.jpg';
import treats from '../Images/MovieNight/movienightTreats.jpg';
import BackYardBooking from './BackYardBooking';
import PremierMovieModal from './Modals/PremierMovieModal';
import BlockBusterModal from './Modals/BlockBusterMovieModal';
import SimplyWithPremier from './Modals/SimplyWithPremier';
import SimplyWithBlockbuster from './Modals/SimplyWithBlockbuster';
import BellsWithPremier from './Modals/BellsWithPremier';
import BellsWithBlockbuster from './Modals/BellsWithBlockbuster';
import MovieVideo from './MovieVideo';
import '../App.css';

function Backyard() {
	return (
		<div className='body'>
			<div
				style={{
					margin: '2em',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
				<h3
					style={{
						display: 'inline',
						fontFamily: 'Montserrat',
						fontWeight: '500',
						letterSpacing: '0.1em',
						background: '#727272',
						color: 'white',
						marginTop: '50px',
						padding: '10px',
					}}>
					MOVIE NIGHTS
				</h3>
			</div>
			<Container fluid>
				<Row>
					<Col lg={6}>
						<p
							className='movieText'
							style={{
								fontWeight: '300',
								margin: '30px 0 40px 10px',
							}}>
							Ready for a night at the movies? Enjoy a premiere showing of your
							favorite Rom-Com, thriller, or whatever the kids get to choose in
							the convenience and comfort of your own backyard. You’ll step out
							into a theater under the stars, designed for you to have the best
							seats available - wherever you’d like them set up! Our Premier
							Package for Backyard Movie Night includes a 90” screen, projector
							and two high quality speakers. It will be set up by our first-rate
							WOW! Events Host for up to three hours of viewing fun. Reward your
							family, celebrate a birthday, or offer a screening of your best
							friend’s favorite movie in an award-winning experience on location
							at your own home Spoiler alert! You’ll want to experience this
							service again and again. If you are the type that prefers all the
							“Bells & Whistles” of a VIP Movie Experience then you should
							surprise your family and friends with Our Blockbuster Package for
							Backyard Movie Night. You’ll be ushered into a theater of your own
							design, complete with all the VIP amenities of your favorite
							showplace. Special effects for your Blockbuster package include
							exclusive seating, pillows, blankets, a Sweet & Savory Treats
							Buffet and much more. You’ll be on the edge of your seat as your
							special movie event comes to life in your very own backyard.
							Whatever movie you choose, we guarantee an experience rated E for
							EXTRAORDINARY and W for WOW! Contact us NOW to design your
							scene-stealing event!
						</p>
					</Col>
					<Col
						lg={6}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Row
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							<Image
								fluid
								src={treats}
								style={{
									width: '81%',
									margin: '5px',
								}}
							/>
						</Row>
						<Row
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							<Image
								fluid
								src={sign}
								style={{
									width: '40%',
									margin: '5px',
								}}
							/>

							<Image
								fluid
								src={table}
								style={{
									width: '40%',
									margin: '5px',
								}}
							/>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container className='videoContainer'
				style={{
					width: '50%',
				}}>
				<div
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: '2em',
					}}>
					<MovieVideo />
				</div>
			</Container>

			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
				<h4
					style={{
						display: 'inline',
						fontWeight: '300',
						background: '#f7901e',
						color: 'white',
						padding: '10px',
						marginTop: '100px',
					}}>
					PACKAGES
				</h4>
			</div>
			<Container
				fluid
				style={{
					color: '#727272',
				}}>
				<Row>
					<Col lg={6} md={6} sm={12} className='moviePackages'>
						<p>Premier Movie Night Package $225.00 +++</p>
						<PremierMovieModal />
					</Col>
					<Col lg={6} md={6} sm={12} className='moviePackages'>
						<p>Blockbuster Movie Night Package $325.00 +++</p>
						<BlockBusterModal />
					</Col>
				</Row>
			</Container>
			<Container
				fluid
				style={{
					color: '#727272',
				}}>
				<Row>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Simply Savvy PUP Package + Premier Movie Night Package $385.00 +++
						</p>
						<SimplyWithPremier />
					</Col>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Simply Savvy PUP Package + Blockbuster Movie Night Package $485.00
							+++
						</p>

						<SimplyWithBlockbuster />
					</Col>
				</Row>
				<Row>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Bells & Whistles PUP Package + Premier Movie Night Package $485.00
							+++
						</p>

						<BellsWithPremier />
					</Col>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Bells & Whistles PUP Package + Blockbuster Movie Night Package
							$585.00 +++
						</p>

						<BellsWithBlockbuster />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						margin: '2em 0',
					}}>
					<p
						style={{
							fontFamily: 'Montserrat',
							fontWeight: '500',
							color: '#727272',
							width: '100%',
						}}>
						20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
						Pricing
					</p>
				</Row>
			</Container>
			<BackYardBooking />
		</div>
	);
}

export default Backyard;
