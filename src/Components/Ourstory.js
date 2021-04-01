import React, { useEffect } from 'react';
import { Col, Card, Image, Container, Row } from 'react-bootstrap';

import groupShot from '../Images/Aboutus/aboutsus.2.jpg';
import melTiff from '../Images/Aboutus/aboutusMel.Tiff.jpg';
import '../App.css';
import '../styles/locations.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Ourstory = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);
	return (
		<div>
			<Container fluid>
				<Row>
					<Col data-aos='flip-right' lg={6} md={12} sm={12}>
						<div className='locationsHeader'>
							<h5
								style={{
									marginTop: '1em',
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									background: '#727272',
									color: 'white',
									padding: '0.4em',
								}}>
								ABOUT US
							</h5>
						</div>
						<div
							style={{
								fontSize: '0.9em',
								color: '#727272',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								fontFamily: 'Montserrat',
								textAlign: 'center',
							}}>
							<Card.Text>
								{' '}
								What happens when you take a group of talented, busy, passionate
								event planners and you introduce them to a world wide
								pandemic…………{' '}
							</Card.Text>
							<Card.Text>
								Well, our group of girls took a deep breath, had a brainstorming
								session about all the ways we could utilize our best skills to
								continue to do what we love……..PLAN EVENTS together (just a
								little more intimate than we were used to)!
							</Card.Text>
							<Card.Text>
								The end result was the launch of POP-UP Picnics by WOW! Events,
								which is a new service offered to anyone in Southern California
								who is looking for a unique outdoor experience with their
								closest friends, family, or colleagues.
							</Card.Text>

							<Card.Text>
								POP-UP Picnics by WOW! Events will provide you with a fun and
								luxurious picnic experience at a beach, park, private residence
								or business. Our WOW! Events team will deliver, set up, decorate
								and clean up. You simply show up, enjoy, and make new memories
								with your favorite people.
							</Card.Text>
							<Card.Text>
								We can accommodate picnics as small as two guests and groups of
								up to fifty. Whether you are looking to have a romantic picnic
								for two for a marriage proposal, milestone birthday, or the Best
								Date Night EVER, POP-UP Picnics by WOW! Events will design &
								create the perfect intimate picnic for you. For groups looking
								to do something “different” for a bridal or baby shower,
								Mother’s Day, birthday or "just because", we got you covered as
								well, and promise to give you and your guests a celebration you
								won’t forget!
							</Card.Text>
							<Card.Text>
								POP-UP Picnics by WOW! Events offers several packages for those
								of you who value convenience which we can also customize to
								include all your favorite things. Thank you in advance for
								hiring us to continue to do what we LOVE…….. Collaborate,
								Design, Plan, and Execute Extraordinary Memories for you and
								your guests.
							</Card.Text>
							<Card.Text>
								Now, let’s book your POP-UP Picnic. Click on the Booking tab to
								book, the Pricing tab for your options, and the FAQ’s tab for
								any and all questions you may have
							</Card.Text>
						</div>
					</Col>
					<Col lg={6} xsm={12} fluid>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								
							}}>
							<Image
								src={groupShot}
								fluid
								alt='Picnic at Huntington Beach'
								className='ourStoryImage'
							/>

							<Image
								src={melTiff}
								fluid
								alt='Photo of Melissa Caldwell & Tiffany Brown'
								className='ourStoryImage'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Ourstory;
