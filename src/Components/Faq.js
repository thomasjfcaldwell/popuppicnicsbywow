import React, { Component } from 'react';
import { Row, Card, Container, Image, Navbar, Nav } from 'react-bootstrap';
import Contact from '../Components/Contact';
import '../styles/faq.css';
import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

class Faq extends Component {
	handleClick() {
		// do something meaningful, Promises, if/else, whatever, and then
		window.location.assign('https://www.wowevents.com/');
	}
	render() {
		return (
			<div>
				<Container fluid>
					<Row className='backgroundfont'>
						<Nav className='navbar navbar-expand-lg'>
							<Image
								lg={3}
								sm={12}
								className='navbar-brand'
								src={wowlogo}
								style={{
									width: '20%',
									margin: '0.2em',
									padding: '1em',
								}}
							/>
							<h1
								className='text-center'
								style={{
									fontFamily: 'Montserrat',
									fontWeight: '500',
									letterSpacing: '0.1em',
									margin: '0 auto',
									background: '#727272',
									color: 'white',
									padding: '0.2em',
								}}>
								FAQs
							</h1>

							<Navbar className='navbar-nav ml-auto' expand='lg'>
								<Navbar.Toggle aria-controls='responsive-navbar-nav' />
								<Navbar.Collapse id='responsive-navbar-nav'>
									<Nav
										// className='mr-auto'
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
										}}>
										<Nav.Link
											onClick={this.handleClick.bind(this)}
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											WOWEVENTS.COM
										</Nav.Link>
										<Nav.Link
											href='/'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											HOME PAGE
										</Nav.Link>
										<Nav.Link
											href='/packages'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											BOOK A PICNIC
										</Nav.Link>
										<Nav.Link
											href='/gallery'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											GALLERY
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Nav>
					</Row>
				</Container>
				<Container>
					<Card className='border-0'>
						<Card.Body
							className='mt-5'
							style={{
								fontFamily: 'Montserrat',
							}}>
							<Card.Title className='title'>
								Q: WHAT IS YOUR CANCELLATION POLICY?
							</Card.Title>
							<Card.Text className='text'>
								A: We do not offer any refunds, but we can change your
								reservation time without penalty up to 7 days before your POP-UP
								Picnic. A Date change less than 7 days prior will incur a $50
								fee, but you still have your remaining balance to use towards
								your future picnic. We also offer cancellation insurance that
								you can purchase when you are booking your picnic and the price
								is 10% of your total order with us with a $99 minimum.
								Cancellation Insurance must be purchased at the same time as
								your booking, more than 7 days prior to the confirmed POP-UP
								Picnic reservation date and cannot be ordered less than 7 days
								prior. Cancellation Insurance includes 2 complimentary
								reschedules or a full refund of all payments made.
							</Card.Text>

							<Card.Title className='title'>
								Q: ARE THERE ANY OTHER ADDITIONAL FEES ADDED TO THE ITEMS and
								SERVICES I ORDER?
							</Card.Title>
							<Card.Text className='text'>
								A: Yes. Applicable Sales tax and a 20% Service Fee will be added
								on to the total amount of your order.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT HAPPENS IF I DAMAGE, REMOVE OR LOSE AN ITEM PROVIDED BY
								POP-UP PICNICS BY WOW! EVENTS?
							</Card.Title>
							<Card.Text className='text'>
								A: Any food or beverage you purchase from POP-UP Picnics by WOW!
								Events belongs to you and you are welcome to take it with you.
								All other equipment belongs to POP-UP Picnics by WOW! Events and
								is to be returned in the same condition as you found it. Any
								loss or damage to the equipment will be charged for accordingly.
								Stains to linen and equipment will be cleaned accordingly and
								may result in dry cleaning or professional cleaning charges
								using the credit card used to make the POP-UP Picnic
								reservation. 
							</Card.Text>
							<Card.Title className='title'>
								Q: CAN WE HOLD OR DEPOSIT A PICNIC DATE?
							</Card.Title>
							<Card.Text className='text'>
								A: The only way to secure a POP-UP Picnic reservation is to pay
								in full. Once full payment is received, your reservation will be
								confirmed and secured.
							</Card.Text>
							<Card.Title className='title'>
								Q: IS THERE A MINIMUM ORDER REQUIRED FOR A POP-UP PICNIC?
							</Card.Title>
							<Card.Text className='text'>
								A: We do require a minimum order of $600 for Saturday and Sunday
								Picnics in June- September.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT FORM OF PAYMENT DO YOU ACCEPT?
							</Card.Title>
							<Card.Text className='text'>
								A: We accept Credit card payments through our website. Please
								email us for any other types of payments.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT IS INCLUDED IN THE POP-UP PICNICS PACKAGE?
							</Card.Title>
							<Card.Text className='text'>
								A: All Packages include a Picnic Table, Beach Blanket, Pillows,
								Table and Floor Décor, Plates, service ware, Napkins, Delivery,
								Set-Up and Clean-Up……………. The “Bells and Whistles” Package also
								includes Umbrella or Teepee, Small Cheese Box, Bucket of Ice
								with scoop, Beverage Package and Blanket Basket.
							</Card.Text>
							<Card.Title className='title'>
								Q: HOW DO I SELECT A PICNIC LOCATION?
							</Card.Title>
							<Card.Text className='text'>
								A: Choose from one of our popular preferred POP-UP Picnics
								Locations or email us to collaborate on a special picnic site
								(including private homes or businesses). If you have an address,
								landmark or GPS coordinates, include them with your email to us.
								Although we cant accommodate all special requests, we promise to
								do our best. When dealing with steep or rough terrain, sand,,
								etc. we may not be able to navigate with all of our equipment,
								so we try to keep our locations within 35 yards of delivery
								vehicle access. Our Popular Preferred Picnics Locations can be
								viewed here (Include link to google earth for each of our
								Preferred Picnic sites)
							</Card.Text>
							<Card.Title className='title'>
								Q: CAN WE BRING OUR OWN FOOD AND BEVERAGES?
							</Card.Title>
							<Card.Text className='text'>
								A: Absolutely! Although we offer a variety of food and beverage
								options, we also understand that some people love to supply
								their own food and beverages and that is ok! Our job is to
								provide a beautiful setting for your POP-UP Picnics, and of
								course make your event as stress free as possible! It is
								important to know that alcohol is strictly prohibited at public
								parks and beaches but is welcome at private residences and
								businesses.
							</Card.Text>
							<Card.Title className='title'>
								Q: DOES THE POP-UP PICNICS HOST STAY DURING OUR PICNIC?
							</Card.Title>
							<Card.Text className='text'>
								A: No, we leave after we welcome you and get you settled and
								return once your picnic reservation ends. If you need us during
								your picnic, before your reservation ends, you can call or text
								your POP-UP Picnics Host (whose number will be included in your
								confirmation email and they can be there within 30 minutes.)
							</Card.Text>
							<Card.Title className='title'>
								Q: CAN WE LEAVE WHENEVER WE WANT DURING OUR PICNIC?
							</Card.Title>
							<Card.Text className='text'>
								A: If you would like to leave earlier than the scheduled and
								confirmed end time, please give your POP-UP Picnic Host a
								30-minute notice via phone call or text. You are responsible for
								all the picnic items until we are able to return to clean up and
								pack up.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT HAPPENS IF ONE OR MORE OF MY PAID GUESTS CANNOT MAKE MY
								BOOKING ON THE DAY OF OUR POP-UP PICNIC?
							</Card.Title>
							<Card.Text className='text'>
								A: Since we do not offer refunds, we suggest that you find
								someone to take the place of anyone that has been paid for and
								cannot attend. We understand that sickness and unexpected
								situations do occur, so your best option is to find someone else
								who can attend and enjoy this amazing POP-UP Picnic experience.
							</Card.Text>
							<Card.Title className='title'>
								Q: SHOULD I INCLUDE MY KIDS IN THE GUEST COUNT WHEN BOOKING?
							</Card.Title>
							<Card.Text className='text'>
								A: If you are planning a picnic for a group of adults and young
								children, we suggest you only count the adults and add a note
								when booking that there will be young kids. We usually find that
								the kids tend to run around and or sit on parents’ laps and we
								do not charge extra for this. If you would like a place set at
								the table for any children, we suggest including them in your
								headcount.
							</Card.Text>
							<Card.Title className='title'>
								Q: DO I NEED A PERMIT FOR MY PICNIC?
							</Card.Title>
							<Card.Text className='text'>
								A: That depends on the location, number of guests and a few
								other factors. POP-UP Picnics Packages offered include any
								required permits. If you request a special picnic site, not
								offered on our website, we will let you know if you will need a
								permit and can help you with the process.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT ARE THE FOOD AND BEVERAGE OPTIONS?
							</Card.Title>
							<Card.Text className='text'>
								A: Check out our website which offers a variety of food and
								beverage options. You are also welcome to bring your own food
								and beverages. Alcohol is not permitted at public parks and
								beaches.
							</Card.Text>
							<Card.Title className='title'>
								Q: DO YOU OFFER VEGAN, VEGETARIAN OR GLUTEN FREE, DAIRY FREE,
								LOW SUGAR OPTIONS?
							</Card.Title>
							<Card.Text className='text'>
								A: YES! Our food options include something for everyone.
							</Card.Text>
							<Card.Title className='title'>
								Q: WHAT ABOUT BAD WEATHER?
							</Card.Title>
							<Card.Text className='text'>
								A: While it is rare, we sometimes need to move locations or
								change your picnic date due to bad weather. If it looks like it
								may affect your reservation, we will contact you in advance of
								your scheduled picnic to discuss your options. There is no
								cancellation charge due to bad weather
							</Card.Text>
							<Card.Text className='text-center font-weight-bold mt-5'>
								SEE OUR FULL TERMS AND CONDITIONS OF SERVICE{' '}
								<a
									style={{
										color: '#F78F1E',
									}}
									href='https://drive.google.com/file/d/1hMFH8QIacQqcMDuuAaMUssqPi2dhXsLH/view?usp=sharing'>
									HERE{' '}
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Container>
				<Contact />
			</div>
		);
	}
}

export default Faq;
