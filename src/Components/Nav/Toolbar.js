import React from 'react';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const PageLink = styled('a')({
	fontSize: '13px',
	textDecoration: 'none',
});
const PageList = styled('ul')({
	display: 'flex',
	justify: 'space-evenly',
	listStyleType: 'none',
});
const PageListItem = styled('li')({
	padding: '0 10px',
});

export default function Toolbar(theme) {
	return (
		<Box className='tool_bar'>
			<Box>
				<PageLink href='https://www.wowevents.com/'>
					<img src={wowlogo} alt='logo' height={'20px'} />
				</PageLink>
			</Box>
			<PageList>
				<PageListItem>
					<PageLink href='/'>HOME</PageLink>
				</PageListItem>
				<PageListItem>
					<PageLink href='/packages'>POP-UP PICNICS</PageLink>
				</PageListItem>
				<PageListItem>
					<PageLink href='/backyardmovies'>MOVIE NIGHT</PageLink>
				</PageListItem>
				<PageListItem>
					<PageLink href='/charcuterie'>CHARCUTERIE SERVICE</PageLink>
				</PageListItem>
				<PageListItem>
					<PageLink href='/contact'>CONTACT US</PageLink>
				</PageListItem>
			</PageList>
		</Box>
	);
}
