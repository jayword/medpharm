import React, {Component} from 'react';
import PatientService from '../services/PatientService';

export default class ViewPatientComponent extends Component{
	
	constructor(props){
		super(props);
		
		this.state={
			id: this.props.match.params.id,
			patient: {}
		}
	}
	
	componentDidMount(){
		PatientService.getPatientById(this.state.id).then(res => {
			this.setState({patient: res.data});
		})
	}
	
	render(){
		return(
			<div>
				<br></br>
				<div className="card col-md-6 offset-md-3">
					<h3 className="text-center">View Patient Details </h3>
					<div className="card-body">
						<div className="row">
							<label>Patient Name: </label>
							<div>{this.state.patient.name}</div>
						</div>
						<div className="row">
							<label>Ailment (Disease): </label>
							<div>{this.state.patient.ailment}</div>
						</div>
						<div className="row">
							<label>Description: </label>
							<div>{this.state.patient.desc}</div>
						</div>
						<div className="row">
							<label>Treatment: </label>
							<div>{this.state.patient.treatment}</div>
						</div>
						<div className="row">
							<label>Treatment Cost: </label>
							<div>{this.state.patient.cost}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}