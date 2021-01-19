import React from 'react';
// import { db } from './Firebase';
import {
	Row,
	Col,
	Card,
	Image,
	ListGroup,
	ListGroupItem,
	Form,
	Button,
} from 'react-bootstrap';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

import facebook from '../Images/Icons/facebook.png';
import twitter from '../Images/Icons/twitter.png';
import instagram from '../Images/Icons/instagram.png';

import '../styles/Contact.css';
import '../styles/sea.css';

const Contact = () => {
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [phone, setPhone] = useState('');
	// const [date, setDate] = useState('');
	// const [location, setLocation] = useState('');
	// const [message, setMessage] = useState('');
	// const [loader, setLoader] = useState(false);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setLoader(true);

	// 	db.collection('contacts')
	// 		.add({
	// 			name: name,
	// 			email: email,
	// 			phone: phone,
	// 			date: date,
	// 			location: location,
	// 			message: message,
	// 		})
	// 		.then(() => {
	// 			alert('Your message has been submitted');
	// 			setLoader(false);
	// 		})
	// 		.catch((error) => {
	// 			alert(error.message);
	// 			setLoader(false);
	// 		});
	// 	setName('');
	// 	setEmail('');
	// 	setPhone('');
	// 	setDate('');
	// 	setLocation('');
	// 	setMessage('');
	// };

	return (
		<div
			style={{
				fontFamily: 'Montserrat',
			}}>
			<Row
				style={{
					// background: '#F78F1E',
					marginTop: '0.5em',
				}}>
				<Col xsm={12} sm={12} lg={6}>
					<div className='form'>
						<Form
							action='https://docs.google.com/forms/u/1/d/e/1FAIpQLScj4ukKgFyRHGmluWBoJnVHSan1sGfk_Cc26ZyfUl1uceHYsA/formResponse'
							method='post'
							style={{
								background: ' #F78F1E',
								padding: '60px',
								maxWidth: 'calc(100%-60px)',
							}}>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}>
								<h1>Contact Us</h1>
							</div>
							<div className='form-element'>
								<span>Name</span>
								<input
									type='text'
									required
									name='entry.2090504961'
									placeholder='Name'></input>
							</div>
							<div className='form-element'>
								<span>Email</span>
								<input
									type='email'
									required
									name='entry.95460220'
									placeholder='Email Address'></input>
							</div>
							<div className='form-element'>
								<span>Phone</span>
								<input
									type='Phone'
									name='entry.1126141339'
									placeholder='Phone Number'></input>
							</div>
							<div className='form-element'>
								<span>Your Message</span>
								<textarea
									name='entry.727173671'
									required
									id=''
									cols='30'
									rows='10'></textarea>
							</div>
							<Button
								type='submit'
								style={{
									width: '100%',
									padding: '20px',
									color: '#F78F1E',
									background: 'white',
									borderRadius: '5px',
									border: 'none',
								}}>
								Send Message
							</Button>
						</Form>
					</div>
				</Col>
				<Col sm={12} lg={6} className='bg-white'>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Card className='bg-transparent border-0 mt-5'>
							<Card.Img
								variant='top'
								src={wowlogo}
								style={{
									width: '50%',
									margin: '0 auto',
								}}
							/>

							<ul className='nobullets'>
								<li class>419 Main St Suite 433</li>
								<li>Huntington Beach</li> <li>CA 92648</li>
							</ul>

							<ListGroup className='list-group-flush text-center border-0'>
								<ListGroupItem
									className='border-0 bg-transparent'
									style={{
										margin: '-0.5em',
									}}>
									<strong>Telephone</strong> 714.848.9698
								</ListGroupItem>
								<ListGroupItem className='bg-transparent'>
									<strong>Email</strong> hello@wowevents.com
								</ListGroupItem>
							</ListGroup>
							<Card.Body className='text-center '>
								<Card.Link href='https://www.facebook.com/popuppicnicsbywow'>
									<Image src={facebook} className='socialmedia' />
								</Card.Link>
								<Card.Link href='https://twitter.com/WowPopUpPicnics'>
									<Image src={twitter} className='socialmedia' />
								</Card.Link>
								<Card.Link href='https://www.instagram.com/popuppicnicsbywow/'>
									<Image src={instagram} className='socialmedia' />
								</Card.Link>
							</Card.Body>
						</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Contact;
