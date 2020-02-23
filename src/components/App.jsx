import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/default.layout.jsx';
class App extends Component {
	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route path='/' component={DefaultLayout} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
