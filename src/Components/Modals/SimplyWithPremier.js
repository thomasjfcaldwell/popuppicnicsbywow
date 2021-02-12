import { Modal } from 'react-bootstrap';
import { React, useState } from 'react';

import { Button } from 'react-bootstrap';

import '/Users/thomascaldwell/wow/popuppicnics/src/styles/modal.css';

function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				// variant='primary'
				className='btn btn-primary custom-btn'
				onClick={handleShow}>
				Whats Included
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>What's Included</Modal.Title>
				</Modal.Header>
				<Modal.Body scrollable='true'>
					<ul>
						Simply Savvy Picnic Package:
						<li>Two Hour POP-UP Picnic</li>
						<li>Personalized Welcome Sign</li>
						<li>Hand Crafted Wooden table</li> <li>Seat Pillow For Everyone</li>
						<li>Flatware/Plates/White Cloth Napkins</li> <li>Metal Goblets</li>
						<li>Table Décor </li>
						<li>Blanket or Rug (floor covering)</li>
					</ul>
					<ul>
						Premier Movie Package:
						<li>Three Hour Movie Night</li>
						<li>2 x 12” Speakers with Bluetooth System </li>
						<li>MP3/USB/SD/FM Radio/AUX/INPUT.</li>{' '}
						<li>Wired 1 x 90” Movie Screen with Stand </li>
						<li>1 x Outdoor Movie Projector</li>{' '}
						<li>1 x Rolling Cart for Projector</li>
					</ul>
				</Modal.Body>
				<Modal.Footer>
					<Button className='button' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
