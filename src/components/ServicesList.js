import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import {
	withRouter
} from 'react-router-dom';

const ServicesList = props => {
	return (
		<Button variant="primary" onClick={props.listClients}>Listar clientes</Button>
	  )
  }
  
  export default withRouter(ServicesList);