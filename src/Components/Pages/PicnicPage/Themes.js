import React from 'react';
import {
	Box,
	Container,
	Typography,
	Card,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	CardContent,
	CardMedia,
} from '@mui/material';
import { picnicThemesData } from '../../Data';

export default function Themes() {
	return (
		<Container maxWidth='1440px'>
			<Box>
				<Typography>STEP 2: CHOOSE A DESIGN THEME</Typography>
			</Box>
			<Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
				{picnicThemesData.map((data, key) => {
					return (
						<Card key={key} sx={{ minWidth: 250 }}>
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

				{/* <Card>
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
				</Card> */}
			</Box>
		</Container>
	);
}
