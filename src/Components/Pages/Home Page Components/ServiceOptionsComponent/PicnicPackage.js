import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Box,
} from '@mui/material';
import React from 'react';

export default function PicnicPackage(props) {
	return (
		<Box width={['300px', '340px']}>
			<Card>
				<CardMedia sx={{ height: 195 }} image={props.image} />
				<CardContent>
					<Typography variant='h5'>{props.title}</Typography>
					<Typography gutterBottom variant='h5'>
						Price $ {props.price}
					</Typography>
					<Typography variant='p' color='text.secondary'>
						{props.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	);
}
