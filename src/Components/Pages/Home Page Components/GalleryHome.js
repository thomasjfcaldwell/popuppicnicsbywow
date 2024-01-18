import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import SectionHeader from '../../Reusable/SectionHeader';

// function srcset(image, size, rows = 3, cols = 5) {
// 	return {
// 		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
// 		srcSet: `${image}?w=${size * cols}&h=${
// 			size * rows
// 		}&fit=crop&auto=format&dpr=2 2x`,
// 	};
// }

// const itemData = [
// 	{
// 		id: 1,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530173/Gallery/galleryOne.jpg',
// 		title: 'Picnic At Pasea',
// 		rows: 3,
// 		cols: 3,
// 	},
// 	{
// 		id: 2,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530173/Gallery/galleryTwo.jpg',
// 		title: 'Basic Beauty Set Up',
// 		rows: 1,
// 		cols: 1,
// 	},
// 	{
// 		id: 3,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530173/Gallery/galleryThree.jpg',
// 		title: 'Jarcuterie',
// 		cols: 1,
// 	},
// 	{
// 		id: 4,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530174/Gallery/galleryFour.jpg',
// 		title: 'Back Yard Set Up',
// 		cols: 1,
// 	},
// 	{
// 		id: 5,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530172/Gallery/galleryFive.jpg',
// 		title: 'Beach Set Up for kids party',
// 		cols: 3,
// 	},
// 	{
// 		id: 6,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530175/Gallery/gallerySix.jpg',
// 		title: 'Simply Savvy Set Up',
// 		cols: 1,
// 	},
// 	{
// 		id: 7,
// 		img: 'https://res.cloudinary.com/djjqsmlei/image/upload/v1705530176/Gallery/gallerySeven.jpg',
// 		title: 'Bells & Whistles Set Up',
// 		cols: 2,
// 	},
// ];

export default function GalleryHome() {
	return (
		<Box component='section' className='gallery'>
			<SectionHeader text='Gallery' />
			{/* <ImageList
				sx={{ width: 1440, height: 1024 }}
				variant='quilted'
				cols={6}
				rowHeight={350}>
				{itemData.map((item) => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList> */}
		</Box>
	);
}
