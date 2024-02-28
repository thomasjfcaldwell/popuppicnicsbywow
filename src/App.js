import Home from './Components/Pages/Home Page Components/Home';
import Packages from './Components/Pages/PicnicPage/Packages';
import Faq from './Components/Faq';
import Backyard from './Components/Pages/MovieNightPage/Backyard';
import Charcuterie from './Components/Pages/CharcuteriePage/Charcuterie';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
// import Footer from './Components/Footer/Footer';
// import Nav from './Components/Nav/Nav';
import './App.css';
import styled from '@emotion/styled';

const AppContainer = styled('div')({
	backgroundColor: '#FFF3E5',
	width: '100%',
	maxWidth: '1440px',
	minWidth: '300px',
});

class App extends Component {
	render() {
		return (
			<AppContainer>
				{/* <Nav /> */}
				<Router>
					<Route exact path='/' component={Home} />
					<Route exact path='/packages' component={Faq} />
					<Route exact path='/faq' component={Backyard} />
					<Route exact path='/backyardmovies' component={Home} />
					<Route exact path='/charcuterie' component={Charcuterie} />
				</Router>
				{/* <Footer /> */}
			</AppContainer>
		);
	}
}

export default App;
