import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routas from './routes';


export default class Header extends Component{

	render(){
		return(
			<div>
				<Router>
					<h1><Link to={'/'} style={{textDecoration: 'none'}}>ROUTE CRUD</Link></h1>
				</Router>
				<Routas />
			</div>
		)
	}
	
}