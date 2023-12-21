import React from 'react';
import prettyInPink from '../../../Images/Themes/prettyinPink.jpg';
import nauticalChic from '../../../Images/Themes/nauticalChic.jpg';
import takeMeToCapri from '../../../Images/Themes/takemetoCapri.jpg';
import NaturalLuxury from '../../../Images/Themes/naturalLuxury.jpg';

export default function Themes() {
	return (
		<div>
			<div>
				<h5>STEP 2: CHOOSE A DESIGN THEME</h5>
			</div>

			<div>
				<p>Pretty in Pink</p>
			</div>
			<div>
				<img src={prettyInPink} alt='pretty' />
			</div>
			<div>
				<p>Love - Femininity - Relaxation</p>
			</div>

			<div>
				<p>Nautical Chic</p>
			</div>
			<div>
				<img src={nauticalChic} alt='chic' />
			</div>
			<div>
				<p>Elegant - Stylish - Ocean Blue</p>
			</div>

			<div>
				<p>Take me to Capri</p>
			</div>
			<div>
				<img fluid src={takeMeToCapri} alt='capri' />
			</div>
			<div>
				<p>Dream - Happy - Paradise</p>
			</div>

			<div>
				<p>Bohemian Luxury</p>
			</div>
			<div>
				<img fluid src={NaturalLuxury} className='themeImage' alt='natural' />
			</div>
			<div>
				<p>Extravagant - Rustic - Comfortable</p>
			</div>
		</div>
	);
}
