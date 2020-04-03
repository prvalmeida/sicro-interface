import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

import {
	withRouter
} from 'react-router-dom';

class ProposalList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			proposals: []
		};
	}

	componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
			headers: { 'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
		};
		var self = this
        fetch('https://protected-atoll-74095.herokuapp.com/api/proposal/', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(JSON.stringify(data))
				self.setState({ proposals: data});
			})
			.catch(err => console.error(err))
    }

	render () {
		const items = this.state.proposals.map((item, key) => {
			console.log(`item: ${JSON.stringify(item)}`)
			return (
			<tr key={key}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.client}</td>
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
					<th>ID Cliente</th>
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
  
  export default withRouter(ProposalList);