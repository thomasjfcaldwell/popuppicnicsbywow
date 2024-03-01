import React from 'react';
import { addOnData } from '../../Data';
import { Box, Typography, Card, CardMedia, Grid } from '@mui/material';

export default function Addon() {
	return (
		<Box>
			<Box paddingBlock={1}>
				<Typography>STEP 4: SELECT ADDITIONAL OPTIONS</Typography>
			</Box>
			<Box
				display='flex'
				alignItems={'stretch'}
				flexWrap={'wrap'}
				justifyContent={'space-between'}
				rowGap={2}>
				{addOnData.map((data, item) => {
					return (
						<Grid
							item
							key={item}
							xs={12}
							md={4}
							lg={3}
							sx={{ flex: '1 0 calc(33.333% - 16px)', margin: '8px' }}>
							<Card
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'stretch',
									minWidth: '120px',
									maxWidth: '600px',
									width: '100%',
									height: '200px',
								}}>
								<CardMedia sx={{ height: 100 }} image={data.image} />
								<Box display='flex' alignItems='stretch' flexDirection='column'>
									<Box>
										<Typography sx={{ fontSize: '8px' }}>
											{data.title}
										</Typography>
									</Box>
									<Box>
										<Typography fontSize='10px'>{data.description}</Typography>
									</Box>
									<Box>
										<Typography fontSize='10px'>${data.price}</Typography>
									</Box>
								</Box>
							</Card>
						</Grid>
					);
				})}
			</Box>
		</Box>
	);
}
