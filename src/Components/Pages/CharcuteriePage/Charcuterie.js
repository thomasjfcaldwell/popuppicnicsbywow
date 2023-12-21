import React from 'react';
import DeliveryBox from '../../../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../../../Images/Charcuterie/flutes.jpg';
import Dessert from '../../../Images/Packages/dessertBox.jpg';
import Multi from '../../../Images/Packages/veggieBox.jpg';
import cheeseBox from '../../../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../../../Images/Packages/meatChesseBox.jpg';

export default function Charcuterie() {
	return (
		<div>
			<div className='charcuterie' fluid>
				<div>
					<h3>CHARCUTERIE DELIVERY/PICK UP</h3>
				</div>
				<p>
					One of our newest services, Charcuterie by WOW! Events was born during
					our worldwide pandemic when my Event Planning Company of 17 years, was
					forced to stop doing business in March of 2020. Events over 10 people
					(family, neighbors or close friends only) were not allowed in
					California and my talented team and I decided to pivot and create new
					services that people could enjoy during COVID-19 and beyond. We
					combined our love of hosting events with delicious food and
					Charcuterie by WOW! Events was born. We prepare deliciously curated
					and thoughtfully created made to order Cheese, Meat & Cheese,
					Veggie/Vegan and Dessert Charcuterie Boxes for your enjoyment and
					entertaining occasions. Our Charcuterie Boxes are available for
					Delivery, Curbside Pick-Up or can be added to our POP-UP Picnic
					Packages. We also offer Grazing Tables for larger celebrations and
					that WOW! Factor. Our Charcuterie Boxes are great for all occasions
					such as birthdays, holidays, picnics, thank you gifts, corporate
					meetings, open house, game day, parties, date nights, wine tastings,
					wedding party snacks or casual gatherings. We use fresh, seasonal
					ingredients, creating scrumptious boards to suit your needs. WOW!
					Events is a certified woman owned small business enterprise
					(W.O.S.B.E.).
				</p>
				<img fluid src={DeliveryBox} alt='deliveryBox' />
			</div>
			<div>
				<h5>Delivery and Pick Up options</h5>
			</div>
			<h5 className='optionsTitle'>Meat & Cheese Box</h5>
			<img
				variant='top'
				src={MeatCheese}
				alt='cheeseBox'
				className='deliveryImg'
			/>
			<div>
				<p className='options'>8x8 inches - $60.00</p>
				<p className='options'>10x10 inches - $85.00</p>
				<p className='options'>12x12 inches - $110.00</p>
			</div>

			<h5 className='optionsTitle'>Cheese Box</h5>
			<img variant='top' src={cheeseBox} alt='deliveryBox' />
			<div>
				<p className='options'>8x8 inches - $55.00</p>
				<p className='options'>10x10 inches - $80.00</p>
				<p className='options'>12x12 inches - $105.00</p>
			</div>

			<h5 className='optionsTitle'>Veggie/Vegan Box</h5>
			<img variant='top' src={Multi} alt='deliveryBox' />
			<div>
				<p className='options'>8x8 inches - $50.00</p>
				<p className='options'>10x10 inches - $75.00</p>
				<p className='options'>12x12 inches - $100.00</p>
			</div>

			<h5 className='optionsTitle'>Dessert Box</h5>
			<img variant='top' src={Dessert} alt='deliveryBox' />
			<div>
				<p className='options'>6x6 inches - $35.00</p>
				<p className='options'>8x8 inches - $45.00</p>
			</div>

			<h5 className='optionsTitle'>Charcuterie Fluties</h5>
			<img variant='top' src={Flutes} alt='deliveryBox' />
			<div>
				<p className='options'>Order in Multiples of 20 - $200.00</p>
			</div>

			<p>
				20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
				Pricing
			</p>
		</div>
	);
}
