import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	ListGroup,
	Image,
	Navbar,
	Nav,
	NavDropdown,
	Button,
} from 'react-bootstrap';

import groupShot from '../Images/Aboutus/aboutsus.1.jpg';
import southSide from '../Images/Aboutus/aboutsus.2.jpg';
import '../App.css'

class Ourstory extends Component {
	render() {
		return (
			<div
				style={{
					fontFamily: 'Montserrat',
				}}>
				<Row
					className='mt-5'
					style={{
						alignItems: 'center',
					}}>
					<Col sm={12} lg={6} className='justify-content-center '>
						<Card className='border-0 p-3'>
							<Card.Img
								src={groupShot}
								style={{
									margin: '0 auto',
									maxWidth: '35em',
									border: 'solid 0.2em #F78F1E',
									boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
								}}
							/>
						</Card>
						<Card className='border-0 mt-4 p-3'>
							<Card.Img
								src={southSide}
								style={{
									margin: '0 auto',
									maxWidth: '35em',
									border: 'solid 0.2em #F78F1E',
									boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
								}}
							/>
						</Card>
					</Col>
					<Col lg={6} md={12}>
						<Card
							className='border-0 w-75 bg-transparent'
							style={{
								width: '100%',
								margin: '0 auto',
							}}>
							<h1
								className='text-center'
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									margin: '0 auto',
								}}>
								ABOUT US
							</h1>
							<Card.Body
								style={{
									margin: '0 auto',
								}}>
								<Card.Text
									style={{
										fontSize: '1.7em',
										marginTop: '2em',
									}}>
									<strong>
										{' '}
										What happens when you take a group of talented, busy,
										passionate event planners and you introduce them to a world
										wide pandemic…………{' '}
									</strong>
								</Card.Text>
								<Card.Text>
									Well, our group of girls took a deep breath, had a
									brainstorming session about all the ways we could utilize our
									best skills to continue to do what we love……..PLAN EVENTS
									together (just a little more intimate than we were use to)!
								</Card.Text>
								<Card.Text>
									The end result was the launch of POP-UP Picnics by WOW!
									Events, which is a new service offered to anyone in Southern
									California who is looking for a unique outdoor experience with
									their closest friends, family, or colleagues.
								</Card.Text>

								<Card.Text>
									POP-UP Picnics by WOW! Events will provide you with a fun and
									luxurious picnic experience at a beach, park, private
									residence or business. Our WOW! Events team will deliver, set
									up, decorate and clean up. You simply show up, enjoy, and make
									new memories with your favorite people.
								</Card.Text>
								<Card.Text>
									We can accommodate picnics as small as two guests and groups
									of up to thirty. Whether you are looking to have a romantic
									picnic for two for a marriage proposal, milestone birthday, or
									the Best Date Night EVER, POP-UP Picnics by WOW! Events will
									design & create the perfect intimate picnic for you. For
									groups looking to do something “different” for a bridal or
									baby shower, Mother’s Day, birthday or "just because", we got
									you covered as well, and promise to give you and your guests a
									celebration you won’t forget!
								</Card.Text>
								<Card.Text>
									POP-UP Picnics by WOW! Events offers several packages for
									those of you who value convenience which we can also customize
									to include all your favorite things. Thank you in advance for
									hiring us to continue to do what we LOVE…….. Collaborate,
									Design, Plan, and Execute Extraordinary Memories for you and
									your guests.
								</Card.Text>
								<Card.Text>
									Now, let’s book your POP-UP Picnic. Click on the Booking tab
									to book, the Pricing tab for your options, and the FAQ’s tab
									for any and all questions you may have
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Ourstory;
