let patients = require('../data/patients');
const {v4:uuidv4} = require('uuid');
const {writeDataToFile} = require('../utils');

function findAll(){
	return new Promise((resolve, reject) => {
		resolve(patients);
	})
}

function findById(id){
	return new Promise((resolve, reject) => {
		const patient = patients.find((p) => p.id === id);
		resolve(patient);
	})
}

function create(patient){
	return new Promise((resolve, reject) => {
		const newPatient = {id : uuidv4(), ...patient}
		patients.push(newPatient);
		writeDataToFile('./data/patients.json', patients);
		resolve(newPatient);
	})
}

function update(id, patient){
	return new Promise((resolve, reject) => {
		const index = patients.findIndex((p) => p.id === id);
		
		patients[index] = {id, ...patient}
		
		writeDataToFile('./data/patients.json', patients);
		resolve(patients[index]);
	})
}

function remove(id){
	return new Promise((resolve, reject) => {
		patients = patients.filter((p) => p.id !== id);
		writeDataToFile('./data/patients.json', patients);
		resolve();
	})
}

module.exports = {
	findAll,
	findById,
	create,
	update,
	remove
}