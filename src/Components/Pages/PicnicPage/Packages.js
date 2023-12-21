import React from 'react';
import Addon from './Addon';
import Footer from './Footer';
import PicnicFQA from '../../Modals/PicnicFQA';
import BandWPackage from '../../../Images/Packages/bellsandwhistles.jpg';
import simplySavvy from '../../../Images/Packages/simplysavvy.jpg';
import Themes from './Themes';
import BasicBeauty from '../../../Images/Packages/basicBeauty.jpg';

export default function Packages() {
	return (
		<div>
			<div>
				<h5>STEP 1: SELECT A PICNIC PACKAGE</h5>
			</div>
			<div>
				<p>BASIC BEAUTY PACKAGE $155+++</p>
				<img src={BasicBeauty} alt='Basic Beauty package images' />
				<ul>
					<li>
						1 ½ Hour POP-UP Picnic for <span>2 Guests maximum</span>
					</li>{' '}
					<li>Personalized Letter board</li>
					<li>Small Hand Crafted Wood Table(approx 16x16in)</li>{' '}
					<li>Tapestry blanket (floor covering) </li>
					<li>Pillow Seating for Guests </li>
					<li>Flatware, small Plates/Cloth Napkins</li>
					<li>Gold Metal Goblets</li>
					<li>Tapestry Blanket/Floor covering</li>
				</ul>
			</div>
			<div>
				<p>SIMPLY SAVVY PACKAGE $195+++</p>
				<img src={simplySavvy} alt='simply Savvy package images' />

				<ul>
					<li>Two Hour POP-UP Picnic for 2 Guests</li>{' '}
					<li>Sign Hand Crafted Wood Picnic Table</li>{' '}
					<li>Pillow Seating for Guests</li>
					<li>Flatware/Plates/Cloth Napkins</li>
					<li>Metal Goblets</li> <li>Table Décor</li>
					<li>Rug/floor covering</li>
				</ul>
			</div>

			<div>
				<p>THE BELLS & WHISTLES PACKAGE $295+++</p>
				<img
					src={BandWPackage}
					className='packagesImage'
					alt='Bells & Whistles Package'
				/>
				<ul>
					<li>Two Hour POP-UP Picnic for 2 Guests</li>{' '}
					<li>Personalized Letter Board Sign</li>
					<li>Hand Crafted Wood Picnic Table</li>{' '}
					<li>Pillow Seating for Guests</li>
					<li>Flatware/Plates/Cloth Napkins</li>
					<li>Metal Goblets</li> <li>Table Décor </li>
					<li>Rug/floor covering </li>
					<li>
						Beverage Package for 2 Guests{' '}
						<span>
							(2 Sparking flavored Perrier, 2 Fiji water, Ice & Ice bucket)
						</span>
					</li>{' '}
					<li>Bluetooth Speaker for Music </li>
					<li>Choice of Posh Umbrella with Tassels or Teepee Set-Up</li>
					<li>Small Hand Crafted Wood side Table</li>
					<li>Floor & Perimeter Décor</li>
				</ul>
			</div>
			<p>Lower your per person price by inviting more guests</p>
			<p>
				Location Fee, 20% Service Fee and Sales tax will be added to Pricing
			</p>
			<Themes />
			<Footer />
			<Addon />
			<PicnicFQA />
			<div>
				<h5>STEP 5: BOOK YOUR PICNIC HERE</h5>
			</div>
		</div>
	);
}
