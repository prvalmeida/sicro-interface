import React, { Component } from 'react';
import './styles/App.css';

import ServicesList from './components/ServicesList';
import ClientList from './components/ClientList';
import ContractList from './components/ContractList';
import DocumentList from './components/DocumentList';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			showServices: true,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
		}
	}

	handleClientList = () => {
		console.log('handleClientList')
		this.setState({
			showServices: false,
			showClientList: true,
			showContractList: false,
			showDocumentList: false
		  })
	}

	handleContractList = () => {
		console.log('handleContractList')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: true,
			showDocumentList: false
		  })
	}

	handleDocumentList = () => {
		console.log('handleDocumentList')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: false,
			showDocumentList: true
		  })
	}

	handleBackButton = () => {
		console.log('handleBackButton')
		this.setState({
			showServices: true,
			showClientList: false,
			showContractList: false,
			showDocumentList: false
		  })
	}

	render () {
		return (
		<div className="App">
			<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">SICRO</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
			</Nav>
			</Navbar>
			{this.state.showServices && <ServicesList listClients={this.handleClientList} listContracts={this.handleContractList} listDocuments={this.handleDocumentList}/>}
			{this.state.showClientList && <div><ClientList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showContractList && <div><ContractList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showDocumentList && <div><DocumentList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
		</div>
		);
	}
}

export default App;
