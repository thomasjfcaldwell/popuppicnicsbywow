import React from 'react';
import image1 from '../../../Images/Gallery/pinksetup.jpg';
import image2 from '../../../Images/Gallery/nauticalChicForGallery.jpg';
import image3 from '../../../Images/Gallery/frozenSetUpTable.jpg';
import image4 from '../../../Images/Gallery/basicbeautyforGallery.jpg';
import image5 from '../../../Images/Gallery/coupleonbeachgalleryimage.jpg';
import image6 from '../../../Images/Gallery/yellowSetup.jpg';
import image7 from '../../../Images/Gallery/tropicSetUp.jpg';
import image8 from '../../../Images/Gallery/frozensetUp.jpg';
import image9 from '../../../Images/Gallery/movienight.table.jpg';

export default function GalleryHome() {
	return (
		<section className='gallery'>
			<div>
				<div>
					<img src={image1} alt='picnicsetup' />
				</div>
				<div>
					<img src={image2} alt='beachpicnicsetup' />
				</div>
				<div>
					<img src={image6} alt='4personsetup' />
				</div>
				<div>
					<img src={image5} alt='dessertpackage' />
				</div>
				<div>
					<img src={image4} alt='sayidosign' />
				</div>
				<div>
					<img src={image8} alt='picnicsetup' />
				</div>
				<div>
					<img src={image7} alt='more food pics' />
				</div>
				<div>
					<img src={image3} alt='picnicsetuponhuntingtonbeach' />
				</div>
				<div>
					<img src={image9} alt='couple on beach' />
				</div>
			</div>
		</section>
	);
}
