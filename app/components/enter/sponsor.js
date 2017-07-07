import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Sponsor extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid baner'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className='sponsor-title'>
            <span>Sponsors:</span>
          </div>
        </Col>
          <Col xs={4} sm={4} md={4} lg={4} className='sponsor-first'>
            <img src='./img/sponsor1.png'/>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} className='sponsor-second'>
            <img src='./img/sponsor2.png'/>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} className='sponsor-third'>
            <img src='./img/sponsor3.png'/>
          </Col>
      </Row>
    </div>
    )
  }
}
