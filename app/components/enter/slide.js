import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Slide extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid slide'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <div className='wraper-slide-title'>
              <div className='slide-title'>
                <span>Games <br/> vailable for <br/> Android and<br/>  soon for iOS.</span>
              </div>
            </div>
          <img  className='slide-top' src='./img/banner2.jpg'/>
          <div className='slide-botom'>
            <span>The player can enjoy our Managers,<br/> </span>
		        <span>WHEN THEY WANT, WHERE THEY WANT</span>

          </div>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}
