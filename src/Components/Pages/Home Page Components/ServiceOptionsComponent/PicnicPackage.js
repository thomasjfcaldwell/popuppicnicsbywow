import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
} from '@mui/material';
import React from 'react';

export default function PicnicPackage(props) {
	return (
		<Card sx={{ maxWidth: 300, padding: '1em' }}>
			<CardMedia sx={{ height: 140 }} image={props.image} />
			<CardContent>
				<Typography variant='h5'>{props.title}</Typography>
				<Typography gutterBottom variant='h5' component='div'>
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
	);
}
