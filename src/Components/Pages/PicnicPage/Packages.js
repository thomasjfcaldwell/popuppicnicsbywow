import React from 'react';
import Addon from './Addon';
import Locations from './Locations';
import Themes from './Themes';
import {
	Box,
	Container,
	Typography,
	List,
	ListItemText,
	Card,
	Stack,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	CardContent,
	CardHeader,
	CardMedia,
} from '@mui/material';

import { packagesData } from '../../Data';

export default function Packages() {
	return (
		<Container padding={1} maxWidth={'1440px'}>
			<Box paddingBlock={1}>
				<Typography>STEP 1: SELECT A PICNIC PACKAGE</Typography>
			</Box>
			<Stack direction={{ base: 'column', md: 'row' }} gap={4}>
				{packagesData.map((data, key) => {
					return (
						<Card key={key}>
							<CardMedia
								component='img'
								height='200'
								image={data.image}
								alt={'lllxlx'}
							/>
							<CardContent>
								<CardHeader>{data.title}</CardHeader>
								<Typography variant='p' component='p'>
									{data.description}
								</Typography>
								<List>
									{data.included.map((item, key) => {
										return (
											<ListItemText variant='p' component='p' key={key}>
												{item}
											</ListItemText>
										);
									})}
								</List>
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
			</Stack>
			<Themes />
			<Locations />
			<Addon />
		</Container>
	);
}
