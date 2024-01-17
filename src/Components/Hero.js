import { Button, Card, CardContent, Container } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const HeroHeader = styled('h1')({
	fontSize: '65px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
	marginTop: '50px',
});
const HeroSubHeader = styled('h4')({
	fontSize: '24px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal',
});

export default function Hero() {
	return (
		<Container minWidth='xl'>
			<Card
				style={{
					backgroundImage: `url(${'https://res.cloudinary.com/djjqsmlei/image/upload/v1705450713/newSlideImage1_copy_xuyf5i.jpg'})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center bottom',
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}>
				<CardContent>
					<HeroHeader>Luxury Picnics Alfresco</HeroHeader>
					<HeroSubHeader>
						Wow Pop Up Picnics - Orange Country & Los Angeles Premier Picnic
						Hosts
					</HeroSubHeader>
					<Button>Get Started</Button>
				</CardContent>
			</Card>
		</Container>
	);
}
