import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';
import '../styles/animate.css';

import "../styles/about.css";
import '../styles/button.css';


export default class About extends Component {
  render(){
    return (
      <div>
        <Row className="about">
          <Col xs="12" sm="12" md="12" lg="8">
            <img className="animated fadeIn img-fluid profileImage" alt="profile" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/ishaanprofile.JPG"/>
          </Col>
          <Col className="animated fadeInRight" xs="12" sm="12" md="12" lg="4">
            <p>
              Hi, I'm Ishaan Kolluri, a programmer and designer from the Bay Area.
              I graduated from Columbia University with a degree in Computer Science, 
              and I'm currently pursuing a Masters of Human-Computer Interaction from Carnegie Mellon University.
              I play basketball and golf, love Thai food, and dabble in photography. I'm a huge fan of music,
              my favorite genres being hip-hop and world music. Lastly, I'm a dancer of Bhangra - 
              an art form native to the Punjab region of South Asia.
            </p>
            <p>
              Say hello!<br/>
              <b>ishaankolluri@gmail.com</b><br/>
              <b>408 497 4875</b>
            </p>
            <div className="btn-center">
              <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ishaankolluri/IshaanKolluriNov2017.pdf" target="_blank">RESUME</a></button>
            </div>
          </Col>
        </Row>      
      </div>
    );
  }
}