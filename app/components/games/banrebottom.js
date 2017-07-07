import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class BanerBotton extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid games-botton'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <div className='game-title'>
              <span>Proximately...</span>
            </div>
          <img  className='baner-top' src='./img/para.jpg'/>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
