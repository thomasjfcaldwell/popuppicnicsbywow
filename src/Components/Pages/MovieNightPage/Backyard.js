import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import table from '/Users/thomascaldwell/wow/popuppicnics/src/Images/MovieNight/movienightTable.jpg';
import sign from '/Users/thomascaldwell/wow/popuppicnics/src/Images/MovieNight/movienightsign.jpg';
import treats from '/Users/thomascaldwell/wow/popuppicnics/src/Images/MovieNight/movienightTreats.jpg';
import BackYardBooking from './BackYardBooking';
import PremierMovieModal from '../../Modals/PremierMovieModal';
import BlockBusterModal from '../../Modals/BlockBusterMovieModal';
import SimplyWithPremier from '../../Modals/SimplyWithPremier';
import SimplyWithBlockbuster from '../../Modals/SimplyWithBlockbuster';
import BellsWithPremier from '../../Modals/BellsWithPremier';
import BellsWithBlockbuster from '../../Modals/BellsWithBlockbuster';
import BasicWithPremier from '../../Modals/BasicWithPremier';
import BasicWithBlockBuster from '../../Modals/BasicWithBlockBuster';
import MovieVideo from './MovieVideo';
import '/Users/thomascaldwell/wow/popuppicnics/src/App.css';

function Backyard() {
	return (
		<div>
			<div
				style={{
					margin: '2em',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
				<h3
					style={{
						// display: 'inline',
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
				<Row
					style={{
						justifyItems: 'center',
					}}>
					<Col lg={6}>
						<p
							className='movieText'
							style={{
								fontWeight: '300',
								width: '100%',
								margin: '60px 0 40px 10px',
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
								fluid='true'
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
								fluid='true'
								src={sign}
								style={{
									width: '40%',
									margin: '5px',
								}}
							/>

							<Image
								fluid='true'
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
			<Container
				fluid
				className='videoContainer'
				style={{
					width: '50%',
				}}>
				<div
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: '2em',
					}}>
					<MovieVideo fluid />
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
						<p>Premier Movie Night Package $250.00 +++</p>
						<PremierMovieModal />
					</Col>
					<Col lg={6} md={6} sm={12} className='moviePackages'>
						<p>Blockbuster Movie Night Package $475.00 +++</p>
						<BlockBusterModal />
					</Col>
				</Row>
				<Row>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Basic Beauty PUP Package + Premier Movie Night Package $400.00 +++
						</p>
						<BasicWithPremier />
					</Col>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Basic Beauty PUP Package + Blockbuster Movie Night Package $625.00
							+++
						</p>

						<BasicWithBlockBuster />
					</Col>
				</Row>

				<Row>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Simply Savvy PUP Package + Premier Movie Night Package $430.00 +++
						</p>
						<SimplyWithPremier />
					</Col>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Simply Savvy PUP Package + Blockbuster Movie Night Package $655.00
							+++
						</p>

						<SimplyWithBlockbuster />
					</Col>
				</Row>
				<Row>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Bells & Whistles PUP Package + Premier Movie Night Package $530.00
							+++
						</p>

						<BellsWithPremier />
					</Col>
					<Col lg={6} md={4} sm={6} className='moviePackages'>
						<p>
							Bells & Whistles PUP Package + Blockbuster Movie Night Package
							$755.00 +++
						</p>

						<BellsWithBlockbuster />
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row
					style={{
						margin: '50px 0px',
					}}>
					<Col
						lg={4}
						sm={12}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyItems: 'center',
						}}>
						<h5
							style={{
								display: 'inline',
								fontWeight: '300',
								background: '#f7901e',
								color: 'white',
								padding: '2px',
								textAlign: 'center',
							}}>
							ADD ONS
						</h5>
						<div
							className='m-3'
							style={{
								fontSize: '0.8em',
							}}>
							<p>
								There will be a $30 charge for each Additional Guest over the 4
								Included
							</p>
							<p>
								Upgrade from Soda Beverage Package to Flavored Sparkling &
								Flat-Water Beverage Package for 2 = $5
							</p>
							<p>Additional Beverages for One guest= $5 (sodas)</p>
							<p>Additional Beverages for One guest= $7 (Waters)</p>
						</div>
					</Col>
					<Col
						lg={4}
						sm={12}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyItems: 'center',
						}}>
						<h5
							style={{
								fontWeight: '300',
								background: '#f7901e',
								color: 'white',
								padding: '2px',
								textAlign: 'center',
							}}>
							OTHER FEES
						</h5>
						<div
							className='m-3'
							style={{
								fontSize: '0.8em',
							}}>
							<p>Delivery Fee (up to 15 miles round trip from HB pier)= $50</p>
							<p>
								Travel Fee (over 15 miles round trip from HB Pier)= $1 per mile
							</p>
							<p>Additional Hour for Movie Night= $100</p>
						</div>
					</Col>
					<Col
						lg={4}
						sm={12}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyItems: 'center',
						}}>
						<h5
							style={{
								display: 'inline',
								fontWeight: '300',
								background: '#f7901e',
								color: 'white',
								padding: '2px',
								textAlign: 'center',
								margin: '0 50px',
								textTransform: 'uppercase',
							}}>
							Minimums and Service Fees
						</h5>
						<div
							className='m-3'
							style={{
								fontSize: '0.8em',
							}}>
							<p>
								$500 Minimum Required for Saturdays & Sundays in April through
								September
							</p>
							<p>
								$1000 Minimum Required for US & Other Holiday Weekends (prior to
								service fee & tax)
							</p>
							<p>
								Additional 10% added to Service Fee For Bookings Under the 7 Day
								Minimum
							</p>
						</div>
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
