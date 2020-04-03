import React, { Component } from 'react';
import App from '../App';
import Login from "./Login";

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
	const { isAuthenticated } = this.props.auth;

	console.log("render!")
	return (
		<div>
			{
			isAuthenticated() &&
			<div className="container column">
			<App />
			<h5>
				SICRO{' '}
				<a href="/#"
				style={{ cursor: 'pointer' }}
				onClick={this.logout}
				>
				Log Out
				</a>.
			</h5>
			</div>
		}
		{
			!isAuthenticated() && (
			<div className="container column">
				<h5>SICRO</h5>
				<Login auth={this.props.auth} {...this.props}/>
			</div>
			)
		}
		</div>
      );
    }
  }

  export default Home;