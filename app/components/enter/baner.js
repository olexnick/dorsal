import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Baner extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid baner'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
          <div className='baner-title'>
            <img src='./img/logo.png'/>
            <span>SPECIALIZED IN SPORTS MANAGER GAMES</span>
          </div>
          <img  className='baner-top' src='./img/banner.jpg'/>
          <div className='baner-botom'>
            <span>Dorsal8 arises to give a new look <br/> to sports managers games, providing them <br/> with new features that users will really enjoy<br/> entertaining moments.</span>
          </div>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
