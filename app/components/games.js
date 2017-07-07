import React from 'react';
import ReactDOM from 'react-dom';

import BanerTop from './../components/games/banertop.js';
import BanerBotton from './../components/games/banrebottom.js';

export default class Games extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <BanerTop/>
        <BanerBotton/>
      </div>
    )
  }
}
