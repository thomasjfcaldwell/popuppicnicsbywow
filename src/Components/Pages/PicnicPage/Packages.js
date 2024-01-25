import React from 'react';
import Addon from './Addon';
import Locations from './Locations';
import BandWPackage from '../../../Images/Packages/bellsandwhistles.jpg';
import simplySavvy from '../../../Images/Packages/simplysavvy.jpg';
import Themes from './Themes';
import {
	Box,
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

export default function Packages() {
	return (
		<Container>
			<Box>
				<Typography>STEP 1: SELECT A PICNIC PACKAGE</Typography>
			</Box>
			<Box>
				<Typography>SIMPLY SAVVY PACKAGE $195+++</Typography>
				<img
					src={simplySavvy}
					alt='simply Savvy package images'
					width={'20px'}
				/>
				<List>
					<ListItem>
						<ListItemText primary='Two Hour POP-UP Picnic for 2 Guests' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Sign Hand Crafted Wood Picnic Table' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Pillow Seating for Guests' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Flatware/Plates/Cloth Napkins' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Metal Goblet' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Table Décor' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Rug/floor covering' />
					</ListItem>
				</List>
			</Box>
			<Box>
				<Typography>THE BELLS & WHISTLES PACKAGE $295+++</Typography>
				<img
					src={BandWPackage}
					className='packagesImage'
					alt='Bells & Whistles Package'
					width={'20px'}
				/>
				<List>
					<ListItem>
						<ListItemText>Two Hour POP-UP Picnic for 2 Guests</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							PersonaListItemTextzed Letter Board Sign
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Hand Crafted Wood Picnic Table</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Pillow Seating for Guests</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Flatware/Plates/Cloth Napkins</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Metal Goblets</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Table Décor </ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Rug/floor covering </ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Beverage Package for 2 Guests </ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Bluetooth Speaker for Music </ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							Choice of Posh Umbrella with Tassels or Teepee Set-Up
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Small Hand Crafted Wood side Table</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Floor & Perimeter Décor</ListItemText>
					</ListItem>
				</List>
			</Box>
			<Themes />
			<Locations />
			<Addon />
		</Container>
	);
}
