import { Box } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const MenuLink = styled('a')({
	fontFamily: 'Montserrat, sans-serif',
	fontSize: '1em',
	fontWeight: '500',
	textDecoration: 'none',
	color: '#FFF3E5',
});

export default function NavLinks(props) {
	return (
		<Box margin={'0 0.5em'}>
			<MenuLink href={props.link}>{props.title}</MenuLink>
		</Box>
	);
}
