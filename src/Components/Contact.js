import React, { useState } from 'react';
import { db } from './Firebase';
import {
	Form,
	Button,
	Row,
	Col,
	Card,
	Image,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

import facebook from '../Images/Icons/facebook.png';
import twitter from '../Images/Icons/twitter.png';
import instagram from '../Images/Icons/instagram.png';

import '../styles/Contact.css';
import '../styles/sea.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [date, setDate] = useState('');
	const [location, setLocation] = useState('');
	const [message, setMessage] = useState('');
	const [loader, setLoader] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);

		db.collection('contacts')
			.add({
				name: name,
				email: email,
				phone: phone,
				date: date,
				location: location,
				message: message,
			})
			.then(() => {
				alert('Your message has been submitted');
				setLoader(false);
			})
			.catch((error) => {
				alert(error.message);
				setLoader(false);
			});
		setName('');
		setEmail('');
		setPhone('');
		setDate('');
		setLocation('');
		setMessage('');
	};

	return (
		<div
			style={{
				fontFamily: 'Montserrat',
			}}>
			<Row
				style={{
					background: '#F78F1E',
					marginTop: '1em',
				}}>
				<Col sm={12} lg={6}>
					<Form
						className='form'
						style={{
							width: '75%',
							margin: '0 auto',
							textAlign: 'center',
						}}
						onSubmit={handleSubmit}>
						<h1
							style={{
								fontSize: '3em',
								fontFamily: 'Montserrat',
								fontWeight: '500',
								letterSpacing: '0.1em',
								margin: '0 auto',

								color: 'white',
								padding: '0.4em',
							}}>
							CONTACT US
						</h1>
						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Name
							</Form.Label>
							<Form.Control
								placeholder='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Email
							</Form.Label>
							<Form.Control
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Phone Number
							</Form.Label>
							<Form.Control
								placeholder='Number'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Date Of Event
							</Form.Label>
							<Form.Control
								placeholder='date of event'
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>
						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Location
							</Form.Label>
							<Form.Control
								placeholder='Preferred location'
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div className='p-3'>
							<Form.Label
								style={{
									fontSize: '1.3em',
								}}>
								Message
							</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								placeholder='Message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<div className='text-center m-5'>
							<Button
								className='border-0'
								type='submit'
								style={{
									background: loader ? '#FFD700' : '#231f20',
									width: '5em',
									borderRadius: '25px',
									border: '2px solid white',
								}}>
								Submit
							</Button>
						</div>
					</Form>
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
								<Card.Link href='#'>
									<Image src={twitter} className='socialmedia' />
								</Card.Link>
								<Card.Link href='#'>
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
