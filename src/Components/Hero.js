import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

export default function Hero() {
	return (
		<Box sx={{ margin: '0', padding: '0' }}>
			<Paper
				sx={{
					backgroundImage: `url(${'https://res.cloudinary.com/djjqsmlei/image/upload/v1705450713/newSlideImage1_copy_xuyf5i.jpg'})`,
					backgroundRepeat: 'no-repeat',
					// backgroundPosition: 'center bottom',
					backgroundPosition: 'center center',
					height: '100vh',
					maxWidth: '100%',
					display: 'flex',
					justifyContent: 'center',
					borderRadius: '0',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginTop: '200px',
						gap: '2rem',
					}}>
					<Typography variant='h1'>Luxury Picnics Alfresco</Typography>
					<Typography variant='h2'>
						Wow Pop Up Picnics - Orange Country & Los Angeles Premier Picnic
						Hosts
					</Typography>
					<Button variant='contained'>Get Started</Button>
				</Box>
			</Paper>
		</Box>
	);
}
