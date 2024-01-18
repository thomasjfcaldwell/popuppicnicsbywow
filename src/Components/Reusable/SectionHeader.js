import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Box>
			<Typography>{props.text}</Typography>
		</Box>
	);
}
