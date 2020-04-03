import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/ServiceList.css';

import {
	withRouter
} from 'react-router-dom';

const ServicesList = props => {
	return (
		<Container fluid className="serviceList">
			<Row className="lists">
				<Col><Button variant="primary" onClick={props.listClients}>Listar clientes</Button></Col>
				<Col><Button variant="primary" onClick={props.listContracts}>Listar contratos</Button></Col>
				<Col><Button variant="primary" onClick={props.listDocuments}>Listar documentos</Button></Col>
			</Row>
			<Row className="creation">
				<Col><Button variant="primary" onClick={props.createClient}>Criar cliente</Button></Col>
			</Row>
	  	</Container>
	  )
  }
  
  export default withRouter(ServicesList);