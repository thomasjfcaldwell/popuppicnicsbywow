import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import movieNight from '../Images/MovieNight/Movienightsetup.forweb.jpg';
import blockBuster from '../Images/MovieNight/Blockbuster Package for Movie Night (movieredo38).jpg';
import premier from '../Images/MovieNight/Premier Package for Movie Night (movieredo38).jpg';
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

function Backyard() {
	return (
		<div className='body'>
			<Row className='m-5'>
				<Col lg={6} sm={12}>
					<Image
						src={blockBuster}
						alt='movieNightImage'
						style={{
							width: '100%',
						}}
					/>
				</Col>
				<Col className='text-center' lg={6} sm={12}>
					<h1
						style={{
							marginTop: '1em',
							fontFamily: 'Montserrat',
							fontWeight: '500',
							background: '#727272',
							color: 'white',
							padding: '8px',
						}}>
						Backyard Movies
					</h1>
					<p
						style={{
							fontSize: '0.8em',
							padding: '40px',
							fontWeight: '300',
							lineHeight: '1.8em',
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
						exclusive seating, pillows, blankets, a Sweet & Savory Treats Buffet
						and much more. You’ll be on the edge of your seat as your special
						movie event comes to life in your very own backyard. Whatever movie
						you choose, we guarantee an experience rated E for EXTRAORDINARY and
						W for WOW! Contact us NOW to design your scene-stealing event!
					</p>
				</Col>
			</Row>
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					margin: '40px',
				}}>
				<h4
					style={{
						display: 'inline',
						fontWeight: '300',
						lineHeight: '1.2em',
						background: '#f7901e',
						color: 'white',
						padding: '10px',
						marginTop: '100px',
					}}>
					PACKAGES
				</h4>
			</div>
			<Row className='m-1 w-100'>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1 border-1'>
					<p>Blockbuster Package</p>
					<BlockBusterModal />
				</Col>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1'>
					<p>Premier Package</p>
					<PremierMovieModal />
				</Col>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1'>
					<p>Simply Savvy Picnic Package + Premier Package</p>
					<SimplyWithPremier />
				</Col>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1'>
					<p>Simply Savvy Picnic Package + Blockbuster Package</p>

					<SimplyWithBlockbuster />
				</Col>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1'>
					<p>Bells & Whistles Picnic Package + Premier Package</p>

					<BellsWithPremier />
				</Col>
				<Col lg={4} md={4} sm={6} className='text-center w-100 p-1'>
					<p>Bells & Whistles Picnic Package + Blockbuster Package</p>

					<BellsWithBlockbuster />
				</Col>
			</Row>

			<Row className='m-5'>
				<Col lg={4} sm={12}>
					<Image
						fluid
						src={treats}
						style={{
							width: '100%',
							padding: '5px',
						}}
					/>
				</Col>
				<Col lg={4} sm={6}>
					<Image
						fluid
						src={sign}
						style={{
							width: '100%',
							padding: '5px',
						}}
					/>
				</Col>
				<Col lg={4} sm={6}>
					<Image
						fluid
						src={table}
						style={{
							width: '100%',
							padding: '5px',
						}}
					/>
				</Col>
			</Row>
			<BackYardBooking />
		</div>
	);
}

export default Backyard;
