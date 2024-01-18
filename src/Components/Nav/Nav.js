import React from 'react';
import styled from '@emotion/styled';
import NavIcons from './NavIcons/NavIcons';
import NavLinks from '../Reusable/NavLinks';
import logo from '../../Images/WowEvents_Logo_Orange_RGB.png';
import { Button, Stack } from '@mui/material';

const Navigation = styled('nav')({
	display: 'flex',
	alignItems: 'center',
	position: 'absolute',
	justify: 'space-between',
	gap: '80px',
	padding: '14px',
});

export default function Nav() {
	return (
		<Navigation className='nav'>
			<NavIcons />
			<Stack direction='row'>
				<NavLinks link='' title='Home' />
				<NavLinks link='picnics' title='Picnics' />
				<NavLinks link='movie_night' title='Movie Nights' />
				<NavLinks link='charcuterie' title='Charcuterie' />
			</Stack>
			<div>
				<img alt='logo' src={logo} width='150px' />
			</div>
			<Stack direction='row'>
				<NavLinks link='gallery' title='Gallery' />
				<NavLinks link='contact' title='Contact' />
				<NavLinks link='news' title='News' />
				<NavLinks link='about_us' title='About Us' />
			</Stack>
			<div>
				<Button>Book Now</Button>
			</div>
		</Navigation>
	);
}
