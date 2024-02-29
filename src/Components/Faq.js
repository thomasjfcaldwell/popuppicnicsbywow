import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Typography } from '@mui/material';
import { faqData } from './FaqData';

const answerStyles = {
	fontFamily: 'Montserrat, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '2',
	color: '#ADB5BD',
};

const questionStyles = {
	fontFamily: 'Montserrat, sans-serif',
	fontSize: '10px',
	fontStyle: 'normal',
	fontWeight: '200',
	lineHeight: 'normal',
	color: '#054950',
	margin: '0',
};

export default function Faq() {
	return (
		<Container>
			<Box>
				<Typography>Faqs</Typography>
			</Box>
			{faqData.map((data, key) => {
				return (
					<Accordion key={key}>
						<AccordionSummary
							sx={questionStyles}
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${data.id}-content`}
							id={`panel${data.id}-header`}>
							{data.question}
						</AccordionSummary>
						<AccordionDetails sx={answerStyles}>{data.answer}</AccordionDetails>
					</Accordion>
				);
			})}
			<Box>
				<Typography variant='p'>
					See all of our terms and conditions{' '}
					<a href='https://drive.google.com/file/d/1hMFH8QIacQqcMDuuAaMUssqPi2dhXsLH/view?usp=sharing'>
						HERE{' '}
					</a>
				</Typography>
			</Box>
		</Container>
	);
}
