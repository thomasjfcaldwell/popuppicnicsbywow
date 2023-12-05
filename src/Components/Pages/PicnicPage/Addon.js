import React from 'react';
import { addOnData } from '../../Data';
import { Row, Col, Container, Image, CardDeck, Card } from 'react-bootstrap';

const Addon = () => {
	return (
		<>
			<Container>
				<Row className='headerContainer'>
					<div className='locationsHeader'>
						<h5>STEP 4: SELECT ADDITIONAL OPTIONS</h5>
					</div>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<CardDeck className='border-0'>
							{addOnData.map((data, key) => {
								return (
									<div className='col-md-6 col-lg-4 col-xl-3'>
										<Card className='addon__card' key={key}>
											<p className='addon__title'>{data.title}</p>
											<div>
												<Image
													className='addon__image'
													src={data.image}
													alt={data.alt}
												/>
											</div>
											<p className='addon__price'>${data.price}</p>
										</Card>
									</div>
								);
							})}
						</CardDeck>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Addon;
