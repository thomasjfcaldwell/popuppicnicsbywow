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
} from '@mui/material';

import { packagesData } from '../../Data';

export default function Packages() {
	return (
		<Container sx={{ padding: '3rem' }}>
			<Box sx={{ margin: '1rem' }}>
				<Typography>STEP 1: SELECT A PICNIC PACKAGE</Typography>
			</Box>
			<Stack direction='row' spacing={4} justifyContent={'space-evenly'}>
				{packagesData.map((data, key) => {
					return (
						<Card key={key} sx={{ display: 'flex', flexDirection: 'column' }}>
							<Box display='flex' justifyContent={'center'} margin={2}>
								<img src={data.image} alt={'sjjs'} height={'240px'} />
							</Box>
							<Box padding={2}>
								<Typography variant='h4' component='h2'>
									{data.title}
								</Typography>
								<Box width={'400px'}>
									<Typography variant='p' component='p'>
										{data.description}
									</Typography>
								</Box>
								<List>
									{data.included.map((item, key) => {
										return (
											<ListItemText
												disableTypography={true}
												sx={{ fontSize: '12px' }}
												key={key}>
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
							</Box>
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
