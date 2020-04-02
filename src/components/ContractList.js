import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

import {
	withRouter
} from 'react-router-dom';

class ContractList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contracts: []
		};
	}

	componentDidMount() {
        const requestOptions = {
            method: 'GET',
			headers: { 'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
		};
		var self = this
        fetch('https://protected-atoll-74095.herokuapp.com/api/contracts/', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(`contracts: ${JSON.stringify(data)}`)
				self.setState({ contracts: data});
			})
			.catch(err => console.error(err))
    }

	render () {
		const items = this.state.contracts.map((item, key) => {
			return (
			<tr key={key}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.proposal_id}</td>
			</tr>
			)
		});
		return (
			<Container className="Services">
				<Table responsive striped bordered hover size="sm">
				<thead>
					<tr>
					<th>#</th>
					<th>Título</th>
					<th>ID Proposta</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
				</Table>
			</Container>
		)
	};
  }
  
  export default withRouter(ContractList);