import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BackYardBooking extends Component {
	componentDidMount() {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://formfacade.com/include/106160970742721697585/form/1FAIpQLSdAg2sqHt91EySEBVLrxr-Qf4zdai-dDmqVo0Lmaa_kLPXXsg/classic.js?div=ff-compose';
		this.div.appendChild(script);
	}
	render() {
		return (
			<div
				className='App'
				ref={(el) => (this.div = el)}
				style={{
					margin: '5em',
				}}>
				<div id='ff-compose'></div>
				<script
					async
					defer
					src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLSdAg2sqHt91EySEBVLrxr-Qf4zdai-dDmqVo0Lmaa_kLPXXsg/classic.js?div=ff-compose'></script>
			</div>
		);
	}
}

export default BackYardBooking;
