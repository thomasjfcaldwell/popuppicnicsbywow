import { Box, Typography, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ServiceOptionsHeader from './ServiceOptionsHeader';

export default function CharcuterieService() {
	return (
		<Box>
			<Grid2 display={'flex'} justifyContent={'space-around'}>
				<Grid2 xs={6}>
					<ServiceOptionsHeader title='Charcuterie' />
					<Box width={'700px'}>
						<Typography variant='p'>
							Elevate your picnic experience with our artisanal Charcuterie
							service. Immerse yourself in the finest selection of cured meats,
							gourmet cheeses, and complementary delights expertly curated for a
							tasteful outdoor feast. At the heart of our picnic business, savor
							the perfect blend of luxury, nature, and culinary excellence.
						</Typography>
					</Box>
					<Box>
						<Button>Order Now</Button>
					</Box>
				</Grid2>
				<Grid2 xs={6}>
					<ImageList cols={2} rowHeight={250}>
						<ImageListItem>
							<img
								loading='lazy'
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524460/food_2_dymirt.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								loading='lazy'
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524461/food_4_bqudzi.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								loading='lazy'
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524460/food_3_yhec1g.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								loading='lazy'
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524460/food_1_g5nj16.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
					</ImageList>
				</Grid2>
			</Grid2>
		</Box>
	);
}
