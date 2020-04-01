import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

import {
	withRouter
} from 'react-router-dom';

class ClientList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clients: []
		};
	}

	componentDidMount() {
		console.log(`localStorage.getItem('access_token'): ${localStorage.getItem('access_token')}`)
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
			headers: { 'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
		};
		var self = this
        fetch('https://protected-atoll-74095.herokuapp.com/api/clients/', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(JSON.stringify(data))
				self.setState({ clients: data});
			})
			.catch(err => console.error(err))
            // .then(data => this.setState({ postId: data.id }));
    }

	render () {
		console.log('ClientList render')
		const items = this.state.clients.map((item, key) => {
			return (
			<tr>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.cpf}</td>
			<td>{item.proposals}</td>
			</tr>
			)
		});
		return (
			<Container className="Services">
				<Table responsive striped bordered hover size="sm">
				<thead>
					<tr>
					<th>#</th>
					<th>Nome</th>
					<th>CPF</th>
					<th>Proposals</th>
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
  
  export default withRouter(ClientList);