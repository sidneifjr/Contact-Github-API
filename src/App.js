import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ResultsPage from './containers/ResultsPage';
import UserRepoDetails from './containers/RepoDetailsPage';

import './styles/main.scss';

class App extends Component {
	render(){
		// console.log(this);

		return (
			<BrowserRouter>
				<main className="App">
					<Header />
	
					<section className="content">
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/search' component={ResultsPage} />
							<Route path='/repos/:repo_id'  component={UserRepoDetails} />
						</Switch>
					</section>
	
					<Footer />
				</main>
			</BrowserRouter>
		);
	}
}

export default App;
