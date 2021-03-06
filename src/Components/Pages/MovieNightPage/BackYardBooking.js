import React, { Component } from 'react';

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
				sm={12}
				style={{
					padding: '10px',
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
