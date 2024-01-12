import React from 'react';
import Picnic from '../../../Images/ServiceOptions/PicnicBefore.jpg';
import backYard from '../../../Images/ServiceOptions/MoviesBefore.jpg';
import Delivery from '../../../Images/ServiceOptions/DeliveryBefore.jpg';

export default function ServiceOptions() {
	return (
		<section className='service_options'>
			<div>
				<div className='locationsHeader'>
					<h5>POP-UP PICNICS</h5>
				</div>
				<img className='servicesImage' src={Picnic} alt='picnicImage' />
			</div>
			<div>
				<p>
					Luxury Picnics in your Backyard, Park or Beach, that create lifelong
					memories
				</p>
			</div>
			<div>
				<a href='/packages'>See More</a>
			</div>

			<div>
				<div className='locationsHeader'>
					<h5>MOVIE NIGHTS</h5>
				</div>
				<img className='servicesImage' src={backYard} alt='BackYard Images' />
			</div>
			<div className='serviceText'>
				<p>
					Grab the Popcorn and have a private viewing of a film or special
					events with your loved ones or work colleagues
				</p>
			</div>
			<div>
				<a href='/backyardmovies'>See More</a>
			</div>

			<div>
				<div className='locationsHeader'>
					<h5>CHARCUTERIE SERVICE</h5>
				</div>
				<img className='servicesImage' src={Delivery} alt='Delivery Images' />
			</div>
			<div>
				<p>
					Bring it to a Party, Enjoy at Home for Small & Large Groups or Give as
					a Gift to Loved Ones, Employees or Clients
				</p>
			</div>
			<div>
				<a href='/charcuterie'>See More</a>
			</div>
		</section>
	);
}
