import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ServiceOptionsHeader(props) {
	return (
		<Box display='flex' justifyContent={'center'}>
			<Typography variant='h3' component='h3'>
				{props.title}
			</Typography>
		</Box>
	);
}
