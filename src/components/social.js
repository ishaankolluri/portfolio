import React, { Component } from 'react';

import { Row } from 'reactstrap';
import '../styles/animate.css';

import "../styles/about.css";
import '../styles/button.css';


export default class Social extends Component {
  render(){
    return (
      <Row className="animated fadeInUpBig socialContainer">
        <div className="btn-center">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ishaankolluri">
            <img className="social-btn" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/fb.png" alt="social"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/ishaankolluri">
            <img className="social-btn" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/twitter.png" alt="social"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ishaankolluri">
            <img className="social-btn" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/github.png" alt="social"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ishaankolluri">
            <img className="social-btn" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/linkedin.png" alt="social"/>
          </a>
        </div>
      </Row>
    );
    
  }
}