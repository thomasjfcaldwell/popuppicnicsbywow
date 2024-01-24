import { Box } from '@mui/material';
import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import PintestestIcon from './PinterestIcon';

export default function NavIcons() {
	return (
		<Box sx={{ display: 'flex', gap: '10px' }}>
			<FacebookIcon />
			<InstagramIcon />
			<PintestestIcon />
		</Box>
	);
}
