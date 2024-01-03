import { React, useState } from 'react';

function PicnicQuestions() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='picnics_fqa'>
			<button
				className='btn btn-primary custom-btn'
				style={{ width: '300px', height: '50px' }}
				onClick={handleShow}>
				See FAQ Here
			</button>
			<div
				animation={true}
				show={show}
				onHide={handleClose}
				backdrop='static'
				scrollable={true}
				keyboard={false}>
				<div closeButton>
					<h5>FAQs</h5>
				</div>
				<div scrollable={true}>
					<div>
						<h5>Q: WHAT IS YOUR CANCELLATION POLICY?</h5>
						<p>
							A: We do not offer any refunds, but we can change your reservation
							time without penalty up to 7 days before your POP-UP Picnic. A
							Date change less than 7 days prior will incur a $50 fee, but you
							still have your remaining balance to use towards your future
							picnic. We also offer cancellation insurance that you can purchase
							when you are booking your picnic and the price is 10% of your
							total order with us with a $99 minimum. Cancellation Insurance
							must be purchased at the same time as your booking, more than 7
							days prior to the confirmed POP-UP Picnic reservation date and
							cannot be ordered less than 7 days prior. Cancellation Insurance
							includes 2 complimentary reschedules or a full refund of all
							payments made.
						</p>

						<h5>
							Q: ARE THERE ANY OTHER ADDITIONAL FEES ADDED TO THE ITEMS and
							SERVICES I ORDER?
						</h5>
						<p>
							A: Yes. Applicable Sales tax and a 20% Service Fee will be added
							on to the total amount of your order.
						</p>
						<h5>
							Q: WHAT HAPPENS IF I DAMAGE, REMOVE OR LOSE AN ITEM PROVIDED BY
							POP-UP PICNICS BY WOW! EVENTS?
						</h5>
						<p>
							A: Any food or beverage you purchase from POP-UP Picnics by WOW!
							Events belongs to you and you are welcome to take it with you. All
							other equipment belongs to POP-UP Picnics by WOW! Events and is to
							be returned in the same condition as you found it. Any loss or
							damage to the equipment will be charged for accordingly. Stains to
							linen and equipment will be cleaned accordingly and may result in
							dry cleaning or professional cleaning charges using the credit
							card used to make the POP-UP Picnic reservation. 
						</p>
						<h5>Q: CAN WE HOLD OR DEPOSIT A PICNIC DATE?</h5>
						<p>
							A: The only way to secure a POP-UP Picnic reservation is to pay in
							full. Once full payment is received, your reservation will be
							confirmed and secured.
						</p>
						<h5>Q: IS THERE A MINIMUM ORDER REQUIRED FOR A POP-UP PICNIC?</h5>
						<p>
							A: We do require a minimum order of $600 (Before Tax and Service
							Charge) for Saturday and Sunday Picnics in April - September. All
							USA Holiday Weekends require a minimum order of $1000 (Before Tax
							and Service Charge)
						</p>
						<h5>Q: WHAT WEEKENDS ARE CONSIDERED HOLIDAY WEEKENDS?</h5>
						<p>
							A:Memorial Day Weekend, Independence Day Weekend, Labor Day
							Weekend - September ,Thanksgiving Weekend – November, Christmas
							Weekend December, New Year's Weekend – December Mother’s Day – May
							8th-9th Father’s Day – June 19th-20th Valentine’s Day – February
							12th-14th 2022
						</p>
						<h5>Q: WHAT FORM OF PAYMENT DO YOU ACCEPT?</h5>
						<p>
							A: We accept Credit card payments through our website. Please
							email us for any other types of payments.
						</p>
						<h5>Q: WHAT IS INCLUDED IN THE POP-UP PICNICS PACKAGE?</h5>
						<p>
							A: All Packages include a Picnic Table, Beach Blanket, Pillows,
							Table and Floor Décor, Plates, service ware, Napkins, Delivery,
							Set-Up and Clean-Up. The “Bells and Whistles” Package also
							includes Umbrella or Teepee, Small Cheese Box, Bucket of Ice with
							scoop, Beverage Package and Blanket Basket.
						</p>
						<h5>Q: HOW DO I SELECT A PICNIC LOCATION?</h5>
						<p>
							A: Choose from one of our popular preferred POP-UP Picnics
							Locations or email us to collaborate on a special picnic site
							(including private homes or businesses). If you have an address,
							landmark or GPS coordinates, include them with your email to us.
							Although we cant accommodate all special requests, we promise to
							do our best. When dealing with steep or rough terrain, sand,, etc.
							we may not be able to navigate with all of our equipment, so we
							try to keep our locations within 35 yards of delivery vehicle
							access.
						</p>
						<h5>Q: CAN WE BRING OUR OWN FOOD AND BEVERAGES?</h5>
						<p>
							A: Absolutely! Although we offer a variety of food and beverage
							options, we also understand that some people love to supply their
							own food and beverages and that is ok! Our job is to provide a
							beautiful setting for your POP-UP Picnics, and of course make your
							event as stress free as possible! It is important to know that
							alcohol is strictly prohibited at public parks and beaches but is
							welcome at private residences and businesses.
						</p>
						<h5>Q: DOES THE POP-UP PICNICS HOST STAY DURING OUR PICNIC?</h5>
						<p>
							A: No, we leave after we welcome you and get you settled and
							return once your picnic reservation ends. If you need us during
							your picnic, before your reservation ends, you can call or text
							your POP-UP Picnics Host (whose number will be included in your
							confirmation email and they can be there within 30 minutes.)
						</p>
						<h5>Q: CAN WE LEAVE WHENEVER WE WANT DURING OUR PICNIC?</h5>
						<p>
							A: If you would like to leave earlier than the scheduled and
							confirmed end time, please give your POP-UP Picnic Host a
							30-minute notice via phone call or text. You are responsible for
							all the picnic items until we are able to return to clean up and
							pack up.
						</p>
						<h5>
							Q: WHAT HAPPENS IF ONE OR MORE OF MY PAID GUESTS CANNOT MAKE MY
							BOOKING ON THE DAY OF OUR POP-UP PICNIC?
						</h5>
						<p>
							A: Since we do not offer refunds, we suggest that you find someone
							to take the place of anyone that has been paid for and cannot
							attend. We understand that sickness and unexpected situations do
							occur, so your best option is to find someone else who can attend
							and enjoy this amazing POP-UP Picnic experience.
						</p>
						<h5>
							Q: SHOULD I INCLUDE MY KIDS IN THE GUEST COUNT WHEN BOOKING?
						</h5>
						<p>
							A: If you are planning a picnic for a group of adults and young
							children, we suggest you only count the adults and add a note when
							booking that there will be young kids. We usually find that the
							kids tend to run around and or sit on parents’ laps and we do not
							charge extra for this. If you would like a place set at the table
							for any children, we suggest including them in your headcount.
						</p>
						<h5>Q: DO I NEED A PERMIT FOR MY PICNIC?</h5>
						<p>
							A: That depends on the location, number of guests and a few other
							factors. POP Up Picnics packages do not include permits but we are
							happy to help you with the permit process. Please note- most state
							and city beaches parks will require at least 3 weeks for a permit
							to be approved.
						</p>
						<h5>Q: WHAT ARE THE FOOD AND BEVERAGE OPTIONS?</h5>
						<p>
							A: Check out our website which offers a variety of food and
							beverage options. You are also welcome to bring your own food and
							beverages. Alcohol is not permitted at public parks and beaches.
						</p>
						<h5>
							Q: DO YOU OFFER VEGAN, VEGETARIAN OR GLUTEN FREE, DAIRY FREE, LOW
							SUGAR OPTIONS?
						</h5>
						<p>A: YES! Our food options include something for everyone.</p>
						<h5>Q: WHAT ABOUT BAD WEATHER?</h5>
						<p>
							A: While it is rare, we sometimes need to move locations or change
							your picnic date due to bad weather. If it looks like it may
							affect your reservation, we will contact you in advance of your
							scheduled picnic to discuss your options. There is no cancellation
							charge due to bad weather
						</p>
						<p>
							SEE OUR FULL TERMS AND CONDITIONS OF SERVICE{' '}
							<a href='https://drive.google.com/file/d/1xp0-6ZsewfpNO__w8tI-xYyPg6Me_afA/view?usp=sharing'>
								here
							</a>
						</p>
					</div>
				</div>
				<div>
					<button onClick={handleClose}>Close</button>
				</div>
			</div>
		</div>
	);
}

export default PicnicQuestions;
