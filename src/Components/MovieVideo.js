import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

class MovieVideo extends Component {
	render() {
		return (
			<div className='video-wrapper'>
				<ReactPlayer
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
