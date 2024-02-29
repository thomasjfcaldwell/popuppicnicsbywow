import React from 'react';
import {
	Box,
	Typography,
	Card,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	CardContent,
	CardMedia,
	Grid,
} from '@mui/material';
import { picnicThemesData } from '../../Data';

export default function Themes() {
	return (
		<Box maxWidth='1440px' width={'100%'}>
			<Box paddingBlock={1}>
				<Typography>STEP 2: CHOOSE A DESIGN THEME</Typography>
			</Box>
			<Grid columns={{ xs: 12, md: 6, lg: 3 }} gap={2}>
				{picnicThemesData.map((data, key) => {
					return (
						<Card key={key}>
							<CardContent padding={3}>
								<CardMedia
									sx={{ height: 140 }}
									image={data.image}
									title='green iguana'
								/>
								<Typography>{data.name}</Typography>
								<Typography>{data.quote}</Typography>
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
			</Grid>
		</Box>
	);
}
