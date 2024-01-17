import React from 'react';
// import Ourstory from './Ourstory';
// import Testimonals from './Testimonals';
// import Steps from './Steps';
// import GalleryHome from './GalleryHome';
import ServiceOptions from './ServiceOptions';
import Hero from '../../Hero';

export default function Home() {
	return (
		<section className='main'>
			<Hero />
			<ServiceOptions />
			{/* <Ourstory />
			<GalleryHome /> */}
			{/* <Steps />
			<Testimonals /> */}
		</section>
	);
}
