import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CharcuterieBookingForm extends Component {
	componentDidMount() {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://formfacade.com/include/106160970742721697585/form/1FAIpQLSdgMKkrXtjOAMB1zHWoHO2F6BLIjQofYSrj_eLMVrgYMQnkdw/classic.js?div=ff-compose';
		this.div.appendChild(script);
	}
	render() {
		return (
			<div
				className='App'
				ref={(el) => (this.div = el)}
				style={{
					padding: '10px',
				}}>
				<div id='ff-compose'></div>
				<script
					async
					defer
					src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLSdgMKkrXtjOAMB1zHWoHO2F6BLIjQofYSrj_eLMVrgYMQnkdw/classic.js?div=ff-compose'></script>
			</div>
		);
	}
}

export default CharcuterieBookingForm;
