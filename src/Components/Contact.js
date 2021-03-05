import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';

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
			<Container>
				<Row>
					<Col
						lg={12}
						style={{
							margin: '10px',
						}}>
						<div className='App' ref={(el) => (this.div = el)}>
							<div id='ff-compose'></div>
							<script
								async
								defer
								src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLScj4ukKgFyRHGmluWBoJnVHSan1sGfk_Cc26ZyfUl1uceHYsA/classic.js?div=ff-compose'></script>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Contact;
