import React from 'react';
import SectionHeader from '../../Reusable/SectionHeader';
import { Box } from '@mui/material';
import PicnicService from './ServiceOptionsComponent/PicnicService';
import MoviesService from './ServiceOptionsComponent/MoviesService';
import CharcuterieService from './ServiceOptionsComponent/CharcuterieService';

export default function ServiceOptions() {
	return (
		<Box
			component='section'
			className='service_options'
			sx={{ padding: '2em' }}>
			<SectionHeader text='Types of Services' />
			<PicnicService />
			<CharcuterieService />
			<MoviesService />
		</Box>
	);
}
