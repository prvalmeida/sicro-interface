import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	withRouter
} from 'react-router-dom';

class DocumentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			documents: []
		};
	}

	componentDidMount() {
        const requestOptions = {
            method: 'GET',
			headers: { 'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
		};
		var self = this
        fetch('https://protected-atoll-74095.herokuapp.com/api/documents/', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(`documents: ${JSON.stringify(data)}`)
				self.setState({ contracts: data});
			})
			.catch(err => console.error(err))
    }

	render () {
		return (
		<div></div>
		)
	};
  }
  
  export default withRouter(DocumentList);