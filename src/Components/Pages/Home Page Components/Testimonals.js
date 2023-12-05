import React, { Component } from 'react';
import { Row, Card, CardGroup, Container } from 'react-bootstrap';

import birthday from '../../../Images/Testimonals/template.jpg';
import anniversary from '../../../Images/Testimonals/anniversary.jpg';
import proposal from '../../../Images/Testimonals/proposalnewzacpicnic.jpg';

import '../../../App.css';

class Testimonals extends Component {
	render() {
		return (
			<>
				<Container data-aos='fade-in' fluid>
					<Row>
						<CardGroup>
							<Card className='border-0 align-items-center'>
								<Card.Img variant='top' src={birthday} />
								<p className='text-center'>BIRTHDAY PARTY</p>
								<Card.Body>
									<p>
										I was looking for a unique idea for my sister’s bridal
										shower when I stumbled upon WOW! Events Pop-Up Picnics. I
										was so grateful to find an activity where we could all
										celebrate the bride as a family while being socially
										distant. WOW! worked with me to choose the perfect menu and
										ambiance for our event. We settled on a pop-up bridal shower
										at the beach with charcuterie and desert! I really
										appreciated how easy they were to communicate with and the
										attention to detail that they provided on the setup and
										décor. I have been telling all my friends and family about
										WOW! Pop-Up Picnics and I am finding any excuse to do it
										again!
									</p>
								</Card.Body>
							</Card>
							<Card className='border-0 align-items-center'>
								<Card.Img variant='top' src={anniversary} />
								<p className='text-center'>ANNIVERSARY</p>
								<Card.Body>
									<p>
										I wanted to plan something special for our 10-year wedding
										anniversary. I proposed to my wife in a pretty awesome place
										overlooking the ocean, I wanted to take her back there for
										our 10- year anniversary but didn’t want to do it with a
										plain old picnic basket and bottle of champagne. Boring. A
										friend suggested calling WOW! Events to do a Pop-Up Picnic.
										So I did, and they put together an amazing set-up in the
										perfect location. We showed up (my wife thought I was taking
										her there for a quick moment before going to dinner) and
										when we got there she was completely surprised to see a
										pop-up picnic already set up and ready to go. From fancy
										gold goblets to tasty food and even our favorite songs, the
										whole experience was really special. WOW! Events did an
										amazing job and I have happily referred them to my friends
										looking to surprise their spouses!
									</p>
								</Card.Body>
							</Card>
							<Card className='border-0 align-items-center'>
								<Card.Img variant='top' src={proposal} />
								<p>MARRIAGE PROPOSAL</p>
								<Card.Body>
									<p>
										Proposing is stressful enough, doing it during COVID added
										even more pressure! I wanted to do something special,
										original. It needed to be memorable (assuming she said
										YES!). And I’m not the most creative person in the world, so
										I started looking for ideas and came across Pop-Up Picnics
										by WOW! Events. I called them up, explained what I wanted to
										do, they came up with some great ideas and put together an
										amazing Pop-Up Picnic for my very surprised, and very happy
										(she said YES!) fiancée. WOW! did a great job handling
										everything (including my stress!), in fact I should call
										them to see what they can do for our wedding!
									</p>
								</Card.Body>
							</Card>
						</CardGroup>
					</Row>
				</Container>
			</>
		);
	}
}

export default Testimonals;
