import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './components/heroList/heroList.jsx';
import Settings from './components/settings/Settings.jsx';
import AddHero from './components/addHero/AddHero.jsx';

class App extends Component {
	constructor() {
		super();

		this.state = {
			appName: 'Hero Book',
			heroList: [
				{
					name: 'Thor',
					desc: 'God of party'
				},
				{
					name: 'Jimbo',
					desc: 'Starcraft nerd'
				}
			]
		}
	}

  	render() {
    	return (
    		<>
	      		<Navbar appName={this.state.appName}/>

	      		<Route exact path="/"
	      			render={(props) => <HeroList heroes={this.state.heroList}/>}/>
	      			
	      		<Route path="/addHero" component={AddHero}/>
	      		<Route path="/settings" component={Settings}/>

	  			
    		</>
    	);
  	}
}

export default App;
