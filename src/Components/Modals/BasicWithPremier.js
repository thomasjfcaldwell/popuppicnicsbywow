import { Modal } from 'react-bootstrap';
import { React, useState } from 'react';

import { Button } from 'react-bootstrap';

function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				size='sm'
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
					<ul className='nobullets'>
						<li>1 ½ Hour POP-UP Picnic for 2 People</li>{' '}
						<li>Personalized Letterboard Sign</li>
						<li>Small Hand Crafted Wood Table</li> <li>Tapestry blanket</li>{' '}
						<li>Pillow Seating</li>{' '}
						<li>Flatware, Plates/White Cloth Napkins Gold Metal Goblets</li>{' '}
						<li>Table Decor</li> <li>(2) Wood Crate Side Tables</li>
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
					<Button
						size='sm'
						className='btn btn-primary custom-btn'
						onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
