import React, { Component } from 'react';
import App from './App';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

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
			<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-light">Search</Button>
			</Form>
			</Navbar>
			<h5>
				SICRO{' '}
				<a
				style={{ cursor: 'pointer' }}
				onClick={this.logout}
				>
				Log Out
				</a>.
			</h5>
			<App />
			</div>
		}
		{
			!isAuthenticated() && (
			<div className="container column">
				<h5>SICRO</h5>
				<h5>
				You are not logged in! Please{' '}
				<a
					style={{ cursor: 'pointer' }}
					onClick={this.login}
				>
					Log In
				</a>
				{' '}to continue.
				</h5>
				<h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
			</div>
			)
		}
		</div>
      );
    }
  }

  export default Home;