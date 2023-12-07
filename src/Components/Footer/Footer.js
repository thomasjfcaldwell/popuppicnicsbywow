import React, { Component } from 'react';
import { Row, Col, Image, Container, Card } from 'react-bootstrap';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';

class Footer extends Component {
	render() {
		return (
			<Container as='div' className='footer' fluid>
				<Row>
					<Col lg={6} sm={12} className='d-flex justify-content-center'>
						<Image src={wowlogo} className='w-50' />
					</Col>
					<Col lg={6} sm={12}>
						<Card.Text className='address'>
							419 Main St Suite 433 Huntington Beach, CA 92648
						</Card.Text>
						<Card.Link href='tel:714.848.9698'>714.848.9698</Card.Link>
						<Card.Link href='mailto:hello@wowevents.com'>
							hello@wowevents.com
						</Card.Link>
					</Col>
					<Col lg={6} sm={12}>
						<Card.Link className='linkforpage' href='/'>
							Home
						</Card.Link>
						<Card.Link className='linkforpage' href='/packages'>
							Pop Up Picnics
						</Card.Link>
						<Card.Link className='linkforpage' href='/backyardmovies'>
							Movie Night
						</Card.Link>
						<Card.Link className='linkforpage' href='/charcuterie'>
							Charcuterie Services
						</Card.Link>
					</Col>
				</Row>
				<Container>© 2021 Copyright Wow! Events</Container>
			</Container>
		);
	}
}

export default Footer;
