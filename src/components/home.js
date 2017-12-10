import React, { Component } from 'react';

import {
  NavLink,
} from "react-router-dom";
import Typed from 'react-typed';
import { Row, Col } from 'reactstrap';
import '../styles/animate.css';

import '../styles/type.css';
import '../styles/home.css';
import '../styles/button.css';


export default class Home extends Component {
  render(){
    return (
      <div>
        <Row className="heroText">
          <Col className="animated fadeIn">
            <Typed 
              strings={[
                "I'm Ishaan—a designer and technologist from California.",
                "I want to improve trust between people and technology.",
                "Check out my work below."
              ]} 
              typeSpeed={40}
              backSpeed={15}
              backDelay={3000}
            />
            {/* <div className="btn-center">
              <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ishaankolluri/IshaanKolluriNov2017.pdf" target="_blank">RESUME</a></button>
            </div> */}
          </Col>
        </Row>
        <Row className="animated fadeInUpBig projectContainer">
          <Col className="folioImageContainer" xs="12" sm="12" md="4" lg="4">
            <NavLink to="/avs"><img className="img-fluid img-folio folioThumbnail" alt="thumbnail" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/uber.gif"/></NavLink>
            <div className="thumbnailHeader">SELF-DRIVING VEHICLE STIGMA</div>
              <p>
                Through conversations with friends and family, we noticed concerns regarding autonomous vehicles.
                We researched ways to smoothen interactions with them on the road.
              </p>
              <p className="skillContent"><span className="skillHeader">Skills: </span>survey design, user interviews, product design</p>
          </Col>
          <Col className="folioImageContainer" xs="12" sm="12" md="4" lg="4">
          <NavLink to="/snowbuddy"><img className=" img-fluid img-folio folioThumbnail" alt="thumbnail" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy.jpg"/></NavLink>
            <div className="thumbnailHeader">SNOWBUDDY</div>
              <p>
                Moving to the East Coast means dealing with daily snow-related activities, like shoveling and salting.
                Snowbuddy connects you with your neighbors so you can deal with it together.
              </p>
              <p className="skillContent"><span className="skillHeader">Skills: </span>responsive mobile & web interaction design, survey design, guerrilla interviews </p>
          </Col>
          <Col className="folioImageContainer" xs="12" sm="12" md="4" lg="4">
            <img className="img-fluid img-folio folioThumbnail" alt="thumbnail" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/uber.gif"/>
            <div className="thumbnailHeader">THINKING ABOUT YOU</div>
              <p>
                I designed a mobile social network for exclusive groups of friends.
                Thinking About You enables brief, friendly interactions to boost self-esteem, and incentivizes users to pay it forward.
              </p>
              <p className="skillContent"><span className="skillHeader">Skills: </span>mobile & interaction design</p>
          </Col>
        </Row>
      </div>
    );
  }
}