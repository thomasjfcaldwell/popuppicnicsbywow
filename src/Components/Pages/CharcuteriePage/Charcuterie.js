import React from 'react';
import DeliveryBox from '../../../Images/Charcuterie/Charcuterie Box with Menu (outside view)1 copy.jpg';
import Flutes from '../../../Images/Charcuterie/flutes.jpg';

import {
	Box,
	Card,
	CardContent,
	Container,
	Typography,
	CardMedia,
	Paper,
} from '@mui/material';
import { charcuterieData } from '../../Data';

export default function Charcuterie() {
	return (
		<Container width={'100%'} maxWidth={'1440px'}>
			<Box overflow={'hidden'} display={'flex'} flexDirection={'column'}>
				<Typography>CHARCUTERIE DELIVERY/PICK UP</Typography>
				<Typography variant='p'>
					During the pandemic, WOW! Events pivoted, introducing Charcuterie
					services. Our team crafted delectable, made-to-order Cheese, Meat,
					Veggie/Vegan, and Dessert Charcuterie Boxes for delivery, curbside
					pick-up, or inclusion in our POP-UP Picnic Packages. Perfect for
					birthdays, holidays, weddings, or corporate events, our offerings
					showcase fresh, seasonal ingredients for a WOW! experience.
				</Typography>
				<img
					fluid='true'
					src={DeliveryBox}
					alt='deliveryBox'
					height={'160px'}
				/>
			</Box>
			<Typography>Delivery and Pick Up options</Typography>
			<Box>
				{charcuterieData.map((data, key) => {
					return (
						<Box
							key={key}
							display={'grid'}
							gridTemplateColumns={'1fr 1fr'}
							backgroundColor={'white'}>
							<Box>
								<Card>
									<CardContent width={'100%'}>
										<CardMedia
											sx={{ height: 50, width: 50 }}
											image={data.image}
										/>
										<Typography>{data.name}</Typography>
									</CardContent>
								</Card>
							</Box>
							<Box>
								<Typography>8x8 {data.eightPrice}</Typography>
								<Typography>10x10 {data.tenPrice}</Typography>
								<Typography>12x12 {data.twelvePrice}</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
			<Box>
				<Typography>Charcuterie Fluties</Typography>
				<img fluid='true' src={Flutes} alt='deliveryBox' width={'50px'} />
				<Typography>Order in Multiples of 20 - $200.00</Typography>
			</Box>

			<Typography>
				20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
				Pricing
			</Typography>
		</Container>
	);
}
