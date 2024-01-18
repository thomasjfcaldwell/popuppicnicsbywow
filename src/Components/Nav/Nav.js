import React from 'react';
import TopComponent from './TopComponent';
import Toolbar from './Toolbar';
import styled from '@emotion/styled';

const Navigation = styled('section')({
	display: 'flex',
	maxWidth: '1440px',
	alignItems: 'center',
});

export default function Nav() {
	return (
		<Navigation className='nav'>
			<TopComponent />
			<Toolbar />
		</Navigation>
	);
}
