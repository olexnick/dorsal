import React from "react";
import {connect} from 'react-redux';

import {changeTab} from '../actions/actions.js';
import Enter from './enter.js';
import Games from './games.js';
import About from './about.js';
import Contact from './contact.js';

 class Switch extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
    return(
			<div>
        {
					(() => {
						switch(this.props.projectReducer.tab){
							case "enter":
								return <Enter/>;
							case "games":
								return <Games/>;
							case "about":
								return <About/>;
							case "contact":
								return <Contact/>;
						}
					})()
				}
      </div>
		)
	}
}
export default connect(function(store) {
	return {
		projectReducer: store
	}
})(Switch);
