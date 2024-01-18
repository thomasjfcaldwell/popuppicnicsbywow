import { Box, Link } from '@mui/material';
import React from 'react';

export default function NavLinks(props) {
	return (
		<Box margin={'0 0.5em'}>
			<Link href={`./${props.link}`}>{props.title} </Link>
		</Box>
	);
}
