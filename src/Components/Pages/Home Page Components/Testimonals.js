import React from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '../../Reusable/SectionHeader';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import { CardMedia, Paper, Stack } from '@mui/material';

const customers = [
	{
		label: 'Birthday Party',
		imgPath:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1706123479/birthdayparty_a9fcno.jpg',
		intro:
			'I was looking for a unique idea for my sister’s bridal shower when I stumbled upon WOW! Events Pop-Up Picnics.',
		text: 'WOW! worked with me to choose the perfect menu and ambiance for our event. We settled on a pop-up bridal shower at the beach with charcuterie and desert! I really appreciated how easy they were to communicate with and the attention to detail that they provided on the setup and décor',
	},
	{
		label: 'Anniversary',
		imgPath:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1706123477/anniversary_1_gzja11.jpg',
		intro:
			'I proposed to my wife in a pretty awesome place overlooking the ocean, I wanted to take her back there for our 10- year anniversary but didn’t want to do it with a plain old picnic basket and bottle of champagne. Boring.',
		text: 'A friend suggested calling WOW! Events to do a Pop-Up Picnic. So I did, From fancy gold goblets to tasty food and even our favorite songs, the whole experience was really special. WOW! Events did an amazing job and I have happily referred them to my friends looking to surprise their spouses!',
	},
	{
		label: 'Proposal',
		imgPath:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1706123476/proposal_pmjil7.jpg',
		intro:
			'Proposing is stressful ,I wanted to do something special, original. It needed to be memorable I’m not the most creative person in the world, so I started looking for ideas and came across Pop-Up Picnics by WOW! Events.',
		text: 'I called them up, explained what I wanted to do, they came up with some great ideas and put together an amazing Pop-Up Picnic for my very surprised, and very happy (she said YES!) fiancée. Thank you for making our day so special! Cant wait for the next one',
	},
];

export default function Testimonals(theme) {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = customers.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box
			component='section'
			className='testimonals'
			sx={{
				maxWidth: 1440,
				flexGrow: 1,
				display: 'flex',
				padding: '1em',
				justifyContent: 'center',
			}}>
			<SectionHeader text='Testimonals' />
			<Paper
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '50%',
					gap: '15px',
					margin: '2em',
				}}>
				<Stack
					sx={{
						display: 'flex',
						justifyContent: 'center',
						width: '95%',
						padding: '1.5em',
					}}>
					<CardMedia
						sx={{ height: 300 }}
						image={customers[activeStep].imgPath}
					/>
				</Stack>
				<Stack
					direction='row'
					alignItems={'center'}
					spacing={3}
					backgroundColor='#FFF3E5'
					padding={1.5}
					width='70%'>
					<Typography variant='h4'>{customers[activeStep].label}</Typography>
					<Stack direction='row' spacing={1}>
						{Array.from({ length: 5 }, (_, index) => (
							<StarIcon
								key={index}
								sx={{
									color: '#FFC107',
								}}
							/>
						))}
					</Stack>
				</Stack>

				<Stack paddingInline={2} height={'200px'}>
					<Typography variant='p'>{customers[activeStep].intro}</Typography>
					<Typography variant='p' marginTop={1}>
						{customers[activeStep].text}
					</Typography>
				</Stack>
			</Paper>

			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Box>
	);
}
