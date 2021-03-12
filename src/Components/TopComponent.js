import React, { Component } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Row, Col, Container } from 'react-bootstrap';

export default class TopComponent extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<Row
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							margin: '10px',
							alignContent: 'center',
						}}>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<FaPhone />

							<a className='topText' href='tel:714.848.9698'>
								714.848.9698
							</a>
						</Col>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<BsFillEnvelopeFill />

							<a className='topText' href='mailto:hello@wowevents.com'>
								hello@wowevents.com
							</a>
						</Col>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<div
								style={{
									margin: '0 5px',
								}}>
								<a href='https://www.facebook.com/popuppicnicsbywow'>
									{' '}
									<FaFacebook />
								</a>
							</div>
							<div
								style={{
									margin: '0 5px',
								}}>
								<a href='https://www.instagram.com/popuppicnicsbywow/'>
									<FaInstagram />
								</a>
							</div>
							<div
								style={{
									margin: '0 5px',
								}}>
								<a href='https://twitter.com/WowPopUpPicnics'>
									<FaTwitter />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
