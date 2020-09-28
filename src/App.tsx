import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import HighScore from './pages/HighScore';
import GameOver from './pages/GameOver';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<div className='container'>
				<Navbar />
				<Switch>
					<Route path='/game' component={Game} />
					<Route path='/highScore' component={HighScore} />
					<Route path='/gameOver' component={GameOver} />
					<Route path='/' component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
