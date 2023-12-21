import React from 'react';
import step1 from '../../../Images/Steps/step1.png';
import step2 from '../../../Images/Steps/step2.png';
import step3 from '../../../Images/Steps/step3.png';
import step4 from '../../../Images/Steps/step4.png';

export default function Steps() {
	return (
		<section className='steps_to_book'>
			<div>
				<h5>WOW! POP-UP PICNICS PROCESS</h5>
			</div>
			<img src={step1} alt='Responsive' />
			<img src={step2} alt='Responsive' />
			<img src={step3} alt='Responsive' />
			<img src={step4} alt='Responsive' />
		</section>
	);
}
