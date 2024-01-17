import React from 'react';
import { styled } from '@mui/material';
import { serviceData } from './HomePageData';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

export default function ServiceOptions() {
	return (
		<TypesOfService className='service_options'>
			{serviceData.map((data, key) => {
				return (
					<Card key={key}>
						<ServiceHeader>{data.title}</ServiceHeader>
						<Img className='servicesImage' src={data.image} alt='picnicImage' />
						<ServiceDescription>{data.description}</ServiceDescription>
						<Link href={data.link} />
					</Card>
				);
			})}
		</TypesOfService>
	);
}
const TypesOfService = styled('section')({
	backgroundColor: 'blue',
});
const ServiceHeader = styled('h5')({
	fontSize: '150px',
	margin: '0',
});
const ServiceDescription = styled('p')({
	color: 'green',
});
const Img = styled('img')({
	width: '300px',
});
