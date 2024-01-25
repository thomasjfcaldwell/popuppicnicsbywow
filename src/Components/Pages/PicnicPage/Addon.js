import React from 'react';
import { addOnData } from '../../Data';
import { Box, Container, Typography, Card } from '@mui/material';

export default function Addon() {
	return (
		<Container>
			<Box>
				<Typography>STEP 4: SELECT ADDITIONAL OPTIONS</Typography>
			</Box>
			<Box flexDirection={'row'}>
				{addOnData.map((data, key) => {
					return (
						<Card key={key}>
							<Typography className='addon__title'>{data.title}</Typography>
							<Box>
								<img
									className='addon__image'
									src={data.image}
									alt={data.alt}
									width='20px'
								/>
							</Box>
							<Typography className='addon__price'>${data.price}</Typography>
						</Card>
					);
				})}
			</Box>
		</Container>
	);
}
