import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Foter extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    return(
      <div className='container-fluid foter'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <a href="#"><img src='./img/logo.png'/></a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <span>&copy; 2016 Dorsal8. All rights Reserved</span>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className='foter-contact'>
          <a className='foter-botton' href="#">Language </a>
          <a  className='foter-botton' href="#">Contact </a>
          <a className='foter-botton' href="#">Support</a>
        </Col>
      </div>
    )
  }
}
