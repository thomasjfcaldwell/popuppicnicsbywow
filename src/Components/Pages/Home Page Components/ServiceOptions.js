import React from 'react';
import { styled } from '@mui/material';
import PicnicService from './ServiceOptionsComponent/PicnicService';
import MoviesService from './ServiceOptionsComponent/MoviesService';
import CharcuterieService from './ServiceOptionsComponent/CharcuterieService';

export default function ServiceOptions() {
	return (
		<TypesOfService className='service_options'>
			<PicnicService />
			<MoviesService />
			<CharcuterieService />
		</TypesOfService>
	);
}
const TypesOfService = styled('section')({
	backgroundColor: 'blue',
});
