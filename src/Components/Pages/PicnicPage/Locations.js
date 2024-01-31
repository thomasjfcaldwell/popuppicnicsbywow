import React from 'react';
import {
	Box,
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@mui/material';
import { locationsData } from '../../Data';

export default function Locations() {
	return (
		<Container>
			<Box className='locationsHeader'>
				<Typography>STEP 3: SELECT A PREFERRED PICNIC LOCATION</Typography>
			</Box>
			<Box
				display='flex'
				flexWrap={'wrap'}
				gap={3}
				justifyContent={'space-between'}>
				{locationsData.map((data, key) => {
					return (
						<Card key={key} sx={{ width: 250 }}>
							<CardMedia
								sx={{ height: 100 }}
								image={data.image}
								title={data.alt}
							/>
							<CardContent>
								<Typography>{data.location}</Typography>
								<Typography>{data.price}</Typography>
								<FormControl>
									<RadioGroup>
										<FormControlLabel
											value='Select'
											control={<Radio />}
											label='Select'
										/>
									</RadioGroup>
								</FormControl>
							</CardContent>
						</Card>
					);
				})}
			</Box>
			<Box>
				<Typography>
					20% Service Fee and Sales tax will be added to Pricing
				</Typography>
			</Box>
		</Container>
	);
}
