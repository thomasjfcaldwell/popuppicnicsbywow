import React, { useState } from 'react';
import { db } from './Firebase';
import {
	Form,
	Button,
	Row,
	Col,
	Card,
	Nav,
	Image,
	CardColumns,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

import wowlogo from '../Images/WowEvents_Logo_Orange_RGB.png';

import phoneIcon from '../Images/Icons/smartphone.png';
import emailIcon from '../Images/Icons/email.png';
import facebook from '../Images/Icons/facebook.png';
import twitter from '../Images/Icons/twitter.png';
import instagram from '../Images/Icons/instagram.png';
import photo from '../Images/Locations/HuntingtonCityWeb.jpg';

import '../styles/Contact.css';

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
			<Col
				sm={12}
				lg={6}
				style={{
					background: 'white',
				}}>
				<Card
					sm={12}
					style={{
						width: '100%',
						padding: '1em',
					}}
					className='bg-transparent border-0'>
					<Card.Img
						variant='top'
						src={wowlogo}
						style={{
							width: '60%',
							margin: '0 auto',
						}}
					/>
					<Card.Body
						className='text-center text-bold mt-5'
						style={{
							fontSize: '1.3em',
						}}>
						<Card.Text>419 Main St Suite 433</Card.Text>
						<Card.Text>Huntington Beach</Card.Text>
						<Card.Text>CA 92648</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush text-center border-0 mt-2'>
						<ListGroupItem
							className='border-0'
							style={{
								margin: '-0.5em',
							}}>
							<strong>Telephone</strong> 714.848.9698
						</ListGroupItem>
						<ListGroupItem
							style={{
								margin: '-0.5em',
							}}>
							<strong>Email</strong> hello@wowevents.com
						</ListGroupItem>
					</ListGroup>
					<Card.Body className='text-center'>
						<Card.Link href='#'>
							<Image
								src={facebook}
								style={{
									width: '10%',
								}}
							/>
						</Card.Link>
						<Card.Link href='#'>
							<Image
								src={twitter}
								style={{
									width: '10%',
								}}
							/>
						</Card.Link>
						<Card.Link href='#'>
							<Image
								src={instagram}
								style={{
									width: '10%',
								}}
							/>
						</Card.Link>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Contact;
