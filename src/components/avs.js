import React, { Component } from 'react';

import {Row, Col} from 'reactstrap';
import '../styles/animate.css';

import '../styles/button.css';
import '../styles/portfolio.css';


export default class AVS extends Component {

  handleBackToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render(){
    return (
      <div>
        <Row className="animated fadeIn header">
          <img className="size-image img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_final_2.png" alt="header"/>
          <div className="centeredTextContainer projectHeader">PERSUASIVELY DESIGNING THE SELF-DRIVING CAR</div>
          <br/>
          <div className="centeredTextContainer captionText">We found that pedestrians didn't feel like autonomous vehicles were aware of their presence, especially in ambiguous situations like crosswalks. <br/>To solve this, we built a digital windshield display to convey the vehicle's awareness of objects around them.</div>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ishaankolluri/MitigatingCommunicationAmbiguity.pdf" target="_blank">FULL PAPER</a></button>
          </div>
        </Row>
        <Row className="animated fadeIn"><div className="a-list">Project Information</div></Row>
        <Row className="animated fadeIn">
          <Col lg="8" sm="12" xs="12">
            <p>
              This project is ongoing, but was officially sponsored for 4 months. I performed qualitative user research and created wireframes and experiential prototypes. <b>Robert Paul</b> was responsible for market analysis and low fidelity prototyping. <b>Ross Rybalov</b> created high fidelity screens and our concept video that we presented in our research symposium.
            </p>
          </Col>
          <Col className="p-list" lg="4" sm="12" xs="12">
            <div className="b-list">Skills & Tools</div>
            <p>Interface Design</p>
            <p>Experience Prototyping</p>
            <p>Sketch</p>
            <p>Illustrator</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <div className="a-head">(Self-driving) Uber everywhere.</div>
          <p className="body">
          For someone who's never seen one before, seeing a self-driving car can be unsettling. Uber has dispatched a fleet of self-driving cars, equipped with a spinning laser that functions both as the car's eye and an indicator that the car may not have a human operator. 
          On the surface, people are generally enamored with autonomous vehicles due to their implications for convenience and safety. However, Ross, Robert, and I weren't fully convinced. We took advantage of our unique location and endeavored to solve for breakdowns in the self-driving car experience.
          </p>
        </Row>
        <Row>
          <div className="a-head">How do people really feel about self-driving cars?</div>
          <p className="body">
          We interviewed students from CMU and UPitt, family members, and elderly neighbors kind enough to lend us their time. Questions we asked them included:
          </p>
          <p className="body">
            We found that people didn't feel the self-driving car was aware of their presence. They missed eye contact and gestures that accompany the current state of traffic. They were especially worried about a lack of communication on crosswalks, where there are no enforcable rules. This sentiment was a large departure from the optimistic outlook we initially heard.
            After conducting further interviews to better validate our findings and preliminary prototyping research, we decided to focus on creating a design solution for pedestrians that helped them understand how autonomous vehicles saw them.
          </p>
        </Row>
        <Row>
          <div className="a-head">Initial design and experience prototyping</div>
          <p className="body">
            The three of us separately created what we thought a good display for a self-driving car would be on paper. We tried to create a visualization that incorporated distance and perspective that someone would <em>instantaneously</em> understand.
          </p>
        </Row>
        <Row>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto1.jpg" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto2.jpg" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto3.jpg" alt="header"/>
          </Col>
        </Row>
        <Row>
          <p className="body">
          After asking locals if they'd consent to a quick user test, we gauged their reaction to each prototype mounted on Ross's car.
          </p>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_test1_ishaan.jpg" alt="header"/>
          </Col>
          <Col xs="12" lg="6">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_test1_ross.JPG" alt="header"/>
          </Col>
        </Row>
      
        <Row>
          <div className="a-head">Capturing instant understanding</div>
        </Row>
        <Row>
          <p className="body">
            We sought to make people feel comfortable when they looked at our display. It shouldn't take more than a second to get what the car is about to do, or what it thinks you'll do. We began exploring digital iconography to achieve this.
          </p>
        </Row>
        <Row>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_midfi_red.png" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_midfi_green.png" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_midfi_yellow.png" alt="header"/>
          </Col>
        </Row>
        <Row>
          <p className="body">
            While shopping these screens around Pittsburgh, we changed the color and iconography to closely match pedestrians' understanding of walking and stopping in the presence of a car. We found the "walking man" you see at a stoplight was the linchpin of good, communicative design.
          </p>
        </Row>
        <Row>
          <div className="a-head">The various states of a self-driving car</div>
        </Row>
        <Row>
          <p className="body">
            Our final round of testing produced a prototype with three "states" — the most common green state where the pedestrian has clear right of way, a neutral passive state that serves as a transition point, and a red state reserved for situations where the autonomous vehicle absolutely needs to move.
          </p>
        </Row>
        <Row>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_final_1.png" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_final_2.png" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_final_3.png" alt="header"/>
          </Col>
        </Row>
        <Row>
          <div className="a-head">Final presentation & whitepaper</div>
        </Row>
        <Row>
          <p className="body">
            On symposium day, we created a video embodying the different scenarios we prototyped. We placed a paper crosswalk on the ground to help our audience members empathize. Our metric for success was whether they understood their available actions near-instantaneously. 
            On the whole, I feel we tapped into the "instantaneous" thought process that would be required of a human-machine interaction with an autonomous vehicle; we received generally positive remarks from symposium visitors. Our final research deliverable was a whitepaper documenting our research and design process, culminating in a justification of our design.
          </p>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ishaankolluri/MitigatingCommunicationAmbiguity.pdf" target="_blank">FULL PAPER</a></button>
          </div>
        </Row>
        <Row><img className="img-fluid portfolio-img medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_presentation.jpg" alt="header"/></Row>
        <Row>
          <div className="a-head">Reflections & further improvements</div>
        </Row>
        <Row>
          <p className="body">
            We would have loved to protoype and user test a full-size laminate version of our high fidelity prototype. Through this, we would be able to best capture how quickly pedestrians understand our design.
            Additionally, I would have liked to design for pedestrians with visual impairments, and perhaps create a unique auditory experience for them.
          </p>
          <p className="body">
            This was an extremely interesting intellectual problem for us. The challenge in autonomous vehicles is designing for the transition infrastructure, with both human and artificially intelligent drivers on the road. There is a lot of industry and academic research in the field, and I'm very glad I got to help design the future.
          </p>
        </Row>

      </div>
    );
  }
}