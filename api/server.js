const http = require('http');
const {getPatients,getPatient,createPatient,updatePatient,removePatient} = require('./controllers/patientController');

const server = http.createServer((req, res) => {
	
	if(req.url === '/api/patients' && req.method === 'GET'){
		
		getPatients(req,res);
		
	}else if(req.url.match(/\/api\/patients\/([0-9]+)/) && req.method === 'GET'){
		
		const id = req.url.split('/')[3];
		getPatient(req,res,id);
		
	}else if(req.url === '/api/patients' && req.method === 'POST'){
		
		createPatient(req,res);
		
	}else if(req.url.match(/\/api\/patients\/([0-9]+)/) && req.method === 'PUT'){
		
		const id = req.url.split('/')[3];
		updatePatient(req,res,id);
		
	}else if(req.url.match(/\/api\/patients\/([0-9]+)/) && req.method === 'DELETE'){
		
		const id = req.url.split('/')[3];
		removePatient(req,res,id);
		
	}else{
		res.writeHead(404, {'Content-Type':'application/json'});
		res.end(JSON.stringify({message:'Patient info not found'}));
	}
	
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
