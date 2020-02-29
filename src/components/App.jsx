import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/default.layout.jsx';
import DashBoard from '../components/dashboard.jsx';
class App extends Component {
	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route path='/' exact component={DefaultLayout} />
						<Route path='/dash-board' component={DashBoard} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
