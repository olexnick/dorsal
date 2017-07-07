import React from 'react';
import ReactDOM from 'react-dom';

import BanerAbout from './../components/about/banerabout.js';
import Team from './../components/about/team.js';
import Values from './../components/about/values.js';

export default class About extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <BanerAbout/>
        <Team/>
        <Values/>
      </div>
    )
  }
}
