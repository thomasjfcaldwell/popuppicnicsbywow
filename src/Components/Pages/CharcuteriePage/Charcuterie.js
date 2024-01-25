import React from 'react';
import DeliveryBox from '../../../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../../../Images/Charcuterie/flutes.jpg';
import Dessert from '../../../Images/Packages/dessertBox.jpg';
import Multi from '../../../Images/Packages/veggieBox.jpg';
import cheeseBox from '../../../Images/Packages/cheeseBox.jpg';
import MeatCheese from '../../../Images/Packages/meatChesseBox.jpg';
import { Box, Container, Typography } from '@mui/material';

export default function Charcuterie() {
	return (
		<Container>
			<Box>
				<Typography>CHARCUTERIE DELIVERY/PICK UP</Typography>
				<Typography>
					During the pandemic, WOW! Events pivoted, introducing Charcuterie
					services. Our team crafted delectable, made-to-order Cheese, Meat,
					Veggie/Vegan, and Dessert Charcuterie Boxes for delivery, curbside
					pick-up, or inclusion in our POP-UP Picnic Packages. Perfect for
					birthdays, holidays, weddings, or corporate events, our offerings
					showcase fresh, seasonal ingredients for a WOW! experience.
				</Typography>
				<img fluid src={DeliveryBox} alt='deliveryBox' />
			</Box>

			<Typography>Delivery and Pick Up options</Typography>
			<Typography>Meat & Cheese Box</Typography>
			<img src={MeatCheese} alt='cheeseBox' width={'50px'} />
			<Box>
				<Typography>8x8 inches - $60.00</Typography>
				<Typography>10x10 inches - $85.00</Typography>
				<Typography>12x12 inches - $110.00</Typography>
			</Box>

			<Typography>Cheese Box</Typography>
			<img src={cheeseBox} alt='deliveryB' width={'50px'} />
			<Box>
				<Typography>8x8 inches - $55.00</Typography>
				<Typography>10x10 inches - $80.00</Typography>
				<Typography>12x12 inches - $105.00</Typography>
			</Box>

			<Typography>Veggie/Vegan Box</Typography>
			<img src={Multi} alt='deliveryBox' width={'50px'} />
			<Box>
				<Typography>8x8 inches - $50.00</Typography>
				<Typography>10x10 inches - $75.00</Typography>
				<Typography>12x12 inches - $100.00</Typography>
			</Box>

			<Typography>Dessert Box</Typography>
			<img src={Dessert} alt='deliveryBox' width={'50px'} />
			<Box>
				<Typography>6x6 inches - $35.00</Typography>
				<Typography>8x8 inches - $45.00</Typography>
			</Box>

			<Typography>Charcuterie Fluties</Typography>
			<img src={Flutes} alt='deliveryBox' width={'50px'} />
			<Box>
				<Typography>Order in Multiples of 20 - $200.00</Typography>
			</Box>

			<Typography>
				20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
				Pricing
			</Typography>
		</Container>
	);
}
