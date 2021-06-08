import React from 'react';
import '/Users/thomascaldwell/wow/popuppicnics/src/styles/grid.css';
import '/Users/thomascaldwell/wow/popuppicnics/src/App.css';
import image1 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/pinksetup.jpg';
import image2 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/nauticalChicForGallery.jpg';
import image3 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/frozenSetUpTable.jpg';
import image4 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/basicbeautyforGallery.jpg';
import image5 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/coupleonbeachgalleryimage.jpg';
import image6 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/yellowSetup.jpg';
import image7 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/tropicSetUp.jpg';
import image8 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/frozensetUp.jpg';
import image9 from '/Users/thomascaldwell/wow/popuppicnics/src/Images/Gallery/movienight.table.jpg';
import { Container, Row } from 'react-bootstrap';

// 'col-md-6 col-lg-4 item';

const GalleryHome = () => {
	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	return (
		<div>
			<div fluid className='gallery-block grid-gallery' data-aos='fade-in'>
				<Container fluid>
					<Row>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image1}>
								<img
									className='img-fluid image scale-on-hover'
									src={image1}
									alt='picnicsetup'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image2}>
								<img
									className='img-fluid image scale-on-hover'
									src={image2}
									alt='beachpicnicsetup'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image6}>
								<img
									className='img-fluid image scale-on-hover'
									src={image6}
									alt='4personsetup'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image5}>
								<img
									className='img-fluid image scale-on-hover'
									src={image5}
									alt='dessertpackage'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image4}>
								<img
									className='img-fluid image scale-on-hover'
									src={image4}
									alt='sayidosign'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image8}>
								<img
									className='img-fluid image scale-on-hover'
									src={image8}
									alt='picnicsetup'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image7}>
								<img
									className='img-fluid image scale-on-hover'
									src={image7}
									alt='more food pics'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image3}>
								<img
									className='img-fluid image scale-on-hover'
									src={image3}
									alt='picnicsetuponhuntingtonbeach'
								/>
							</a>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 item'>
							<a className='lightbox' href={image9}>
								<img
									className='img-fluid image scale-on-hover'
									src={image9}
									alt='couple on beach'
								/>
							</a>
						</div>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default GalleryHome;
