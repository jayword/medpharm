import React, {Component} from 'react';

export default class HeaderComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		return(
			<div>
				<header>
					<nav className="navbar navbar-expand-md">
						<div>
							<a href="" className="navbar-brand">Patient Records App</a>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}