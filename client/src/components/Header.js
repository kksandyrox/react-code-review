import React from "react";
import {Redirect} from 'react-router-dom';
import Auth from './Auth';

// TODO: Refactor code with React elements.

export class Header extends React.Component {
	constructor(props){
		super(props);
		console.log(props)
		this.state = {
			isLoggedIn: true
		}
	}

	logout = () => {
		console.log('In logout', this.props)
		Auth.removeToken();
		// this.setState({isLoggedIn: false});
		<Redirect to="/login" push={true}/>

	}

	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">Falls</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
							<button type="submit" className="btn btn-primary" onClick={this.logout}>Logout</button>
			        <a className="nav-link" href="#">Link</a>
			      </li>
			    </ul>
			  </div>
			</nav>
			)
	}
}
