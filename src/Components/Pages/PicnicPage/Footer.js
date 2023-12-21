import React from 'react';
import HuntState from '../../../Images/Locations/HuntingtonStateWeb.jpg';
import Doheny from '../../../Images/Locations/doheneyBeachWeb.jpg';
import Saltcreek from '../../../Images/Locations/saltcreekbeachWeb.jpg';
import Bstreet from '../../../Images/Locations/BstreetWeb.jpg';
import Corona from '../../../Images/Locations/coronaDelMarWeb.jpg';
import Hilltop from '../../../Images/Locations/HillTopParkWeb.jpg';
import Heisler from '../../../Images/Locations/heislerpark.jpg';

export default function Footer() {
	return (
		<div>
			<div className='locationsHeader'>
				<h5>STEP 3: SELECT A PREFERRED PICNIC LOCATION</h5>
			</div>

			<div>
				<p className='locationsText'>HUNTINGTON BEACH</p>
			</div>

			<img
				src={HuntState}
				alt='huntington beach state beach'
				className='images'
			/>
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$35</h5>
				</div>
			</div>

			<div>
				<p className='locationsText'>NEWPORT BEACHES</p>
			</div>

			<img src={Bstreet} alt='bstreet in Newport' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55 </h5>
					<span>**Beach Picnics Not Allowed**</span>
				</div>
			</div>

			<div>
				<p className='locationsText'>CORONA DEL MAR BEACH</p>
			</div>
			<img src={Corona} alt='Corona Del Mar' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>

			<div>
				<p className='locationsText'>DANA POINT</p>
			</div>
			<img src={Saltcreek} alt='Salt Creek Beach' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>

			<div>
				<p className='locationsText'>DOHENY BEACH</p>
			</div>
			<img src={Doheny} alt='Doheny State Beach' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>

			<div>
				<p className='locationsText'>LAGUNA BEACH</p>
			</div>
			<img src={Heisler} alt='Heisler Picnic Site' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>

			<div>
				<p className='locationsText'>SAN CLEMENTE</p>
			</div>

			<img src={Saltcreek} alt='Calafia Beach Picnic Site' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>
			<div>
				<p className='locationsText'>SIGNAL HILL PARK</p>
			</div>
			<img src={Hilltop} alt='Hilltop Park in Signal Hill' className='images' />
			<div className='locationDetails'>
				<div>
					<h5 className='locationPrice'>$55</h5>
				</div>
			</div>

			<p>20% Service Fee and Sales tax will be added to Pricing</p>
		</div>
	);
}
