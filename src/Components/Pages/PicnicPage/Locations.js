import React from 'react';
import {
	Box,
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
		<Box>
			<Box className='locationsHeader' paddingBlock={1}>
				<Typography>STEP 3: SELECT A PREFERRED PICNIC LOCATION</Typography>
			</Box>
			<Box display='flex' flexDirection={'column'} gap={2}>
				{locationsData.map((data, key) => {
					return (
						<Card key={key}>
							<Box p={1}>
								<CardMedia
									lazy='true'
									sx={{ height: 100 }}
									image={data.image}
									title={data.alt}
								/>
							</Box>
							<CardContent>
								<Box
									display='flex'
									justifyContent={'center'}
									paddingBlock={2}
									bgcolor={'navy'}>
									<Typography variant='p'>{data.location}</Typography>
								</Box>
								<Box>
									<Typography variant='p'>{data.price}</Typography>
								</Box>
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
				<Typography variant='p'>
					20% Service Fee and Sales tax will be added to Pricing
				</Typography>
			</Box>
		</Box>
	);
}
