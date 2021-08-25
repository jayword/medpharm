const Patient = require('../models/patientModel');
const {getPostData} = require('../utils');
const getHead = {
	'Access-Control-Allow-Origin' : '*',
	'Access-Control-Allow-Methods' : 'OPTION, GET, POST, PUT, DELETE',
	'Content-Type' : 'application/json'
}

async function getPatients(req,res){
	try{
		const patients = await Patient.findAll();
		
		res.writeHead(200, getHead);
		res.end(JSON.stringify(patients));
	}catch(error){
		console.log(error);
	}
}

async function getPatient(req,res,id){
	try{
		const patient = await Patient.findById(id);
		if(!patient){
			res.writeHead(404, {'Content-Type':'application/json'});
			res.end(JSON.stringify({message:'Patient info not found'}));
		}else{
			
			res.writeHead(200, getHead);
			res.end(JSON.stringify(patient));
		}
	}catch(error){
		console.log(error);
	}
}

async function createPatient(req,res){
	try{
		const body = await getPostData(req);
		
		const {name, ailment, desc, treatment, cost} = JSON.parse(body);
		
		const patient = {
			name,
			ailment,
			desc,
			treatment,
			cost
		}
		
		const newPatient = await Patient.create(patient);
		
		res.writeHead(200, getHead);
		return res.end(JSON.stringify(newPatient));
	}catch(err){
		console.log(err);
	}
	
}

async function updatePatient(req,res,id){
	try{
		const patient = await Patient.findById(id);
		
		if(!patient){
			res.writeHead(404, {'Content-Type':'application/json'});
			res.end(JSON.stringify({message:'Patient Not Updated'}));
		}else{
			const body = await getPostData(req);
			const {name, ailment, desc, treatment, cost} = JSON.parse(body);
			const patientData = {
				name : name || patient.name,
				ailment : ailment || patient.ailment,
				desc : desc || patient.desc,
				treatment : treatment || patient.treatment,
				cost : cost || patient.cost
			}
			
			const updatePat = await Patient.update(id, patientData);
			
			res.writeHead(200, getHead);
			return res.end(JSON.stringify(updatePat));
		}
	}catch(err){
		console.log(err);
	}
}

async function removePatient(req,res,id){
	
	try{
		const patient = await Patient.findById(id);
		
		if(!patient){
			res.writeHead(404, {'Content-Type':'application/json'});
			res.end(JSON.stringify({message:'Patient Not Deleted or Does not exist'}));
		}else{
			await Patient.remove(id);
			
			res.writeHead(200, getHead);
			res.end(JSON.stringify({message: `Patient with id: ${id} has been removed.`}));
		}
	}catch(err){
		console.log(err);
	}
}

module.exports = {
	getPatients,
	getPatient,
	createPatient,
	updatePatient,
	removePatient
}