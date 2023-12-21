import React from 'react';
import { addOnData } from '../../Data';

export default function Addon() {
	return (
		<div>
			<div className='locationsHeader'>
				<h5>STEP 4: SELECT ADDITIONAL OPTIONS</h5>
			</div>

			{addOnData.map((data, key) => {
				return (
					<div key={key}>
						<p className='addon__title'>{data.title}</p>
						<div>
							<img className='addon__image' src={data.image} alt={data.alt} />
						</div>
						<p className='addon__price'>${data.price}</p>
					</div>
				);
			})}
		</div>
	);
}
