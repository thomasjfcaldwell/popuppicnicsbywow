import { Box } from '@mui/material';
import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import PintestestIcon from './PinterestIcon';

export default function NavIcons() {
	return (
		<Box gap={4}>
			<FacebookIcon />
			<InstagramIcon />
			<PintestestIcon />
		</Box>
	);
}
