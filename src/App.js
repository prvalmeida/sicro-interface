import React, { Component } from 'react';
import './styles/App.css';

import ServicesList from './components/ServicesList';
import ClientList from './components/ClientList';
import ContractList from './components/ContractList';
import DocumentList from './components/DocumentList';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ClientCreate from './components/ClientCreate';
import ProposalCreate from './components/ProposalCreate';
import ProposalList from './components/ProposalList';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			showServices: true,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: false,
		}
	}

	handleClientList = () => {
		console.log('handleClientList')
		this.setState({
			showServices: false,
			showClientList: true,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: false,
		  })
	}

	handleContractList = () => {
		console.log('handleContractList')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: true,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: false,
		  })
	}

	handleDocumentList = () => {
		console.log('handleDocumentList')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: false,
			showDocumentList: true,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: false,
		  })
	}

	handleClientCreate = () => {
		console.log('handleClientCreate')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: true,
			showProposalCreate: false,
			showProposalList: false,
		  })
	}

	handleProposalCreate = () => {
		console.log('handleProposalCreate')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: true,
			showProposalList: false,
		  })
	}

	handleProposalList = () => {
		console.log('handleProposalList')
		this.setState({
			showServices: false,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: true,
		  })
	}

	handleBackButton = () => {
		console.log('handleBackButton')
		this.setState({
			showServices: true,
			showClientList: false,
			showContractList: false,
			showDocumentList: false,
			showClientCreate: false,
			showProposalCreate: false,
			showProposalList: false,
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
			{this.state.showServices &&
				 <ServicesList listClients={this.handleClientList}
								 listContracts={this.handleContractList} 
								 listDocuments={this.handleDocumentList}
								 createClient={this.handleClientCreate}
								 createProposal={this.handleProposalCreate}
								 listProposals={this.handleProposalList}/>}
			{this.state.showClientList && <div><ClientList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showContractList && <div><ContractList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showDocumentList && <div><DocumentList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showClientCreate && <div><ClientCreate /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showProposalCreate && <div><ProposalCreate /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
			{this.state.showProposalList && <div><ProposalList /><Button onClick={this.handleBackButton}>Voltar</Button></div>}
		</div>
		);
	}
}

export default App;
