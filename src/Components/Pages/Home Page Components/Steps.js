import React from 'react';
import { stepsData } from './StepsComponents/StepsData';
import SectionHeader from '../../Reusable/SectionHeader';
import { Box, Typography } from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

export default function Steps() {
	return (
		<Box component='section' className='steps_to_book'>
			<SectionHeader text='Steps To Your Picnic' />
			<Box
				sx={{
					display: 'flex',
					alignItems: 'stretch',
					justifyContent: 'space-evenly',
					backgroundColor: '#fff',
				}}>
				{stepsData.map((data, key) => {
					return (
						<Box
							key={key}
							backgroundColor={'#FFF3E5'}
							width={'260px'}
							height={'260'}
							margin={'50px'}>
							<Box
								margin={1}
								backgroundColor={'#fff'}
								display={'flex'}
								justifyContent={'center'}>
								<Typography>{data.title}</Typography>
								<ArrowRightOutlinedIcon />
							</Box>
							<Box display={'flex'} justifyContent={'center'} padding={2}>
								<data.image />
							</Box>
							<Box
								sx={{
									display: 'flex',
									padding: '10px',
									justifyContent: 'center',
									alignItems: 'flex-start',
									gap: '10px',
									alignSelf: 'stretch',
								}}>
								<Typography variant='pSmall'>{data.description}</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
