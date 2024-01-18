import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CharcuterieService() {
	return (
		<Box>
			<Grid2 display={'flex'} justifyContent={'space-around'}>
				<Grid2 xs={6}>
					<Typography>Charcuterie Service</Typography>
				</Grid2>
				<Grid2 xs={6}>
					<ImageList cols={2} rowHeight={250}>
						<ImageListItem>
							<img
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524460/food_2_dymirt.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524461/food_4_bqudzi.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								src='https://res.cloudinary.com/djjqsmlei/image/upload/v1705524460/food_3_yhec1g.jpg'
								alt='iiiii'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
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
