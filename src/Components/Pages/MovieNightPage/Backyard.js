import React, { useState } from 'react';
import table from '../../../Images/MovieNight/movienightTable.jpg';
import sign from '../../../Images/MovieNight/movienightsign.jpg';
import treats from '../../../Images/MovieNight/movienightTreats.jpg';

import {
	Box,
	Container,
	Typography,
	Button,
	List,
	ListItemText,
} from '@mui/material';
import { backyardData } from '../../Data';

export default function Backyard() {
	const [showMore, setShowMore] = useState(false);
	const handleShowMoreClick = () => {
		setShowMore(!showMore);
	};
	return (
		<Container>
			<Box>
				<Typography variant='h5'>MOVIE NIGHTS</Typography>
			</Box>
			<Typography variant='p'>
				Experience a backyard movie night like never before with our Premier
				Package. Enjoy a 90” screen, projector, and high-quality speakers,
				expertly set up for three hours of viewing fun by our WOW! Events Host.
				For VIP treatment, choose our Blockbuster Package with exclusive
				seating, treats, and more. Contact us for your extraordinary event!
			</Typography>
			<Box width={'100%'} overflow={'hidden'}>
				<img src={treats} alt='treat' width={'375px'} />
				<img src={sign} alt='sign' width={'375px'} />
				<img src={table} alt='table' width={'375px'} />
			</Box>
			<Box>
				<Typography>PACKAGES</Typography>
			</Box>
			{backyardData.map((data, key) => {
				return (
					<Box key={key}>
						<Typography>{data.name}</Typography>
						<Typography>{data.price}</Typography>
						<Box>
							<List sx={{ display: showMore ? 'block' : 'none' }}>
								{data.included.map((item, key) => {
									return (
										<ListItemText
											disableTypography={true}
											sx={{ fontSize: '12px' }}
											key={key}>
											{item}
										</ListItemText>
									);
								})}
							</List>
							<Button variant='outlined' onClick={handleShowMoreClick}>
								{data.id === key && showMore ? 'Show Less' : 'Show More'}
							</Button>
						</Box>
					</Box>
				);
			})}
			<Box>
				<Typography>OTHER FEES</Typography>
				<Typography variant='p'>
					Delivery Fee (up to 15 miles round trip from HB pier)= $50
				</Typography>
				<Typography variant='p'>
					Travel Fee (over 15 miles round trip from HB Pier)= $1 per mile
				</Typography>
				<Typography variant='p'>
					Additional Hour for Movie Night= $100
				</Typography>
			</Box>
			<Box>
				<Typography>Minimums and Service Fees</Typography>
				<Typography variant='p'>
					$500 Minimum Required for Saturdays & Sundays in April through
					September
				</Typography>
				<Typography variant='p'>
					$1000 Minimum Required for US & Other Holiday Weekends (prior to
					service fee & tax)
				</Typography>
				<Typography variant='p'>
					Additional 10% added to Service Fee For Bookings Under the 7 Day
					Minimum
				</Typography>
			</Box>
			<Typography variant='p'>
				20% Service Fee,Sales tax & Applicable Delivery Fee will be added to
				Pricing
			</Typography>
		</Container>
	);
}
