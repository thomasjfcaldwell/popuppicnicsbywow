import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../../App.css';

class MovieVideo extends Component {
	render() {
		return (
			<div className='embed-responsive embed-responsive-1by1'>
				<ReactPlayer
					style={{
						maxHeight: '2em',
					}}
					fluid
					url='https://youtu.be/eKzIcJ-DUkQ'
					className='react-player'
					// playing
					controls={false}
				/>
			</div>
		);
	}
}

export default MovieVideo;
