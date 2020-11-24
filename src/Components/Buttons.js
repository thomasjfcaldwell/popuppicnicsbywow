import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';


class Buttons extends Component {
	render() {
		return (
			<div className='text-center'>
				<Button
					style={{
						background: '#F78F1E',
						color: '#231F20',
						border: 'none',
						boxShadow: '2px 2px 10px  rgba(0, 0, 0, 0.5)',
					}}>
					Add To Cart
				</Button>
			</div>
		);
	}
}

export default Buttons;
