import { Modal } from 'react-bootstrap';
import { React, useState } from 'react';

import { Button } from 'react-bootstrap';

import '/Users/thomascaldwell/wow/popuppicnics/src/App.css';
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
				animation={true}
				show={show}
				onHide={handleClose}
				backdrop='static'
				scrollable={true}
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>What's Included</Modal.Title>
				</Modal.Header>
				<Modal.Body scrollable={true}>
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
						Blockbuster Movie Package:
						<li>Three Hour Movie Night for Up to Four Guests</li>{' '}
						<li>2 x 12” Speakers with Bluetooth System</li>{' '}
						<li>MP3/USB/SD/FM Radio/AUX/INPUT. Wired</li>{' '}
						<li>(1) Remote Control for Speakers</li>{' '}
						<li>(1) 90” Movie Screen with Stand</li>{' '}
						<li>(1) Outdoor Movie Projector</li>
						<li>Rolling Cart for Projector</li>{' '}
						<li>One Blanket/Rug (Floor Covering)</li>
						<li>Four Plastic Adirondack Chairs Four Pillows</li>{' '}
						<li>(2) 18x18 pillows & (2) 20x20 pillows</li>{' '}
						<li>(1) Cozy Blanket Basket with 4 Throws</li>{' '}
						<li>
							(2) Wood Crate Tables Table for Movie Night Sweet & Savory Treat
							Buffet Table Top Chalkboard Sign for Sweet & Savory Buffet Table
							OR Customized Letterboard Sweet & Savory Treats to Include:
						</li>
						<ul>
							<li>(1) Large Bowl/Bucket of Popcorn with Scoop</li>
							<li>(4) Jars of Assorted Popcorn Seasoning</li>{' '}
							<li>(1) Bucket of Party Mix</li> <li>(1) Bucket of Pretzels</li>
							<li>
								(2) Buckets of a Variety of Fruit Candies (sour patchkids,
								skittles, nerds, swedish fish, hairbo, twizzlers, sweet tarts &
								starburst)
							</li>
							<li>
								(2) Buckets of a Variety of Chocolate Candies (snickers, twix,
								reese’s, butterfinger, baby ruth & milky way)
							</li>
							<li>
								(1) Beverage Package with (2) Cokes, (2) Diet Cokes & (2)
								Sprites
							</li>
							<li>
								Galvanized Steel Beverage Bucket with Ice Bags for Popcorn &
								Sweet & Savory Treats
							</li>
							<li>Cocktail Size Napkins</li> <li>Small Trash Can</li>
						</ul>
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
