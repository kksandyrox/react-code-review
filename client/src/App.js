// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Customers from './components/customers'
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <Customers />
//       </div>
//     );
//   }
// }
//
// export default App;

import React from "react";
import {render} from "react-dom";

import jwt from 'jsonwebtoken';
import {
	BrowserRouter,
	Route,
	browserHistory,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'

import {Header}  from "./components/Header";
import {Login}  from "./components/Login";
import {NotFound} from "./components/NotFound";
import {HospitalPanel} from "./components/HospitalPanel";
import {AdminPanel} from "./components/AdminPanel";
import AdminRoute from "./components/Routes"
import Auth from "./components/Auth"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	// componentDidMount(){
	// 	const isLoggedIn = isAuthenticated();
	// 	if(isLoggedIn) {
	// 		this.setState({isLoggedIn: true});
	// 	}
	// 	console.log('isloggedin', isLoggedIn)
	// }

	render() {
		return (
			<div>
				<div>
					<Header {...this.props} authed={Auth.isAuthenticated()}/>
				</div>
				<div className="container">
					<BrowserRouter>
						<Switch>
							<Route exact path="/" key="root" component={Login}/>
							<Route exact path="/login" key="login" component={Login}/>
							<AdminRoute  authed={Auth.isAuthenticated} path="/admin" key="admin" component={AdminPanel}/>
							{/* <HospitalRoute exact path="/hospital" key="hospital" component={HospitalPanel}/> */}
							<Route component={NotFound}/>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
			)
	}
}

export default App;
