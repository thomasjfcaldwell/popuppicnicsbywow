import './App.css';
import Home from '../src/Components/Home';
import Packages from './Components/Packages';
import Gallery from './Components/BasicRows';
import Prices from './Components/Prices'
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import '../src/App.css';
import BasicRows from '../src/Components/BasicRows';

function App() {
	return (
		<div>
			<nav>
				<Link to='/'></Link>
			</nav>
			<main>
				
				<Route exact path='/' component={Home} />
				<Route exact path='/prices' component={Prices} />
				<Route exact path='/packages' component={Packages} />
				<Route exact path='/gallery' component={BasicRows} />
				<Route exact path='/faq' component={Faq} />
				<Route exact path='/contact' component={Contact} />
			</main>
		</div>
	);
}

export default App;
