import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from '../store/store.js';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route} from 'react-router-dom';
import history from "../utils/history.js";

import Navigation from './navigation.js';
import Switch from './switch.js';
import Footer from './footer.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render(){
    return(
      <div>
        <Navigation/>
        <Switch/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render((
	<Provider store={store}>
   <App/>
	</Provider>
), document.getElementById("app"));
