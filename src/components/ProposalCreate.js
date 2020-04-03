import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/ProposalCreate.css";

export default function ProposalCreate(props) {
	const [title, setTitle] = useState("");
	const [clientId, setClientId] = useState("");
	  
	function validateForm() {
	  return title.length > 0 && clientId.length > 0;
	}
  
	function handleSubmit(event) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
			body: JSON.stringify( {
				'title': title,
				'client': clientId,
			} )
		};
		fetch('https://protected-atoll-74095.herokuapp.com/api/proposal/', requestOptions)
			.then(response => response.json())
			.catch(err => console.error(err))
			event.preventDefault();
	}
  
	return (
	  <div className="ProposalCreate">
		<form onSubmit={handleSubmit}>
		  <FormGroup controlId="title" bssize="large">
			<FormLabel>Título</FormLabel>
			<FormControl
			  autoFocus
			  type="text"
			  value={title}
			  onChange={e => setTitle(e.target.value)}
			/>
		  </FormGroup>
		  <FormGroup controlId="clientId" bssize="large">
			<FormLabel>ID Cliente</FormLabel>
			<FormControl
			  type="text"
			  value={clientId}
			  onChange={e => setClientId(e.target.value)}
			/>
		  </FormGroup>
		  <Button block bssize="large" disabled={!validateForm()} type="submit">Criar</Button>
		</form>
	  </div>
	)};