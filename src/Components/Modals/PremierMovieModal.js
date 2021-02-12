import { Modal } from 'react-bootstrap';
import { React, useState } from 'react';

import { Button } from 'react-bootstrap';


function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className='btn btn-primary custom-btn' onClick={handleShow}>
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
				<Modal.Body>
					<ul>
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
