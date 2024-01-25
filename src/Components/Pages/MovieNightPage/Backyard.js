import React from 'react';
import table from '../../../Images/MovieNight/movienightTable.jpg';
import sign from '../../../Images/MovieNight/movienightsign.jpg';
import treats from '../../../Images/MovieNight/movienightTreats.jpg';
import PremierMovieModal from '../../Modals/PremierMovieModal';
import BlockBusterModal from '../../Modals/BlockBusterMovieModal';
import SimplyWithPremier from '../../Modals/SimplyWithPremier';
import SimplyWithBlockbuster from '../../Modals/SimplyWithBlockbuster';
import BellsWithPremier from '../../Modals/BellsWithPremier';
import BellsWithBlockbuster from '../../Modals/BellsWithBlockbuster';
import BasicWithPremier from '../../Modals/BasicWithPremier';
import BasicWithBlockBuster from '../../Modals/BasicWithBlockBuster';
import { Box, Container, Typography } from '@mui/material';

export default function Backyard() {
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
			<Box>
				<img src={treats} alt='treat' width={'375px'} />
				<img src={sign} alt='sign' width={'375px'} />
				<img src={table} alt='table' width={'375px'} />
			</Box>
			<Box>
				<Typography>PACKAGES</Typography>
			</Box>
			<Typography>Premier Movie Night Package $250.00 +++</Typography>
			{/* <PremierMovieModal /> */}
			<Typography>Blockbuster Movie Night Package $475.00 +++</Typography>
			{/* <BlockBusterModal /> */}
			<Typography>
				Basic Beauty PUP Package + Premier Movie Night Package $400.00 +++
			</Typography>
			{/* <BasicWithPremier /> */}
			<Typography>
				Basic Beauty PUP Package + Blockbuster Movie Night Package $625.00 +++
			</Typography>
			{/* <BasicWithBlockBuster /> */}
			<Typography>
				Simply Savvy PUP Package + Premier Movie Night Package $430.00 +++
			</Typography>
			{/* <SimplyWithPremier /> */}
			<Typography>
				Simply Savvy PUP Package + Blockbuster Movie Night Package $655.00 +++
			</Typography>
			{/* <SimplyWithBlockbuster /> */}
			<Typography>
				Bells & Whistles PUP Package + Premier Movie Night Package $530.00 +++
			</Typography>
			{/* <BellsWithPremier /> */}
			<Typography>
				Bells & Whistles PUP Package + Blockbuster Movie Night Package $755.00
				+++
			</Typography>
			{/* <BellsWithBlockbuster /> */}
			<Typography>OTHER FEES</Typography>
			<Box>
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
			<Typography>Minimums and Service Fees</Typography>
			<Box>
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
