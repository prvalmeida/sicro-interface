import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/ClientCreate.css";

export default function ClientCreate(props) {
	const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");
	  
	function validateForm() {
	  return name.length > 0;
	}
  
	function handleSubmit(event) {
		console.log(name)
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
			body: JSON.stringify( {
				'name': name,
				'cpf': cpf,
				"proposals": 1
			} )
		};
		var self = this
		fetch('https://protected-atoll-74095.herokuapp.com/api/clients/', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(JSON.stringify(data))
				self.setState({ clients: data});
			})
			.catch(err => console.error(err))
		event.preventDefault();
	}
  
	return (
	  <div className="ClientCreate">
		<form onSubmit={handleSubmit}>
		  <FormGroup controlId="name" bssize="large">
			<FormLabel>Nome</FormLabel>
			<FormControl
			  autoFocus
			  type="text"
			  value={name}
			  onChange={e => setName(e.target.value)}
			/>
		  </FormGroup>
		  <FormGroup controlId="cpf" bssize="large">
			<FormLabel>CPF</FormLabel>
			<FormControl
			  type="text"
			  value={cpf}
			  onChange={e => setCpf(e.target.value)}
			/>
		  </FormGroup>
		  <Button block bssize="large" disabled={!validateForm()} type="submit">Criar</Button>
		</form>
	  </div>
	)};