import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const bottomLink = {
	textDecoration: 'none',
	fontFamily: 'Montserrat, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
	color: '#ADB5BD',
	textAlign: 'center',
	'&:hover': {
		color: 'green',
	},
};

export default function Footer() {
	return (
		<Box component={'footer'} className='footer' height={200}>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '200px',
				}}>
				<Box>
					<Box
						gap={2}
						sx={{
							display: 'flex',
							alignItems: ' center',
						}}>
						<img
							src={
								'https://res.cloudinary.com/djjqsmlei/image/upload/v1706142166/WowEvents_Logo_Orange_RGB_ugbykx.png'
							}
							alt='logo'
							height='50px'
						/>
						<Typography fontSize={'28px'}>Picnics</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							marginTop: '10px',
						}}
						gap={2}>
						<Box>
							<Typography variant='pSmall'>
								© 2021 Copyright Wow! Events
							</Typography>
						</Box>
						<Box>
							<Typography variant='pSmall'>Terms</Typography>
						</Box>
						<Box>
							<Typography variant='pSmall'>Privacy</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box
						gap={2}
						sx={{
							display: 'flex',
						}}>
						<Box>
							<FacebookIcon />
						</Box>
						<Box>
							<InstagramIcon />
						</Box>
						<Box>
							<PinterestIcon />
						</Box>
					</Box>
					<Box
						gap={1}
						sx={{
							display: 'flex',
						}}>
						<Box>
							<Link sx={bottomLink} href='/'>
								About
							</Link>
						</Box>
						<Box>
							<Link sx={bottomLink} href='/packages'>
								Faq
							</Link>
						</Box>
						<Box>
							<Link sx={bottomLink} href='/backyardmovies'>
								Contact
							</Link>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
