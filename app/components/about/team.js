import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Team extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid baner'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
          <img  className='baner-top' src='./img/team.jpg'/>
          <div className='baner-botom'>
            <span>Our team consist of experienced <br/> professionals in their fields,<br/> like engineers, Marketing department,<br/> designers,….</span>
          </div>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
