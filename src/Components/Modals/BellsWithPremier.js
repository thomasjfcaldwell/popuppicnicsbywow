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
				scrollable={true}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>What's Included</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ul>
						Bells & Whistles Picnic Package: <li>Two Hour POP-UP Picnic </li>{' '}
						<li>Personalized Welcome Sign</li>
						<li>Hand Crafted Wooden table</li>
						<li>Seat Pillow For Everyone</li>{' '}
						<li>Flatware/Plates/White Cloth Napkins</li>{' '}
						<li>Metal Goblets Table</li>
						<li>Décor Blanket or Rug (floor covering)</li>{' '}
						<li>8X8 Cheese Charcuterie Box</li> <li>Beverage Package for 2</li>
						<li>Bluetooth Speaker</li>
						<li>Decorative Umbrella or Styled Teepee Corner</li>{' '}
						<li>Side Table or Storage Area Perimeter Decor</li>
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
