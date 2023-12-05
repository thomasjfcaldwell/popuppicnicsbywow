import React, { Component } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';

import { BsFillEnvelopeFill } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default class TopComponent extends Component {
	render() {
		return (
			<>
				<Container gap={3} fluid>
					<Row>
						<Card className='contact_card'>
							<Card.Title>
								<FaPhone size={10} />
								<a href='tel:714.848.9698'>714.848.9698</a>
							</Card.Title>
						</Card>
						<Card className='contact_card'>
							<Card.Title>
								<BsFillEnvelopeFill size={10} />
								<a href='mailto:hello@wowevents.com'>hello@wowevents.com</a>
							</Card.Title>
						</Card>
						<Card className='contact_card'>
							<Card.Title>
								<a href='https://www.facebook.com/popuppicnicsbywow'>
									{' '}
									<FaFacebook size={25} />
								</a>
							</Card.Title>
						</Card>
						<Card className='contact_card'>
							<Card.Title>
								<a href='https://www.instagram.com/popuppicnicsbywow/'>
									<FaInstagram size={25} />
								</a>
							</Card.Title>
						</Card>
						<Card className='contact_card'>
							<Card.Title>
								<a href='https://twitter.com/WowPopUpPicnics'>
									<FaTwitter size={25} />
								</a>
							</Card.Title>
						</Card>
					</Row>
				</Container>
			</>
		);
	}
}
