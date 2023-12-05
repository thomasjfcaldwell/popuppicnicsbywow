import './App.css';
import Home from './Components/Pages/Home Page Components/Home';
import Packages from './Components/Pages/PicnicPage/Packages';
import TopComponent from './Components/TopComponent';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Backyard from './Components/Pages/MovieNightPage/Backyard';
import Charcuterie from './Components/Pages/CharcuteriePage/Charcuterie';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../src/App.css';
import Toolbar from './Components/Toolbar';
import { Component } from 'react';
import Footer from './Components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<TopComponent />
				<Toolbar />
				<Router>
					<Route exact path='/' component={Home} />
					<Route exact path='/packages' component={Packages} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/backyardmovies' component={Backyard} />
					<Route exact path='/charcuterie' component={Charcuterie} />
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
