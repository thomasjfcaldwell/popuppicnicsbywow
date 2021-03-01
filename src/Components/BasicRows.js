import React, { Component } from 'react';
import { Row, Nav, Container, Navbar, Image } from 'react-bootstrap';
import '../styles/grid.css';
import '../App.css';
import image1 from '../Images/Gallery/pinksetup.jpg';
import image2 from '../Images/Gallery/4personWeb.jpg';
import image3 from '../Images/couple.sunset.jpg';
import image4 from '../Images/sayidoweb.jpg';
import image5 from '../Images/Gallery/coupleonbeachgalleryimage.jpg';
import image6 from '../Images/Gallery/blueandredsetup.jpg';
import image7 from '../Images/Gallery/tropicSetUp.jpg';
import image8 from '../Images/Gallery/coupleonbeachgalleryimage1.jpg';
import image9 from '../Images/Gallery/movienight.table.jpg';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class BasicRows extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<div fluid className='gallery-block grid-gallery'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image1}>
									<img
										className='img-fluid image scale-on-hover'
										src={image1}
										alt='picnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image2}>
									<img
										className='img-fluid image scale-on-hover'
										src={image2}
										alt='beachpicnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image6}>
									<img
										className='img-fluid image scale-on-hover'
										src={image6}
										alt='4personsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image5}>
									<img
										className='img-fluid image scale-on-hover'
										src={image5}
										alt='dessertpackage'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image4}>
									<img
										className='img-fluid image scale-on-hover'
										src={image4}
										alt='sayidosign'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image8}>
									<img
										className='img-fluid image scale-on-hover'
										src={image8}
										alt='picnicsetup'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image7}>
									<img
										className='img-fluid image scale-on-hover'
										src={image7}
										alt='more food pics'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image3}>
									<img
										className='img-fluid image scale-on-hover'
										src={image3}
										alt='picnicsetuponhuntingtonbeach'
									/>
								</a>
							</div>
							<div className='col-md-6 col-lg-4 item'>
								<a className='lightbox' href={image9}>
									<img
										className='img-fluid image scale-on-hover'
										src={image9}
										alt='couple on beach'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BasicRows;
