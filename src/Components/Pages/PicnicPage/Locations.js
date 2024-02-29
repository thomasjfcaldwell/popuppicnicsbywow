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
			<Box display='flex' flexDirection={'column'}>
				{locationsData.map((data, key) => {
					return (
						<Card key={key}>
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
		</Box>
	);
}
