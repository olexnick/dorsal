import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, FieldGroup, FormControl, FormGroup, ControlLabel, HelpBlock, Button} from 'react-bootstrap';


export default class FormContact extends React.Component{
  constructor(props) {
      super(props);
      this.state={
          value: '',
          mail:'',
          issue:'',
          comments:'',
          widthMap: 145
      }
      this.getValidationStateName=this.getValidationStateName.bind(this);
      this.getValidationStateEmail=this.getValidationStateEmail.bind(this);
      this.handleChangeName=this.handleChangeName.bind(this);
      this.handleChangeEmail=this.handleChangeEmail.bind(this);
      this.handleChangeIssue=this.handleChangeIssue.bind(this);
      this.handleChangeComments=this.handleChangeComments.bind(this);
  }
  componentWillMount(){
    let scren = screen.width;
    if (scren < 691){
      let  screnNew = scren-30;
        this.setState({
          widthMap:screnNew
        });
      }else {
        let minscren = (scren/2)-30;
        this.setState({
          widthMap:minscren
        });
      }
    console.log( "текст");
    console.log(this.state.widthMap);
  }

  getValidationStateName() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  getValidationStateEmail() {
    const length = this.state.mail.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChangeName(e) {
    this.setState({ value: e.target.value });
  }
  handleChangeEmail(e) {
    this.setState({ mail: e.target.value });
  }
  handleChangeIssue(e) {
    this.setState({ issue: e.target.value });
  }
  handleChangeComments(e) {
    this.setState({ comments: e.target.value });
  }
  render(){
    // let widthStart=screen.width-40
    // let widthMap={
    //   default: widthStart
    // }

    return(
      <div className='container-fluid contact-main'>
        <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <span className='contact-title-top'>Any questions please contact us by email or in any of our social networks like:<br/></span>
          <span className='contact-title'>CONTACT FORM</span>
          <form className='contact-form'>
            <FormGroup controlId="formBasicText" validationState={this.getValidationStateName()}>
              <ControlLabel>Name (required)</ControlLabel>
              <FormControl type="text" value={this.state.value} placeholder="Name" onChange={this.handleChangeName}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationStateEmail()}>
              <ControlLabel>Email (required)</ControlLabel>
              <FormControl type="text" value={this.state.mail} placeholder="Email" onChange={this.handleChangeEmail}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Issue</ControlLabel>
              <FormControl type="text" value={this.state.issue} placeholder="" onChange={this.handleChangeIssue}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Comments</ControlLabel>
              <FormControl componentClass="textarea" value={this.state.comments} onChange={this.handleChangeComments} placeholder="" />
            </FormGroup>
          </form>
           <Button bsStyle="warning">Enviar</Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <span className='map-title'>POSTAL ADDRESS<br/></span>
          <span className='map-adress'>Polígono La Fuenfresca, Av. de Sagunto, <br/>116 44002, Teruel (Spain).<br/></span>
          <span className='map-title-botton'>LOCATION</span>
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12230.661511043774!2d-75.0951768365818!3d39.97123355147114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1486754150992"  frameBorder="0" style={{border:0}} style={{width: this.state.widthMap}} allowFullScreen></iframe>
          </div>
        </Col>
      </Row>
    </div>
    )
  }
}
    {/* {this.state.validadddomainsproject === null ? "form-control" : this.state.validadddomainsproject === true ? cssClassesTrue : cssClassesFalse} */}
