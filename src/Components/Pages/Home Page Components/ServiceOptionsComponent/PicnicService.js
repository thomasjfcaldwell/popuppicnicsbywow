import { Card, CardMedia, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import ServiceOptionsHeader from './ServiceOptionsHeader';
import PicnicPackage from './PicnicPackage';

export default function PicnicService() {
	return (
		<Box padding={2}>
			<Grid2 container spacing={4}>
				<Grid2 xs={12} md={6}>
					<Card>
						<CardMedia
							sx={{ height: 625 }}
							image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705521146/picnicServiceImage_excech.jpg'
						/>
					</Card>
				</Grid2>
				<Grid2 container xs={6} spacing={4}>
					<ServiceOptionsHeader title='Picnics' />
					<Box>
						<Typography variant='p'>
							Tailored for intimate dates or grand celebrations. Our
							meticulously designed picnics, suitable for beach, park, or
							backyard settings, promise sophistication and impressive decor for
							a memorable experience.
						</Typography>
					</Box>
					<Grid2 container spacing={2} justifyContent={'space-between'}>
						<Grid>
							<PicnicPackage
								component='item'
								image='https://res.cloudinary.com/djjqsmlei/image/upload/v1706048870/simplysavvy_nz0pme.png'
								title='Simply Savvy'
								price='260'
								description='A delightful picnic package for two, creating the perfect setting for a romantic lunch outdoors.'
							/>
						</Grid>
						<Grid>
							<PicnicPackage
								component='item'
								title='Bells & Whistles'
								image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705530175/Gallery/gallerySix.jpg'
								price='460'
								description='Elevate your picnic with this premium package, designed to impress and indulge.'
							/>
						</Grid>
					</Grid2>
					<Box>
						<Typography variant='p'>
							Start your luxury picnic today, remember you can add extras such
							as food and games on the booking page
						</Typography>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	);
}
