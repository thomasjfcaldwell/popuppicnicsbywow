import React, { Component } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Row, Col, Container } from 'react-bootstrap';

export default class TopComponent extends Component {
	render() {
		return (
			<>
				<Container fluid>
					<Row>
						<Col lg={4} sm={4}>
							<FaPhone size={20} />
							<a className='topText' href='tel:714.848.9698'>
								714.848.9698
							</a>
						</Col>
						<Col lg={4} sm={4}>
							<BsFillEnvelopeFill size={20} />
							<a className='topText' href='mailto:hello@wowevents.com'>
								hello@wowevents.com
							</a>
						</Col>
						<Col lg={4} sm={4}>
							<div>
								<a href='https://www.facebook.com/popuppicnicsbywow'>
									{' '}
									<FaFacebook size={25} />
								</a>
							</div>
							<div>
								<a href='https://www.instagram.com/popuppicnicsbywow/'>
									<FaInstagram size={25} />
								</a>
							</div>
							<div>
								<a href='https://twitter.com/WowPopUpPicnics'>
									<FaTwitter size={25} />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
