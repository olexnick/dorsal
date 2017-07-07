import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';


export default class Values extends React.Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className='container-fluid wraper-values'>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12} className='values' >
          <span>Values</span>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <div className="value_box">
    		   <div className="value_icon">
    		    <i className="fa fa-users" aria-hidden="true"></i>
    		   </div>
    		   <span className='value_box-title'>Passion for the Customer<br/></span>
    			 <span className='value_box-botton'>We have a clear vocation and customer orientation</span>
    		 </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <div className="value_box">
            <div className="value_icon">
    		      <i className="fa fa-signal" aria-hidden="true"></i>
    		    </div>
    		    <span className='value_box-title'>  Growth and continuous improvement<br/></span>
    			  <span className='value_box-botton'>  We have a clear vocation and customer orientation </span>
    		 </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <div className="value_box">
    		   <div className="value_icon">
    		   <i className="fa fa-bar-chart" aria-hidden="true"></i>
    		   </div>
    		    <span className='value_box-title'> Result orientation <br/></span>
    			  <span className='value_box-botton'>  All our actions must take us closer to our goals </span>
    		 </div>
        </Col>
      </Row>
    <Row>
      <Col xs={12} sm={4} md={4} lg={4}>
        <div className="value_box">
  		   <div className="value_icon">
  		   <i className="fa fa-user-plus" aria-hidden="true"></i>
  		   </div>
  		    <span className='value_box-title'>We value people<br/></span>
  			 <span className='value_box-botton'>We value our employees, customers, partners and collaborators, not only as professionals but also as individuals</span>
  		 </div>
      </Col>
      <Col xs={12} sm={4} md={4} lg={4}>
        <div className="value_box">
  		   <div className="value_icon">
  		    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
  		   </div>
  		    <span className='value_box-title'>Confidence and security<br/></span>
  			 <span className='value_box-botton'>  We aim to be a trusted company that puts the safety of people above all. We are concerned about the safety of people with whom we work </span>
  		 </div>

      </Col>
      <Col xs={12} sm={4} md={4} lg={4}>
        <div className="value_box">
  		   <div className="value_icon">
  		   <i className="fa fa-comments-o" aria-hidden="true"></i>
  		   </div>
  		    <span className='value_box-title'>Integrity<br/></span>
  			 <span className='value_box-botton'> We practice business  ethics and believe in the integrity and honesty of people. We encourage transparency, openness and communication</span>
  		 </div>
  	  </Col>
    </Row>
    </div>
    )
  }
}
