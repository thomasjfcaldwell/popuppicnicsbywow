import React from 'react';
import { addOnData } from '../../Data';
import { Box, Container, Typography, Card, CardMedia } from '@mui/material';

export default function Addon() {
	return (
		<Container>
			<Box>
				<Typography>STEP 4: SELECT ADDITIONAL OPTIONS</Typography>
			</Box>
			<Box
				display='flex'
				flexWrap={'wrap'}
				gap={3}
				justifyContent={'space-between'}>
				{addOnData.map((data, key) => {
					return (
						<Card
							key={key}
							sx={{
								width: 200,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'stretch',
							}}>
							<CardMedia sx={{ height: 172.5 }} image={data.image} />
							<Typography sx={{ fontSize: '10px' }}>{data.title}</Typography>

							<Typography>${data.price}</Typography>
						</Card>
					);
				})}
			</Box>
		</Container>
	);
}
