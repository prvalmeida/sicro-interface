import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PropostaForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  cpf: '',
		  proposta: '',
		};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({cpf: event.target.value});
	}
  
	handleSubmit(event) {
	  fetch('http://localhost:8080', {
		method: 'post',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(this.state)
	  })
	  .then(res => res.json())
	  .then((data) => {
	    console.log(`data: ${data}`)
	    this.setState({ proposta: data })
	  })
	  .catch(console.log)
	  alert('Proposta submetida: ' + this.state.cpf);
	  alert('Resposta: ' + JSON.stringify(this.state));
	  event.preventDefault();
	}

	componentDidMount() {

    }
  
	render() {
	  return (
		<React.Fragment>
			<form onSubmit={this.handleSubmit} name="proposta">
				<label>
					Cpf:
					<input type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" value={this.state.cpf} onChange={this.handleChange} />
					<input type="submit" value="Submit" />
				</label>
			</form>
		</React.Fragment>
	  );
	}
  }
  
  // ========================================
  
  ReactDOM.render(
	<PropostaForm />,
	document.getElementById('root')
  );