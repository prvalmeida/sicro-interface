import React, { Component } from 'react';
import './styles/App.css';

import ServicesList from './components/ServicesList';
import ClientList from './components/ClientList';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			showServices: true,
			showClientList: false
		}
	}

	handleClientList = () => {
		console.log('handleClientList')
		this.setState({
			showServices: false,
			showClientList: true
		  })
	}

	handleBackButton = () => {
		console.log('handleBackButton')
		this.setState({
			showServices: true,
			showClientList: false
		  })
	}

	render () {
		return (
		<div className="App">
			<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">SICRO</Navbar.Brand>
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
			{this.state.showServices && <ServicesList listClients={this.handleClientList}/>}
			{this.state.showClientList && <div><ClientList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
		</div>
		);
	}
}

export default App;
