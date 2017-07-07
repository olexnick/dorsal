import React from 'react';
import ReactDOM from 'react-dom';

import FormContact from './../components/contact/formcontact.js';


export default class Contact extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <FormContact/>
      </div>
    )
  }
}
