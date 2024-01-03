import { React, useState } from 'react';

function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='premier_movie_modal'>
			<button
				size='sm'
				className='btn btn-primary custom-btn'
				onClick={handleShow}>
				Whats Included
			</button>
			<div show={show} onHide={handleClose} backdrop='static' keyboard={false}>
				<div closeButton>
					<h5>What's Included</h5>
				</div>
				<div>
					<ul>
						<li>Three Hour Movie Night</li>
						<li>2 x 12” Speakers with Bluetooth System </li>
						<li>MP3/USB/SD/FM Radio/AUX/INPUT.</li>{' '}
						<li>Wired 1 x 90” Movie Screen with Stand </li>
						<li>1 x Outdoor Movie Projector</li>{' '}
						<li>1 x Rolling Cart for Projector</li>
					</ul>
				</div>
				<div>
					<button
						size='sm'
						className='btn btn-primary custom-btn'
						onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default Example;
