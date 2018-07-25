import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import HospitalPanel from './HospitalPanel';
import AdminPanel from './AdminPanel';
import jwt from 'jsonwebtoken';

import Auth from './Auth';

export class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			isLoggedIn: false
		};
	}

	login = () => {
		if(this.state.email && this.state.password) {
			var self = this;
			axios.post('/api/v1/users/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then(function(response) {
				if(response.data.auth) {
					alert(response.data.message)
					Auth.setToken(response.data.token);
					self.setState({
						isLoggedIn: true
					});
				}
			})
			.catch(function(error) {
				if(error.response) {
					alert(error.response.data.message)
				}
			});
		}
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}


	render() {
		const userType = Auth.getUserType();
			if(userType === "admin") {
				return(
					<Redirect to={{
						pathname: '/admin'
					}}/>
				);
			}
			else if(userType === "hospital") {
				return(
					<Redirect to={{
					  pathname: '/hospital'
					}}/>
				);
			}

		return(
			<div className="col-md-4  offset-md-4 login-center">
				<div className="form-group">
					<input
						name="email"
						placeholder="Email"
						className="form-control"
						onChange={this.onChange}
					/>
				</div>
				<div className="form-group">
					<input
						name="password"
						placeholder="Password"
						className="form-control"
						type="password"
						onChange={this.onChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
			</div>
			)
	}
}
