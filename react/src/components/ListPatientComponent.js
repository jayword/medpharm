import React, {Component} from 'react';
import PatientService from '../services/PatientService';

export default class ListPatientComponent extends Component{
	constructor(props){
		super(props);
		
		this.state={
			patients: []
		}
		this.addPatient = this.addPatient.bind(this);
		this.editPatient = this.editPatient.bind(this);
		this.deletePatient = this.deletePatient.bind(this);
	}
	
	deletePatient(id){
		PatientService.deletePatient(id).then(res => {
			this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
		})
	}
	
	viewPatient(id){
		this.props.history.push(`/view-patient/${id}`);
	}
	
	editPatient(id){
		this.props.history.push(`/add-patient/${id}`);
	}
	
	componentDidMount(){
		PatientService.getPatients().then((res) => {
			this.setState({patients: res.data});
			console.log(res);
		});
	}
	
	addPatient(){
		this.props.history.push('/add-patient/_add');
	}
	
	
	render(){
		return(
			<div>
				<h2 className="text-center">Patient List </h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addPatient}>
						Add Patient
					</button>
				</div>
				
				<br></br>
				
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>Patient Name</th>
								<th>Ailment</th>
								<th>Description</th>
								<th>Treatment</th>
								<th>Cost</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
						{
							this.state.patients.map((patient) => 
							<tr key={patient.id}>
								<td>{patient.name}</td>
								<td>{patient.ailment}</td>
								<td>{patient.desc}</td>
								<td>{patient.treatment}</td>
								<td>{patient.cost}</td>
								<td>
									<button onClick={() => this.editPatient(patient.id)} className="btn btn-info">Update </button>
									<button style={{marginLeft: "10px"}} onClick={() => this.deletePatient(patient.id)} className="btn btn-danger">Delete </button>
									<button style={{marginLeft: "10px"}} onClick={() => this.viewPatient(patient.id)} className="btn btn-info">View </button>
								</td>
							</tr>
							)
							
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}