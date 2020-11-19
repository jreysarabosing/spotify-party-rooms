import React, { Component, component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'; 

import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/"><p>This is the Home Page.</p></Route>
					<Route path="/join" component={JoinRoomPage}/>
					<Route path="/create" component={CreateRoomPage}/>
				</Switch>
			</Router>
		);
	}
}