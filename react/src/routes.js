import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '././components/Home/Home';
import About from '././components/About/About';
import Services from '././components/Services/Services';
import Gallery from '././components/Gallery/Gallery';
import Contact from '././components/Contact/Contact';
import './routes.css';

export default class Routas extends Component{
	render(){

		return(
			<div className="head-listas">
				<Router>
					<div className="listas">
						<ul>
							<li><Link to={'/'} style={{textDecoration: 'none'}} className="Linkis">Home</Link></li>
							<li><Link to={'/about'} style={{textDecoration: 'none'}} className="Linkis">About</Link></li>
							<li><Link to={'/services'} style={{textDecoration: 'none'}} className="Linkis">Services</Link></li>
							<li><Link to={'/gallery'} style={{textDecoration: 'none'}} className="Linkis">Gallery</Link></li>
							<li><Link to={'/contact'} style={{textDecoration: 'none'}} className="Linkis">Contact</Link></li>
						</ul>
					</div>
					<br></br>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/services' component={Services} />
						<Route path='/Gallery' component={Gallery} />
						<Route path='/Contact' component={Contact} />
					</Switch>
				</Router>
			</div>
		)
	}
}