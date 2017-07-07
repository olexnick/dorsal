import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {changeList} from '../actions/actions.js'


 class Navigation extends React.Component{
  constructor(props) {
      super(props)
      this.changeList=this.changeList.bind(this);
  }

  changeList(val){
    this.props.dispatch(changeList(val));
  }

  render(){
    return(
      <div className='container-fluid wraper-navigation'>
        <Row>
          <Navbar  collapseOnSelect className='navigation'>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><img className='logo-navbar' src='./img/logo.png' onClick={this.changeList.bind(this, 'enter')}/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem className='menu-item' href="#" onClick={this.changeList.bind(this, 'games')}>Games<span className='menu-item-b'></span></NavItem>
                <NavItem className='menu-item' href="#" onClick={this.changeList.bind(this, 'about')}>About us<span className='menu-item-b'></span></NavItem>
                <NavItem className='menu-item' href="#" onClick={this.changeList.bind(this, 'contact')}>Contact<span className='menu-item-b'></span></NavItem>
                <NavItem className='menu-item'  href="#" onClick={this.changeList.bind(this, 'blog')}>Blog<span className='menu-item-b'></span></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </div>
    )
  }
}
export default connect(function(store){
  return {
    projectReducer: store
  }
})(Navigation);
