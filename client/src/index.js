// import React from "react";
// import {render} from "react-dom";
// import {
// 	BrowserRouter,
// 	Route,
// 	browserHistory,
// 	Link,
// 	Switch
// } from 'react-router-dom'
//
// import {Header}  from "./components/Header";
// import {Login}  from "./components/Login";
// import {NotFound} from "./components/NotFound";
// import {HospitalPanel} from "./components/HospitalPanel";
// import {AdminPanel} from "./components/AdminPanel";
//
// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<Header/>
// 				</div>
// 				<div className="container">
// 					<BrowserRouter>
// 						<Switch>
// 							<Route exact path="/" key="root" component={Login}/>
// 							<Route exact path="/login" key="login" component={Login}/>
// 							<Route exact path="/admin" key="admin" component={AdminPanel}/>
// 							<Route exact path="/hospital" key="admin" component={HospitalPanel}/>
// 							<Route component={NotFound}/>
// 						</Switch>
// 					</BrowserRouter>
// 				</div>
// 			</div>
// 			)
// 	}
// }


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
