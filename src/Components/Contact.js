import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class Contact extends Component {
	componentDidMount() {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://formfacade.com/include/106160970742721697585/form/1FAIpQLScj4ukKgFyRHGmluWBoJnVHSan1sGfk_Cc26ZyfUl1uceHYsA/classic.js?div=ff-compose';
		this.div.appendChild(script);
	}
	render() {
		return (
			<Row>
				<Col
					sm={12}
					lg={6}
					style={{
						padding: '1.5em',
					}}>
					<div className='App' ref={(el) => (this.div = el)}>
						<div id='ff-compose'></div>
						<script
							async
							defer
							src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLScj4ukKgFyRHGmluWBoJnVHSan1sGfk_Cc26ZyfUl1uceHYsA/classic.js?div=ff-compose'></script>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<Row>
						<div
							style={{
								margin: 'auto',
								width: '100%',
								marginTop: '2em',
							}}>
							<img
								fluid
								src={wowlogo}
								alt='wowlogo'
								style={{
									width: '40%',
									margin: 'auto',
									display: 'block',
								}}
							/>
						</div>
					</Row>
					<Row>
						<div
							style={{
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								marginTop: '1em',
							}}>
							<p
								style={{
									marginTop: '-10px',
								}}>
								419 Main St Suite
							</p>{' '}
							<p
								style={{
									marginTop: '-10px',
								}}>
								{' '}
								433 Huntington Beach
							</p>
							<p
								style={{
									marginTop: '-10px',
								}}>
								CA 92648
							</p>
						</div>
					</Row>
					<Row>
						<div
							style={{
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								marginTop: '1em',
							}}>
							<p className='d-inline'>
								<span className='font-weight-bold'> Telephone-</span>(714)8489698{' '}
								<span className='font-weight-bold'> Email-</span>
								hello@wowevents.com
							</p>
						</div>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default Contact;
