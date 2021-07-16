import React, { Component } from 'react';

class BookingForm extends Component {
	componentDidMount() {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://formfacade.com/include/106160970742721697585/form/1FAIpQLSfkKe85AGMVE-Vr_8YGS8efGYtL7436deEehoYvYsSC3fDKSg/classic.js?div=ff-compose';
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
					src='https://formfacade.com/include/106160970742721697585/form/1FAIpQLSfkKe85AGMVE-Vr_8YGS8efGYtL7436deEehoYvYsSC3fDKSg/classic.js?div=ff-compose'></script>
			</div>
		);
	}
}

export default BookingForm;
