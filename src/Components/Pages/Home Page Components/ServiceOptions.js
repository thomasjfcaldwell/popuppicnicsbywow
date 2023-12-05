import React, { Component } from 'react';
import { Row, Col, Container, Image, Nav, Button } from 'react-bootstrap';
import Picnic from '../../../Images/ServiceOptions/PicnicBefore.jpg';
import backYard from '../../../Images/ServiceOptions/MoviesBefore.jpg';
import Delivery from '../../../Images/ServiceOptions/DeliveryBefore.jpg';
import '../../../App.css';

class ServiceOptions extends Component {
	state = {};
	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col lg={4} sm={12} className='serviceCols'>
							<div>
								<div className='locationsHeader'>
									<h5>POP-UP PICNICS</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={Picnic}
									alt='picnicImage'
								/>
							</div>
							<div>
								<p>
									Luxury Picnics in your Backyard, Park or Beach, that create
									lifelong memories
								</p>
							</div>
							<div>
								<Nav.Link href='/packages'>
									<Button>See More</Button>
								</Nav.Link>
							</div>
						</Col>
						<Col lg={4} sm={12} className='serviceCols'>
							<div>
								<div className='locationsHeader'>
									<h5>MOVIE NIGHTS</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={backYard}
									alt='BackYard Images'
								/>
							</div>
							<div className='serviceText'>
								<p>
									Grab the Popcorn and have a private viewing of a film or
									special events with your loved ones or work colleagues
								</p>
							</div>
							<div>
								<Nav.Link href='/backyardmovies'>
									<Button>See More</Button>
								</Nav.Link>
							</div>
						</Col>
						<Col lg={4} sm={12} className='serviceCols'>
							<div>
								<div className='locationsHeader'>
									<h5>CHARCUTERIE SERVICE</h5>
								</div>
								<Image
									fluid
									className='servicesImage'
									src={Delivery}
									alt='Delivery Images'
								/>
							</div>
							<div>
								<p>
									Bring it to a Party, Enjoy at Home for Small & Large Groups or
									Give as a Gift to Loved Ones, Employees or Clients
								</p>
							</div>
							<div>
								<Nav.Link href='/charcuterie'>
									<Button>See More</Button>
								</Nav.Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ServiceOptions;
