import React, {Component} from 'react';
import PatientService from '../services/PatientService';

export default class CreatePatientComponent extends Component{
	constructor(props){
		super(props);
		
		this.state={
			id: this.props.match.params.id,
			name: '',
			ailment: '',
			desc: '',
			treatment: '',
			cost: ''
		}
		
		this.nameHandler = this.nameHandler.bind(this);
		this.ailmentHandler = this.ailmentHandler.bind(this);
		this.descHandler = this.descHandler.bind(this);
		this.treatmentHandler = this.treatmentHandler.bind(this);
		this.costHandler = this.costHandler.bind(this);
	}
	
	componentDidMount(){
		if(this.state.id === '_add'){
			return
		}else{
			PatientService.getPatientById(this.state.id).then((res) => {
				let patient = res.data;
				this.setState({
					name: patient.name,
					ailment: patient.ailment,
					desc: patient.desc,
					treatment: patient.treatment,
					cost: patient.cost
				});
			});
		}
	}
	
	saveUpdatePatient = (e) => {
		e.preventDefault();
		let patient = {
			name: this.state.name,
			ailment: this.state.ailment,
			desc: this.state.desc,
			treatment: this.state.treatment,
			cost: this.state.cost
		};
		console.log('patient =>'+ JSON.stringify(patient));
		
		if(this.state.id === '_add'){
			PatientService.createPatient(patient).then(res => {
				this.props.history.push('/patients');
			});
		}else{
			PatientService.updatePatient(patient, this.state.id).then(res => {
				this.props.history.push('/patients');
			});
		}
	}
	
	nameHandler = (event) => {
		this.setState({name: event.target.value});
	}
	
	ailmentHandler = (event) => {
		this.setState({ailment: event.target.value});
	}
	
	descHandler = (event) => {
		this.setState({desc: event.target.value});
	}
	
	treatmentHandler = (event) => {
		this.setState({treatment: event.target.value});
	}
	
	costHandler = (event) => {
		this.setState({cost: event.target.value});
	}
	
	cancel(){
		this.props.history.push('/patients');
	}
	
	getTitle(){
		if(this.state.id === '_add'){
			return <h3 className="text-center">Add Patient</h3>
		}else{
			return <h3 className="text-center">Update Patient</h3>
		}
	}
	
	
	
	render(){
		return(
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							{this.getTitle()}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>Patient Name:</label>
										<input placeholder="Name of Patient" name="name" className="form-control" value={this.state.name} onChange={this.nameHandler} />
									</div>
									<div className="form-group">
										<label>Ailment Name:</label>
										<input placeholder="Name of Ailment" name="ailment" className="form-control" value={this.state.ailment} onChange={this.ailmentHandler} />
									</div>
									<div className="form-group">
										<label>Description:</label>
										<input placeholder="Ailment Description" name="desc" className="form-control" value={this.state.desc} onChange={this.descHandler} />
									</div>
									<div className="form-group">
										<label>Treatment:</label>
										<input placeholder="Treatment for Ailment" name="treatment" className="form-control" value={this.state.treatment} onChange={this.treatmentHandler} />
									</div>
									<div className="form-group">
										<label>Treatment Cost:</label>
										<input placeholder="Cost of Treatment" name="cost" className="form-control" value={this.state.cost} onChange={this.costHandler} />
									</div>
									
									<button className="btn btn-success" onClick={this.saveUpdatePatient}>Save </button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel </button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}