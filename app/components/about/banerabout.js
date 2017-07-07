import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class BanerAbout extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <div className='about-wraper-title'>
              <div className='about-slide-title'>
                <span>Dorsal8<br/>is a video game <br/>design company,<br/> dedicated to creating <br/>sports manager games<br/>for mobile devices. </span>
              </div>
            </div>
          <img  className='baner-top' src='./img/about.jpg'/>
          <div className='baner-botom'>
            <span>Founded in 2015, we are leading UKnow Basketball Manager,<br/> an International game and others which are in progress like<br/> Manager Soccer, Manager Football among others.</span>
          </div>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
