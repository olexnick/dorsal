import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class BanerTop extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid games-top'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <div className='gamse-circle'>
              <div className='gamse-circle-title'>
                <span><p>Manage <br/>your<br/>basketball <br/>team now!</p></span>
              </div>
            </div>
          <img  className='baner-top' src='./img/game_banner.jpg'/>
          <img className='baner-google' src='./img/playstore.png'/>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
