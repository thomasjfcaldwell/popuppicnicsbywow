import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { locationsData } from '../../Data';

export default function Locations() {
	return (
		<Container>
			<Box className='locationsHeader'>
				<Typography>STEP 3: SELECT A PREFERRED PICNIC LOCATION</Typography>
			</Box>
			{locationsData.map((data, key) => {
				return (
					<Card key={key}>
						<Typography>{data.location}</Typography>
					</Card>
				);
			})}
			<Box>
				<p>20% Service Fee and Sales tax will be added to Pricing</p>
			</Box>
		</Container>
	);
}
