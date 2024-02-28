import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Box>
			<Typography padding={4} backgroundColor={'blue.200'}>
				{props.text}
			</Typography>
		</Box>
	);
}
