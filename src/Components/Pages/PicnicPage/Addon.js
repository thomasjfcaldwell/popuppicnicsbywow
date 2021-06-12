import React from 'react';
import { addOnData } from '../../Data';
import { Row, Col, Container, Image, CardDeck, Card } from 'react-bootstrap';
import '../../../styles/addon.css';

const Addon = () => {
	return (
		<>
			<Container>
				<Row className='headerContainer'>
					<div className='locationsHeader'>
						<h5
							style={{
								marginTop: '1em',
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
								background: '#727272',
								color: 'white',
								padding: '0.4em',
							}}>
							STEP 4: SELECT ADDITIONAL OPTIONS
						</h5>
					</div>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<CardDeck className='border-0'>
							{addOnData.map((data, key) => {
								return (
									<div
										className='col-md-6 col-lg-4 col-xl-3'
										style={{
											display: 'flex',
											border: 'none',
											justifyContent: 'center',
										}}>
										<Card
											style={{ width: '22rem',
										border:'none' }}
											className='addon__card'
											key={key}>
											<p className='addon__title'>{data.title}</p>
											<div>
												<Image
													className='addon__image'
													src={data.image}
													alt={data.alt}
												/>
											</div>
											<p className='addon__price'>${data.price}</p>
											{/* <p className='addon__description'>{data.description}</p> */}
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
