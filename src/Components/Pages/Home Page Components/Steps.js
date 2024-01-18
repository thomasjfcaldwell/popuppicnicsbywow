import React from 'react';
// import { stepsData } from './StepsComponents/StepsData';
import SectionHeader from '../../Reusable/SectionHeader';
import { Box } from '@mui/material';

export default function Steps() {
	return (
		<Box component='section' className='steps_to_book'>
			<SectionHeader text='Steps To Your Picnic' />
			{/* {stepsData.map((data, key) => {
				return (
					<div key={key}>
						<h1>{data.title}</h1>
						<div>
							<data.image />
						</div>
					</div>
				);
			})} */}
		</Box>
	);
}
