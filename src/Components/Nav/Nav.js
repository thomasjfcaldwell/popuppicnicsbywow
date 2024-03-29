import React from 'react';
import styled from '@emotion/styled';
import NavIcons from './NavIcons/NavIcons';
import NavLinks from '../Reusable/NavLinks';
import logo from '../../Images/WowEvents_Logo_Orange_RGB.png';
import Packages from '../Pages/PicnicPage/Packages';
import { Box, Button, Stack } from '@mui/material';

const Navigation = styled('div')({
	display: 'flex',
	alignItems: 'center',
	position: 'absolute',
	justifyContent: 'space-around',
	minWidth: '100%',
	marginTop: '1em',
});

export default function Nav() {
	return (
		<Navigation className='nav'>
			<NavIcons />
			<Stack direction='row'>
				<NavLinks link='/' title='Home' />
				<NavLinks link='/packages' title='Picnics' />
				<NavLinks link='/backyardmovies' title='Movie Nights' />
				<NavLinks link='/charcuterie' title='Charcuterie' />
			</Stack>
			<div>
				<img alt='logo' src={logo} width='100px' />
			</div>
			<Stack direction='row'>
				<NavLinks link='gallery' title='Gallery' />
				<NavLinks link='contact' title='Contact' />
				<NavLinks link='news' title='News' />
				<NavLinks link='about_us' title='About Us' />
			</Stack>
			<Box>
				<Button variant='contained'>Book Now</Button>
			</Box>
		</Navigation>
	);
}
