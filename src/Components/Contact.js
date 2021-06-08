import React, { Component } from 'react';
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
			<div
				className='App'
				ref={(el) => (this.div = el)}
				style={{
					margin: '50px',
				}}>
				<div id='ff-compose'></div>
				<script
					async
					defer
					src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLScj4ukKgFyRHGmluWBoJnVHSan1sGfk_Cc26ZyfUl1uceHYsA/classic.js?div=ff-compose'></script>
			</div>
		);
	}
	// componentDidMount() {
	// 	const script = document.createElement('script');
	// 	script.async = true;
	// 	script.src =
	// 		'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
	// 	this.div.appendChild(script);
	// }
	// render() {
	// 	return (
	// 		<Container>
	// 			<Row>
	// 				<Col
	// 					lg={12}
	// 					style={{
	// 						margin: '10px',
	// 					}}>
	// 					<div className='App' ref={(el) => (this.div = el)}>
	// 						<div id='ff-compose'></div>
	// 						<iframe
	// 							title='contact'
	// 							src='https://hello.dubsado.com:443/public/form/view/609998075b39ed624985a7a5'
	// 							frameborder='0'
	// 							style={{
	// 								width: '1px',
	// 								minWidth: '100%',
	// 								minHeight: '1000px',
	// 							}}></iframe>
	// 						<script type='text/javascript'>setTimeout(function() 30)</script>
	// 					</div>
	// 				</Col>
	// 			</Row>
	// 		</Container>
	// 	);
	// }
}

export default Contact;
