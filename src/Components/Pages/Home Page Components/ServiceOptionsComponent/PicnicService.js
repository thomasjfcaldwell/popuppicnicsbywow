import { Card, CardMedia, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import ServiceOptionsHeader from './ServiceOptionsHeader';
import PicnicPackage from './PicnicPackage';

export default function PicnicService() {
	return (
		<Grid xs={12}>
			<Grid2 container backgroundcolor='red'>
				<Grid2 xs={12} md={6} p={1}>
					<Card backgroundcolor='pink'>
						<CardMedia
							sx={{ height: [345, 700] }}
							image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705521146/picnicServiceImage_excech.jpg'
						/>
					</Card>
				</Grid2>
				<Grid2 container xs={12} md={6} bgcolor='yellow' padding={1}>
					<ServiceOptionsHeader title='Picnics' />
					<Box backgroundColor='lightblue'>
						<Typography variant='p'>
							Tailored for intimate dates or grand celebrations. Our
							meticulously designed picnics, suitable for beach, park, or
							backyard settings, promise sophistication and impressive decor for
							a memorable experience.
						</Typography>
					</Box>
					<Grid2 container gap={2} margin={'0'}>
						<Grid item>
							<PicnicPackage
								component='item'
								image='https://res.cloudinary.com/djjqsmlei/image/upload/v1706048870/simplysavvy_nz0pme.png'
								title='Simply Savvy'
								price='260'
								description='A delightful picnic package for two, creating the perfect setting for a romantic lunch outdoors.'
							/>
						</Grid>
						<Grid item>
							<PicnicPackage
								component='item'
								title='Bells & Whistles'
								image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705530175/Gallery/gallerySix.jpg'
								price='460'
								description='Elevate your picnic with this premium package, designed to impress and indulge.'
							/>
						</Grid>
					</Grid2>
					{/* <Box>
						<Typography variant='p' backgroundColor='purple'>
							Start your luxury picnic today, remember you can add extras such
							as food and games on the booking page
						</Typography>
					</Box> */}
				</Grid2>
			</Grid2>
		</Grid>
	);
}
