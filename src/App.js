import './App.css';
import Home from '../src/Components/Home';
import Packages from './Components/Packages';
import {
	Row,
	Col,
	Image,
	Navbar,
	Nav,
	Badge,
	Dropdown,
	Container,
} from 'react-bootstrap';
import wowlogo from './Images/WowEvents_Logo_Orange_RGB.png';
import phone from './Images/Icons/smartphone.png';
import email from './Images/Icons/email.png';
import mails from './Images/Icons/destination.png';
import facebook from './Images/Icons/facebook.png';
import instagram from './Images/Icons/instagram.png';
import twitter from './Images/Icons/twitter.png';
import Prices from './Components/Prices';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Backyard from './Components/Backyard';
import Charcuterie from './Components/Charcuterie';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import '../src/App.css';
import BasicRows from '../src/Components/BasicRows';

function App() {
	return (
		<div className='body'>
			<nav>
				<Container fluid>
					<Row
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image src={phone} height='20px' />

							<p className='topText'>Phone </p>
							<p className='topText'>: </p>
							<a className='topText' href='tel:714.848.9698'>
								714.848.9698
							</a>
						</Col>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image src={email} height='20px' />

							<p className='topText'>Email</p>
							<p className='topText'>: </p>
							<a className='topText' href='mailto:hello@wowevents.com'>
								hello@wowevents.com
							</a>
						</Col>
						<Col
							lg={4}
							sm={4}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Badge>
								<a href='https://www.facebook.com/popuppicnicsbywow'>
									<Image
										src={facebook}
										style={{ maxWidth: '2em', margin: '0.5em' }}
									/>
								</a>
							</Badge>
							<Badge>
								<a href='https://www.instagram.com/popuppicnicsbywow/'>
									<Image
										src={instagram}
										style={{ maxWidth: '2em', margin: '0.5em' }}
									/>
								</a>
							</Badge>
							<Badge>
								<a href='https://twitter.com/WowPopUpPicnics'>
									<Image
										src={twitter}
										style={{ maxWidth: '2em', margin: '0.5em' }}
									/>
								</a>
							</Badge>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row className='backgroundfont'>
						<Nav className='navbar navbar-expand-lg'>
							<Image
								lg={4}
								sm={12}
								className='navbar-brand'
								src={wowlogo}
								style={{
									width: '15%',
									padding: '10px',
									margin: 'auto',
								}}
							/>

							<Navbar className='navbar-nav ml-auto' expand='lg'>
								<Navbar.Toggle aria-controls='responsive-navbar-nav' />
								<Navbar.Collapse id='responsive-navbar-nav'>
									<Nav
										className='mr-auto'
										style={{
											fontFamily: 'Montserrat',
											fontWeight: '500',
											letterSpacing: '0.1em',
											fontSize: '0.8em',
										}}>
										<Nav.Link
											href='/'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											HOME
										</Nav.Link>
										<Nav.Link
											href='/packages'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											POP UP PICNICS
										</Nav.Link>
										<Nav.Link
											href='/backyardmovies'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											MOVIE NIGHT
										</Nav.Link>
										<Nav.Link
											href='/charcuterie'
											style={{
												color: 'white',
												padding: '0.5em',
											}}>
											CHARCUTERIE SERVICE
										</Nav.Link>
										<Dropdown>
											<Dropdown.Toggle
												variant='white'
												id='dropdown-basic'
												style={{ color: 'white', marginTop: '1px' }}>
												OTHER SERVICES
											</Dropdown.Toggle>

											<Dropdown.Menu
												style={{
													backgroundColor: 'transparent',
													border: 'none',
													fontSize: '0.6em',
													color: 'white',
													fontWeight: '100',
												}}>
												<Dropdown.Item href='https://www.wowevents.com/full-service-event-planning/'>
													Full Service Event Planning
												</Dropdown.Item>
												<Dropdown.Item href='https://www.wowevents.com/decor-props/'>
													Decor & Props
												</Dropdown.Item>
												<Dropdown.Item href='https://www.wowevents.com/entertainment-music/'>
													Entertainment & Music
												</Dropdown.Item>
												<Dropdown.Item href='https://www.wowevents.com/rentals/'>
													Rental/Lounge Furniture
												</Dropdown.Item>
												<Dropdown.Item href='https://www.wowevents.com/event-catering/'>
													Catering
												</Dropdown.Item>
												<Dropdown.Item href='https://www.wowevents.com/event-venues/'>
													Event Venues
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Nav>
					</Row>
				</Container>
			</nav>
			<body>
				<Router>
					<Route exact path='/' component={Home} />
					<Route exact path='/prices' component={Prices} />
					<Route exact path='/packages' component={Packages} />
					<Route exact path='/gallery' component={BasicRows} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/bookings' component={BookingForm} />
					<Route exact path='/backyardmovies' component={Backyard} />
					<Route exact path='/charcuterie' component={Charcuterie} />
				</Router>
			</body>
			<footer className='footer'>
				<Container fluid className='footerContainer'>
					<Row>
						<Col
							lg={6}
							sm={12}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							<Image
								src={wowlogo}
								style={{
									width: '25%',
								}}
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									margin: '10px',
								}}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<address className='address'>
										419 Main St Suite 433 Huntington Beach, CA 92648
									</address>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<a href='tel:714.848.9698'>714.848.9698</a>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<a href='mailto:hello@wowevents.com'>hello@wowevents.com</a>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} className='footerMenu'>
							<a className='linkforpage' href='/'>
								Home
							</a>

							<a className='linkforpage' href='/packages'>
								Picnics
							</a>

							<a className='linkforpage' href='/backyardmovies'>
								Backyard Movie Night
							</a>

							<a className='linkforpage' href='/charcuterie'>
								Charcuterie
							</a>
						</Col>
					</Row>
				</Container>
				<div className='footer-copyright'>
					<Container
						style={{
							textAlign: 'center',
							color: '#F78F1E',
						}}>
						© 2021 Copyright Wow! Events
					</Container>
				</div>
			</footer>
		</div>
	);
}

export default App;
