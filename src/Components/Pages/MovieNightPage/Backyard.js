import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import table from '../../../Images/MovieNight/movienightTable.jpg';
import sign from '../../../Images/MovieNight/movienightsign.jpg';
import treats from '../../../Images/MovieNight/movienightTreats.jpg';
import PremierMovieModal from '../../Modals/PremierMovieModal';
import BlockBusterModal from '../../Modals/BlockBusterMovieModal';
import SimplyWithPremier from '../../Modals/SimplyWithPremier';
import SimplyWithBlockbuster from '../../Modals/SimplyWithBlockbuster';
import BellsWithPremier from '../../Modals/BellsWithPremier';
import BellsWithBlockbuster from '../../Modals/BellsWithBlockbuster';
import BasicWithPremier from '../../Modals/BasicWithPremier';
import BasicWithBlockBuster from '../../Modals/BasicWithBlockBuster';
import '../../../App.css';

function Backyard() {
	return (
		<div>
			<div>
				<h3>MOVIE NIGHTS</h3>
			</div>
			<Container fluid>
				<Row>
					<Col lg={6}>
						<p className='movieText'>
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
					<Col lg={6}>
						<Row>
							<Image fluid='true' src={treats} />
						</Row>
						<Row>
							<Image fluid='true' src={sign} />
							<Image fluid='true' src={table} />
						</Row>
					</Col>
				</Row>
			</Container>
			<Container fluid className='videoContainer'></Container>
			<div>
				<h4>PACKAGES</h4>
			</div>
			<Container fluid>
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
				<Row>
					<Col lg={4} sm={12}>
						<h5>ADD ONS</h5>
						<div>
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
					<Col lg={4} sm={12}>
						<h5>OTHER FEES</h5>
						<div>
							<p>Delivery Fee (up to 15 miles round trip from HB pier)= $50</p>
							<p>
								Travel Fee (over 15 miles round trip from HB Pier)= $1 per mile
							</p>
							<p>Additional Hour for Movie Night= $100</p>
						</div>
					</Col>
					<Col lg={4} sm={12}>
						<h5>Minimums and Service Fees</h5>
						<div>
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
				<Row>
					<p>
						20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
						Pricing
					</p>
				</Row>
			</Container>
		</div>
	);
}

export default Backyard;
