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
	Stack,
	Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { picnicThemesData } from '../../Data';

export default function Themes() {
	return (
		<Box maxWidth='1440px' width={'100%'} marginBlock={2}>
			<Box paddingBlock={1}>
				<Typography>STEP 2: CHOOSE A DESIGN THEME</Typography>
			</Box>
			<Stack
				flexWrap={'wrap'}
				direction={{ xs: 'column', sm: 'row' }}
				alignItems='stretch'
				justifyContent='space-between'
				gap={1}
				marginBlock={2}>
				{picnicThemesData.map((data, index) => {
					return (
						<Box
							item
							xs={12}
							md={6}
							key={index}
							padding={2}
							display='flex'
							flexDirection={'column'}
							gap={1}
							flex='1'
							backgroundColor={'white'}>
							<Box>
								<CardMedia
									component='img'
									height='140'
									image={data.image}
									alt='Image Alt Text'
								/>
							</Box>
							<Box display='flex' alignItems='center'>
								<Typography variant='p' fontSize={18}>
									{data.name}
								</Typography>
							</Box>
							<Box
								padding={2}
								backgroundColor={'primary.light'}
								display='flex'
								justifyContent='center'>
								<Typography
									variant='p'
									fontSize={[13, 11, 14]}
									color={'gray.400'}>
									{data.quote}
								</Typography>
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
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
}
