import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function MoviesService() {
	return (
		<Box>
			<Grid2 container spacing={2}>
				<Grid2 xs={6}>
					<Card>
						<CardMedia
							sx={{ height: 220 }}
							image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705522010/movie_t0ohsu.jpg'
						/>
						<CardMedia
							sx={{ height: 220 }}
							image='https://res.cloudinary.com/djjqsmlei/image/upload/v1705522009/movie1_ptgq2p.jpg'
						/>
					</Card>
				</Grid2>
				<Grid2 xs={6}>
					<Typography>Movie Night</Typography>
				</Grid2>
			</Grid2>
		</Box>
	);
}
