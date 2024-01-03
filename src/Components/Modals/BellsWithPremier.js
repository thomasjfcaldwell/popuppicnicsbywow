import { React, useState } from 'react';

function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='bell_with_premier'>
			<button size='sm' onClick={handleShow}>
				Whats Included
			</button>

			<div
				show={show}
				scrollable={true}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<div closeButton>
					<h5>What's Included</h5>
				</div>
				<div>
					<ul>
						Bells & Whistles Picnic Package: <li>Two Hour POP-UP Picnic </li>{' '}
						<li>Personalized Welcome Sign</li>
						<li>Hand Crafted Wooden table</li>
						<li>Seat Pillow For Everyone</li>{' '}
						<li>Flatware/Plates/White Cloth Napkins</li>{' '}
						<li>Metal Goblets Table</li>
						<li>Décor Blanket or Rug (floor covering)</li>{' '}
						<li>Beverage Package for 2</li>
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
				</div>
				<div>
					<button size='sm' onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default Example;
