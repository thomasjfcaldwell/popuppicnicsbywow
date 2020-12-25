import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import '../App.css';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
    const length = slides.length;
    

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
			{SliderData.map((slide, id) => {
                
				return (
                   
					<div
                    className={id === current ? 'slide active' : 'slide'}
                    key={id}>
						{id === current && (
							<img
								src={slide.image}
								className='imageslide'
							/>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;