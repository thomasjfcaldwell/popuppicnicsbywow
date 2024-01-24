import React from 'react';
import { Button, Card, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ServiceOptionsHeader from './ServiceOptionsHeader';

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
					<ServiceOptionsHeader title='Movie Nights' />
					<Box>
						<Typography variant='p'>
							Indulge in a stress-free cinematic experience under the stars.
							Choose your ideal movie as you relax on luxury furniture
							surrounded by carefully provided equipment. Elevate the fun with
							our thoughtful extras for a perfect outdoor movie night.
						</Typography>
					</Box>
					<Box>
						<Button>Book Now</Button>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	);
}
