import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	ListGroup,
	Image,
	Navbar,
	Nav,
	NavDropdown,
	Button,
	Carousel,
} from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<div className='container-fluids pb-0 mb-0 justify-content-center text-light '>
				<div className='row my-5 justify-content-center py-5'>
					<div className='col-11'>
						<div className='row '>
							<div className='col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a'>
								<h3 className='mb-md-0 mb-5 bold-text'>WOW Events</h3>
							</div>
							<div className='col-xl-2 col-md-4 col-sm-4 col-12'>
								<h6 className='mb-3 mb-lg-4 bold-text '>
									<b>MENU</b>
								</h6>
								<ul className='list-unstyled'>
									<li>Home</li>
									<li>Packages</li>
									<li>Gallery</li>
									<li>FAQs</li>
								</ul>
							</div>
							<div className='col-xl-2 col-md-4 col-sm-4 col-12'>
								<h6 className='mb-3 mb-lg-4 bold-text mt-sm-0 mt-5'>
									<b>ADDRESS</b>
								</h6>
								<p className='mb-1'>16152 Beach Blvd #231</p>
								<p>Huntington Beach, CA 92647</p>
							</div>
						</div>
						<div className='row '>
							<div className='col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end'>
								<p className='social text-muted mb-0 pb-0 bold-text'>
									{' '}
									<span className='mx-2'>
										<i className='fa fa-facebook' aria-hidden='true'></i>
									</span>{' '}
									<span className='mx-2'>
										<i className='fa fa-linkedin-square' aria-hidden='true'></i>
									</span>{' '}
									<span className='mx-2'>
										<i className='fa fa-twitter' aria-hidden='true'></i>
									</span>{' '}
									<span className='mx-2'>
										<i className='fa fa-instagram' aria-hidden='true'> </i>
									</span>{' '}
								</p>

							</div>
							<div className='col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end '>
								<h6 className='mt-55 mt-2 text-muted bold-text'>
									<b>TELEPHONE</b>
								</h6>
								<small>
									{' '}
									<span>
										<i className='fa fa-envelope' aria-hidden='true'></i>
									</span>{' '}
									714.228.2882
								</small>
							</div>
							<div className='col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 '>
								<h6 className='bold-text'>
									<b>EMAIL</b>
								</h6>
								<small>
									<span>
										<i className='fa fa-envelope' aria-hidden='true'></i>
									</span>{' '}
									melissa@wowevents.com
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Footer 