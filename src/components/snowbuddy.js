import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';
import '../styles/animate.css';

import '../styles/button.css';
import '../styles/portfolio.css'


export default class Snowbuddy extends Component {
  render(){
    return (
      <div>
        <Row className="animated fadeIn header">
          <img className="size-image img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyhero.jpeg" alt="header"/>
          <div className="centeredTextContainer projectHeader">SNOWBUDDY</div>
          <br/>
          <div className="centeredTextContainer captionText">A responsively designed website to bring the community together during snow-related emergencies.</div>
        </Row>
        <Row className="animated fadeIn"><div className="a-list">Project Information</div></Row>
        <Row className="animated fadeIn">
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Logistics</div>
            <p>3 weeks</p>
            <p>3 person team</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">My Role</div>
            <p>Guerrilla Researcher</p>
            <p>Interaction Designer</p>
            <p>Creative Head</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Skills</div>
            <p>Mobile and Web Screen Design</p>
            <p>Click-through prototyping</p>
            <p>Wireframing</p>
            <p>Storyboarding</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Tools</div>
            <p>Sketch</p>
            <p>Invision</p>
            <p>Pencil & Paper</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <div className="a-head">I hate cold weather.</div>
          <p className="body">
            When I moved from California to New York, the first thing I did was buy blizzard-grade winter clothing.
            At the first signs of winter, I proudly walked outside in my new gear, and everyone promptly ridiculed me for it.
            I'm definitely still not used to winter weather, so when given the opportunity to design a responsive website for an emergency response peer economy, 
            I was somewhat amused when our research took us in the direction of snow. Snowbuddy is inspired by my experience living in a New York City apartment, 
            and having to shovel the street outside my stoop after a particularly nasty snowfall. I've been stuck downtown because roads were closed, and have no idea how to salt a sidewalk.
          </p>
        </Row>
      </div>
    );
  }
}