import React from 'react';
import Ourstory from './Ourstory';
import Testimonals from './Testimonals';
import Steps from './Steps';
import GalleryHome from './GalleryHome';
import ServiceOptions from './ServiceOptions';

export default function Home() {
	return (
		<section className='main'>
			<ServiceOptions />
			<Ourstory />
			<GalleryHome />
			<Steps />
			<Testimonals />
		</section>
	);
}
