import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Login.css";

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {user:'',password:'' }
		this.auth = props.auth
		this.login = this.login.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateForm() {
		return this.state.user.length > 0 && this.state.password.length > 0;
	}

	// calls the login method in authentication service
	login (user, password) {
		console.log (this)
		this.auth.login(user, password);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log (this)
		this.login (this.state.user, this.state.password)
	}

	// calls the logout method in authentication service
	// function logout (user, password) {
	// 	props.auth.login(user, password);
	// }

	render () {
		return (
		<div className="Login">
			<form onSubmit={this.handleSubmit}>
			<FormGroup controlId="user" bssize="large">
				<FormLabel>User</FormLabel>
				<FormControl
				autoFocus
				type="text"
				onChange={e => this.setState({'user': e.target.value})}
				/>
			</FormGroup>
			<FormGroup controlId="password" bssize="large">
				<FormLabel>Password</FormLabel>
				<FormControl
				onChange={e => this.setState({'password': e.target.value})}
				type="password"
				/>
			</FormGroup>
			<Button block bssize="large" disabled={!this.validateForm()} type="submit">
				Login
			</Button>
			</form>
		</div>
	)};
}

export default Login;