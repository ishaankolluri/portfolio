import React, { Component } from 'react';

import {Row, Col} from 'reactstrap';
import '../styles/animate.css';

import '../styles/button.css';
import '../styles/portfolio.css';


export default class Snowbuddy extends Component {

  handleBackToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render(){
    return (
      <div>
        <Row className="animated fadeIn header">
          <img className="size-image img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyhero.jpeg" alt="header"/>
          <div className="centeredTextContainer projectHeader">SNOWBUDDY</div>
          <br/>
          <div className="centeredTextContainer captionText">A responsively designed website to bring the community together during snow-related emergencies.</div>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://invis.io/TRF8096A7#/272209740_Splash" target="_blank">INVISION PROTOTYPE</a></button>
          </div>
        </Row>
        <Row className="animated fadeIn"><div className="a-list">Project Information</div></Row>
        <Row className="animated fadeIn">
          <Col lg="8" sm="12" xs="12">
            <p>
              This was a 3-week class project where we were asked to explore unorthodox use cases of the peer economy service model. <b>Felix Liu</b> was responsible for conducting guerrilla research. <b>Angela Huang</b> was responsible for assembling our process deliverables. I focused on wireframing and high fidelity screens.
            </p>
          </Col>
          <Col className="p-list" lg="4" sm="12" xs="12">
            <div className="b-list">Skills & Tools</div>
            <p>Interaction Design</p>
            <p>Guerrilla Research</p>
            <p>Sketch</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <div className="a-head">I hate cold weather.</div>
          <p className="body">
            I'm definitely still not used to East Coast winter weather, so when given the opportunity to design a peer economy service, I looked to solving any and all problems with snow. Snowbuddy is inspired by my experience living in a New York City apartment, 
            and having to shovel the street outside my stoop after a particularly nasty snowfall. I've been stuck downtown because roads were closed due to snow, and still have no idea how to salt a sidewalk.
          </p>
          <p className="body">
            Keeping these experiences in mind, our goal was to design a solution to <b>connect people in times of emergency</b>. 
          </p>
        </Row>
        <Row>
          <div className="a-head">Initial research:</div>
        </Row>
        <Row>
          <p className="body">
            Before choosing snow as a valid domain to explore services in, we created a small stakeholder map identifying the key individuals associated with "emergencies" or disaster response.
          </p>
        </Row>
        <Row>
          <Col lg="12" xs="12"><img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_emergencymap.jpg" alt="header"/></Col>
        </Row>
        <Row>
            <p className="body-left">
              We took to the streets of Pittsburgh to poll our surroundings, asking them about past emergency experiences, what's bothered them the most, and what they wish had happened before and after the event. 
              Our primary takeaway was that <b>it was really unlikely people would be willing to help each other during an actual emergency.</b> Some insights we received were:
            </p>
            <div className="body">
            <ul className="bulletList">
              <li className="bullet">"I'd be too scared for my own safety to help others in emergency situations".</li>
              <li className="bullet">"I'd much rather help others in less dangerous situations, or after an emergency situation has already happened."</li>
              <li className="bullet">"The things I need help with after an emergency are generally tasks I don't have the strength or experience to accomplish."</li>
            </ul>
            </div>
        </Row>
        <Row>
          <div className="a-head">Testing ideas</div>
        </Row>
        <Row>
          <div>
            <p className="body">
              After consolidating the results of 10-12 guerrilla interviews, we crafted a series of <b>user scenarios </b>
              focused on creating a peer economy for individuals to help each other with emergencies. 
              After discussing user feedback to the litany of emergency situations we created scenarios for, we decided to scope our solution to 
              <b>a peer economy for neighbors to help each other in snow-related emergencies—helping people shovel driveways, 
              salt roads, and break ice, so they may get on with their day.</b>
            </p>
          </div>
        </Row>
        <Row>
          <p className="body">
            After tentatively choosing our solution, we crafted 2 personas that we felt represented our solution's priority customers.
          </p>
        </Row>
        <Row>
          <Col lg="6" sm="12" xs="12"><img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_elaine.jpg" alt="header"/></Col>
          <Col lg="6" sm="12" xs="12"><img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_felix.jpg" alt="header"/></Col> 
        </Row> 
        <Row>
          <p className="body">
            We set out to validate our personas by contextualizing them with user scenarios. e created a storyboard where Elaine needed help clearing out her driveway, and simply requested a shoveler. 
            Our feedback was simple—it's extremely convenient to have a service like this on demand in suburban neighborhoods, but people wouldn't use it only for shoveling. So we altered the scope of the solution.
          </p>
        </Row>
        <Row>
          <Col lg="6" xs="12">
            <img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_story1.jpg" alt="header"/>
          </Col>
          <Col lg="6" xs="12">
            <img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_story2.jpg" alt="header"/>
          </Col>
        </Row>
        <Row>
          <div className="a-head">Wireframes and screens</div>
        </Row>
        <Row>
          <p className="body">
            We were designing both for mobile and desktop, so we chose interactions that represented the experience of both the customer and provider. 
            After soliciting feedback for our wireframes, we came up with a set of screens that we felt represented the Snowbuddy experience.
          </p>          
        </Row>
        <Row>
          <img className="img-fluid flowchart flow-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyflow1.jpg" alt="flow1"/>
        </Row>
        <Row>
          <img className="img-fluid flowchart flow-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyflow2.jpg" alt="flow1"/>
          <p className="body">Our final design step was creating a short InVision prototype to walk our subjects through Snowbuddy's high fidelity design.</p>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://invis.io/TRF8096A7#/272209740_Splash" target="_blank">INVISION PROTOTYPE</a></button>
          </div>
        </Row>
        <Row>
          <div className="a-head">Room to improve </div>
        </Row>
        <Row>
          <p className="body">
            We felt that Snowbuddy in its current form excluded those with disabilities, as they could not physically contribute. 
            They could possibly participate in other ways, such as buying meals for the providers, and providing equipment to the neighborhood.
          </p>
          <p className="body">
            Given more time, we'd create more features so that the entire feature set can be achieved from the mobile platform—not just that of the provider.
          </p>
        </Row>
        <Row>
          <div className="a-head">Major takeaways</div>
        </Row>
        <Row>
          <p className="body">
            The design space for this application was scoped to be very specific, but the peer economy space is broad and largely explored. 
            We did our absolute best to explore a costless solution to post-snow-emergency help by approaching it from the perspective of a tight-knit community. 
            I'd love to put these designs in the hands of my own neighbors in Pittsburgh and see how they feel about participating in this kind of network.
          </p>
        </Row>
        <hr/>
        <Row>
          <div className="btn-center">
            <button className="miniButton buttonShadow" onClick={() => this.handleBackToTop()}>BACK TO TOP</button>
          </div>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="miniButton buttonShadow"><a rel="noopener noreferrer" href="/portfolio">WORK</a></button>
          </div>
        </Row>
      </div>
    );
  }
}