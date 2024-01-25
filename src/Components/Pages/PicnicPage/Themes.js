import React from 'react';
import prettyInPink from '../../../Images/Themes/prettyinPink.jpg';
import nauticalChic from '../../../Images/Themes/nauticalChic.jpg';
import takeMeToCapri from '../../../Images/Themes/takemetoCapri.jpg';
import NaturalLuxury from '../../../Images/Themes/naturalLuxury.jpg';
import { Box, Container, Typography, Card } from '@mui/material';

export default function Themes() {
	return (
		<Container>
			<Box>
				<Typography>STEP 2: CHOOSE A DESIGN THEME</Typography>
			</Box>
			<Card>
				<Box>
					<Typography>Pretty in Pink</Typography>
				</Box>
				<Box>
					<img src={prettyInPink} alt='pretty' />
				</Box>
				<Box>
					<Typography>Love - Femininity - Relaxation</Typography>
				</Box>
			</Card>
			<Card>
				<Box>
					<Typography>Nautical Chic</Typography>
				</Box>
				<Box>
					<img src={nauticalChic} alt='chic' />
				</Box>
				<Box>
					<Typography>Elegant - Stylish - Ocean Blue</Typography>
				</Box>
			</Card>
			<Card>
				<Box>
					<Typography>Take me to Capri</Typography>
				</Box>
				<Box>
					<img fluid src={takeMeToCapri} alt='capri' />
				</Box>
				<Box>
					<Typography>Dream - Happy - Paradise</Typography>
				</Box>
			</Card>
			<Card>
				<Box>
					<Typography>Bohemian Luxury</Typography>
				</Box>
				<Box>
					<img fluid src={NaturalLuxury} alt='natural' />
				</Box>
				<Box>
					<Typography>Extravagant - Rustic - Comfortable</Typography>
				</Box>
			</Card>
		</Container>
	);
}
