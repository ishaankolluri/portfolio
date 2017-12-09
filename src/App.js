import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import {
  Route,
  NavLink,
  BrowserRouter,
  
} from "react-router-dom";
import './styles/animate.css';



import Home from "./components/home";
import About from "./components/about";
import Social from "./components/social";
import Snowbuddy from "./components/snowbuddy";
import './styles/fonts.css';
import './styles/nav.css';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="fixedPadding">
          <Container className="fixedNav">
            <Row className="mobilePadding">
              <Col className="logoContainer" md="4" lg="4" sm="3" xs="3">
                  <a href="/"><img className="logo" alt="logo" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/logo.png"/></a>
              </Col>
              <Col className="tabs" md="8" lg="8" sm="9" xs="9">
                <ul>
                  <li>
                    <NavLink
                      className="navStyles"
                      activeClassName="tabbed"
                      exact
                      to="/">
                      Home
                    </NavLink>
                    <span></span>
                  </li>
                  <li>
                    <NavLink
                      className="navStyles"
                      activeClassName="tabbed"
                      to="/about">
                      About
                    </NavLink>
                    <span></span>
                  </li>
                  <li>
                    <NavLink
                      className="navStyles"
                      activeClassName="tabbed"
                      to="/process">
                      Process
                    </NavLink>
                    <span></span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Container>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/process" component={About}/>
              <Route path="/avs" component={Snowbuddy}/>
              <Route path="/snowbuddy" component={Snowbuddy}/>
          </Container>
          <Container>
            <Social />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}