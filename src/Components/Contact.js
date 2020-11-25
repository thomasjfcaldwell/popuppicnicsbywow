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
} from 'react-bootstrap';

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
		setMessage('');
	};

	return (
		<Row
			style={{
				background: '#F78F1E',
			}}>
			<Col sm={12} >
				<Form
					className='form w-10 m-5'
					style={{
						margin: '0 auto',
					}}
					onSubmit={handleSubmit}>
					<h1
						style={{
							fontSize: '3em',
							marginTop: '2em',
							fontWeight: 'lighter',
							letterSpacing: '0.1em',
							textAlign: 'center',
						}}>
						Contact Us
					</h1>
					<div className='p-3'>
						<Form.Label
							style={{
								fontWeight: 'bold',
								fontSize: '1.5em',
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
								fontWeight: 'bold',
								fontSize: '1.5em',
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
								fontWeight: 'bold',
								fontSize: '1.5em',
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
								fontWeight: 'bold',
								fontSize: '1.5em',
								textAlign: 'center',
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
								background: loader ? '#231F20' : '#F78F1E',
								width: '25%',
							}}>
							Submit
						</Button>
					</div>
				</Form>
			</Col>
			<Col
				style={{
					position: 'relative',
				}}>
				<CardColumns>
					<Card
						className='bg-transparent border-0'
						style={{
							fontFamily: 'Montserrat',
							textAlign: 'center',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}>
						<Card.Body>
							<Card.Text>Telephone:714.848.9698</Card.Text>
							<Card.Text>Email:hello@wowevents.com</Card.Text>
							<Card.Text>
								419 Main St Suite 433 Huntington Beach, CA 92648
							</Card.Text>
						</Card.Body>
						<Card.Footer className='bg-transparent border-0'>
							<Row>
								<Col>
									<Image
										src={facebook}
										style={{
											maxWidth: '3em',
										}}
									/>
								</Col>
								<Col>
									<Image
										src={instagram}
										style={{
											maxWidth: '3em',
										}}
									/>
								</Col>
								<Col>
									<Image
										src={twitter}
										style={{
											maxWidth: '3em',
										}}
									/>
								</Col>
							</Row>
						</Card.Footer>
					</Card>
				</CardColumns>
			</Col>
		</Row>
	);
};

export default Contact;
