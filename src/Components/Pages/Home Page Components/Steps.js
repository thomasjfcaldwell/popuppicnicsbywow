import { Box } from '@mui/material';
import React from 'react';

// const PlusIcon = createSvgIcon(
// 	<svg
// 		xmlns='http://www.w3.org/2000/svg'
// 		width='24'
// 		height='25'
// 		viewBox='0 0 24 25'
// 		fill='none'>
// 		<path
// 			fill-rule='evenodd'
// 			clip-rule='evenodd'
// 			d='M9 19.6938L17.2215 12.4998L9 5.30577V19.6938ZM9.9885 20.8233L18.2085 13.6293C18.3696 13.4885 18.4987 13.3149 18.5872 13.12C18.6757 12.9252 18.7215 12.7137 18.7215 12.4998C18.7215 12.2858 18.6757 12.0743 18.5872 11.8795C18.4987 11.6847 18.3696 11.5111 18.2085 11.3703L9.99 4.17627C9.0165 3.32727 7.5 4.01727 7.5 5.30577V19.6938C7.49975 19.9821 7.58263 20.2645 7.73871 20.5069C7.89479 20.7494 8.11746 20.9418 8.38004 21.0609C8.64262 21.1801 8.934 21.2211 9.21927 21.1789C9.50454 21.1368 9.77161 21.0133 9.9885 20.8233Z'
// 			fill='#ADB5BD'
// 		/>
// 	</svg>
// );

export default function Steps() {
	return (
		<section className='steps_to_book'>
			<Box>
				<div className='step_card'>
					<div className='step_header_container'>
						<h4>Step 1</h4>
						{/* <PlusIcon /> */}
					</div>
				</div>
			</Box>
		</section>
	);
}
