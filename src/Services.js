import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ClientList from './ClientList'

import {
	withRouter
} from 'react-router-dom';

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	handleSubmit(event) {
		console.log('handlesubmit!')
		event.preventDefault()
		this.props.history.push('/clients');
	  }
	render () {
	return (
	  <div className="Services">
		  <Form onSubmit={this.handleSubmit}>
		  <Button variant="primary" type="submit">
		  	Listar clientes
		  </Button>
		  </Form>
	  </div>
	  )
	};
  }
  
  export default withRouter(Services);