import { Card, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

export default function PicnicService() {
	return (
		<Box>
			<Grid2 container spacing={2}>
				<Grid2 xs={12} md={6}>
					<Card>
						<CardMedia
							sx={{ height: 625 }}
							image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705521146/picnicServiceImage_excech.jpg'
						/>
					</Card>
				</Grid2>
				<Grid2 xs={6}>
					<Typography>Picnics</Typography>
				</Grid2>
			</Grid2>
		</Box>
	);
}
