import React from 'react';
import { addOnData } from '../../Data';
import { Box, Typography, Card, CardMedia } from '@mui/material';

export default function Addon() {
	return (
		<Box>
			<Box paddingBlock={1}>
				<Typography>STEP 4: SELECT ADDITIONAL OPTIONS</Typography>
			</Box>
			<Box
				display='flex'
				flexDirection={{ xs: 'column' }}
				alignItems={'center'}>
				{addOnData.map((data, key) => {
					return (
						<Card
							key={key}
							sx={{
								width: 280,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'stretch',
							}}>
							<CardMedia sx={{ height: 280 }} image={data.image} />
							<Typography sx={{ fontSize: '5px' }}>{data.title}</Typography>

							<Typography>${data.price}</Typography>
						</Card>
					);
				})}
			</Box>
		</Box>
	);
}
