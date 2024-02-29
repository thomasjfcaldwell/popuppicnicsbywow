import React from 'react';
import groupShot from '../../../Images/Aboutus/aboutsus.2.jpg';
import melTiff from '../../../Images/Aboutus/aboutusMel.Tiff.jpg';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import SectionHeader from '../../Reusable/SectionHeader';

export default function Ourstory() {
	return (
		<Box
			component='section'
			className='our_story'
			width={'100%'}
			maxWidth={'1440px'}
			overflow={'hidden'}>
			<SectionHeader text='More About us' />
			<Box padding={1}>
				<Typography variant='p'>
					Say hello to POP-UP Picnics by WOW! Events – our pandemic-born
					brainchild! When faced with the unexpected, our talented event
					planners transformed adversity into excitement. Now, Southern
					California can savor unique outdoor experiences through our service.
					Imagine beach, park, or private location picnics, meticulously set up
					and cleaned up by our WOW! Events team. From intimate twosomes to
					groups of fifty, we've got your gatherings covered.
				</Typography>
				<Typography variant='p'>
					Whether it's a romantic proposal, milestone birthday, or the best date
					night ever, we create the perfect setting for you. For those craving
					"different" celebrations, we deliver unforgettable experiences for
					bridal or baby showers, Mother’s Day, birthdays, or spontaneous
					gatherings.
				</Typography>
				<Typography variant='p'>
					Choose from our convenient packages or tailor one to your liking.
					Thanks for trusting us to keep doing what we love – crafting
					extraordinary memories. Ready for your POP-UP Picnic adventure? Click
					Booking for reservations, Pricing for options, and FAQ’s for answers.
					Let the excitement unfold!
				</Typography>
			</Box>
			<ImageList cols={1}>
				<ImageListItem>
					<img src={groupShot} alt='Picnic at Huntington Beach' />
				</ImageListItem>
				<ImageListItem>
					<img src={melTiff} alt='Melissa Caldwell and Tiffany Brown' />
				</ImageListItem>
			</ImageList>
		</Box>
	);
}
