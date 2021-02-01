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
					lg={5}
					style={{
						margin: '50px',
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
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
						<Image
							src={wowlogo}
							alt='wowLogo'
							style={{
								flex: '1',
								width: '50%',
							}}
						/>
						<p>419 Main St Suite 433 Huntington Beach, CA 92648</p>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Contact;
