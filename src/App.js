import Home from './Components/Pages/Home Page Components/Home';
import Packages from './Components/Pages/PicnicPage/Packages';
import Faq from './Components/Faq';
import Backyard from './Components/Pages/MovieNightPage/Backyard';
import Charcuterie from './Components/Pages/CharcuteriePage/Charcuterie';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
// import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Nav />
				<Router>
					<Route exact path='/' component={Home} />
					<Route exact path='/packages' component={Packages} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/backyardmovies' component={Backyard} />
					<Route exact path='/charcuterie' component={Charcuterie} />
				</Router>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
