import React, { Component } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';

class Footer extends Component {
	render() {
		return (
			<div>
				<Container fluid className='footerContainer'>
					<Row>
						<Col
							lg={6}
							sm={12}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							<Image
								src={wowlogo}
								style={{
									width: '25%',
								}}
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									margin: '10px',
								}}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<address className='address'>
										419 Main St Suite 433 Huntington Beach, CA 92648
									</address>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<a href='tel:714.848.9698'>714.848.9698</a>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<a href='mailto:hello@wowevents.com'>hello@wowevents.com</a>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} className='footerMenu'>
							<a className='linkforpage' href='/'>
								Home
							</a>

							<a className='linkforpage' href='/packages'>
								Pop Up Picnics
							</a>

							<a className='linkforpage' href='/backyardmovies'>
								Movie Night
							</a>

							<a className='linkforpage' href='/charcuterie'>
								Charcuterie Services
							</a>
						</Col>
					</Row>
				</Container>
				<div className='footer-copyright'>
					<Container
						style={{
							textAlign: 'center',
							color: '#F78F1E',
						}}>
						© 2021 Copyright Wow! Events
					</Container>
				</div>
			</div>
		);
	}
}

export default Footer;
