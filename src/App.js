import './App.css';
import Home from './Components/Pages/Home Page Components/Home';
import Packages from './Components/Pages/PicnicPage/Packages';
import { Row, Col, Image, Container } from 'react-bootstrap';

import TopComponent from './Components/TopComponent';

import wowlogo from './Images/WowEvents_Logo_Orange_RGB.png';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Backyard from './Components/Pages/MovieNightPage/Backyard';
import Charcuterie from './Components/Pages/CharcuteriePage/Charcuterie';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './Components//Pages/PicnicPage/BookingForm';
import '../src/App.css';
import Toolbar from './Components/Toolbar';
import SideDrawer from './Components/SideDrawer';
import Backdrop from './Components/Backdrop';
import { Component } from 'react';

class App extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		let backdrop;
		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}

		return (
			<body
				style={{
					height: '100%',
				}}>
				<nav>
					<TopComponent />
					<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
					<SideDrawer show={this.state.sideDrawerOpen} />
					{backdrop}
				</nav>
				<main>
					<Router>
						<Route exact path='/' component={Home} />
						<Route exact path='/packages' component={Packages} />
						<Route exact path='/faq' component={Faq} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/bookings' component={BookingForm} />
						<Route exact path='/backyardmovies' component={Backyard} />
						<Route exact path='/charcuterie' component={Charcuterie} />
					</Router>
				</main>
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
									Pop Up Picnics
								</a>

								<a className='linkforpage' href='/backyardmovies'>
									Movie Night
								</a>

								<a className='linkforpage' href='/charcuterie'>
									Charcuterie Services
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
			</body>
		);
	}
}

export default App;
