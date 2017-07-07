import React from 'react';
import ReactDOM from 'react-dom';

import Baner from './../components/enter/baner.js';
import Sponsor from './../components/enter/sponsor.js';
import Slide from './../components/enter/slide.js';

export default class Enter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Baner/>
        <Sponsor/>
        <Slide/>
      </div>
    )
  }
}
