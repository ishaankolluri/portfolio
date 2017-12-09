import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';
import '../styles/animate.css';

import '../styles/button.css';
import '../styles/portfolio.css'


export default class Snowbuddy extends Component {
  render(){
    return (
      <div>
        <Row className="animated fadeInDownBig header">
          <img className="size-image img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyhero.jpeg" alt="header"/>
          <div className="centeredTextContainer sectionHeader">SNOWBUDDY</div>
          <br/>
          <div className="centeredTextContainer captionText">A responsively designed website to bring the community together during snow-related emergencies.</div>
        </Row>
      </div>
    );
  }
}