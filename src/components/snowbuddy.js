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
        <Row>
          <div className="a-head">Our project:</div>
          <p className="body">Our goal was to design a responsive website to <b>connect people in times of emergency</b>. 
          We purposefully kept the definition loose—we didn't want to begin designing a solution before figuring out our user needs.
          Our timeline went as follows:
          </p>
          <div className="body">
            <ol className="numberList">
              <li className="centered-list">Guerrilla research near CMU campus</li>
              <li className="centered-list">Synthesizing personas and storyboarding</li>
              <li className="centered-list">Wireframing</li>
              <li className="centered-list">High fidelity design</li>
            </ol>
          </div>
        </Row>
        <Row>
          <div className="a-head">Initial research:</div>
        </Row>
        <Row>
          <p className="body">
            To better understand the types of emergencies out there in a systematic fashion, we drew up a small map of the trajectories we were interested in. 
            None of us were familiar with a software-driven solution to emergencies, so we decided to put ink to paper first.
          </p>
        </Row>
        <Row>
          <img className="img-fluid portfolio-img medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_emergencymap.jpg" alt="header"/>
        </Row>
        <Row>
          <Col lg="9" xs="12">
            <p className="body-left">
              We wanted to create a way for neighbors to help each other during emergencies. However, the three of us haven't been through all conceivable emergencies in the world. 
              We took to the streets of Pittsburgh to poll our surroundings, asking them about past emergency experiences, what's bothered them the most, and what they wish had happened before and after the event. 
            </p>
            <p className="body-left">
              Our primary takeaway was that <b>it was really unlikely people would be willing to help each other during an actual emergency.</b> Some insights we received were:
            </p>
            <div className="body">
            <ul className="bulletList">
              <li className="bullet">"I'd be too scared for my own safety to help others in emergency situations".</li>
              <li className="bullet">"I'd much rather help others in less dangerous situations, or after an emergency situation has already happened."</li>
              <li className="bullet">"The things I need help with after an emergency are generally tasks I don't have the strength or experience to accomplish."</li>
            </ul>
            </div>
          </Col>
          <Col lg="3" xs="12"><img className="img-fluid portfolio-img" alt="guerrilla research" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_guerrilla.JPG" /></Col>
        </Row>
        <Row>
          <div className="a-head">Scenarios, project scope, and user personas:</div>
        </Row>
        <Row>
          <div>
            <p className="body">
              After consolidating the results of 10-12 guerrilla interviews, we crafted a series of <b>user scenarios </b>
              focused on creating a peer economy for individuals to help each other with emergencies. 
              We tested these scenarios with a variety of individuals to see whether any of them resonated with a majority. 
              We asked young students, strangers with children, teachers, and the elderly. 
              After discussing our feedback to the litany of emergency situations we created scenarios for, we decided to scope our solution: 
            </p>
            <p className="body">
              <b>Snowbuddy, a peer economy for neighbors to help each other in snow-related emergencies. More specifically, helping people shovel driveways, 
              salt roads, and break ice, so they may get on with their day.</b>
            </p>
          </div>
        </Row>
        <Row>
          <p className="body">
            After tentatively choosing our solution, we crafted 2 personas that we felt represented our solution's user base.
          </p>
        </Row>
        <Row>
          <Col lg="6" sm="12" xs="12"><img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_elaine.jpg" alt="header"/></Col>
          <Col lg="6" sm="12" xs="12"><img className="portfolio-img img-fluid" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_felix.jpg" alt="header"/></Col> 
        </Row> 
        <Row>
          <p className="body">
            We set out to validate our personas by contextualizing them with user scenarios. We created a storyboard where Elaine needed help clearing out her driveway, and simply requested a shoveler.
          </p>
          <img className="portfolio-img img-fluid medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_story1.jpg" alt="header"/>
          <p className="body">
           Our feedback was simple—it's extremely convenient to have a service like this on demand in suburban neighborhoods, but people wouldn't use it only for shoveling. So we altered the scope of the storyboard.
          </p>
          <img className="portfolio-img img-fluid medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddy_story2.jpg" alt="header"/>
        </Row>
        <Row>
          <div className="a-head">Wireframes and screens</div>
        </Row>
        <Row>
          <p className="body">
            We first designed extremely rough wireframes identifying the key screens of the app. 
            We were designing both for mobile and desktop, so we chose interactions that represented the experience of both the customer and provider. 
            After soliciting feedback for our wireframes, we came up with a set of screens that we felt represented the essence of the Snowbuddy experience.
          </p>          
        </Row>
        <Row>
          <img className="img-fluid flowchart flow-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyflow1.jpg" alt="flow1"/>
        </Row>
        <Row>
          <img className="img-fluid flowchart flow-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/snowbuddyflow2.jpg" alt="flow1"/>
          <p className="body">Our final design step was creating a short Invision prototype to walk our subjects through Snowbuddy's high fidelity design.</p>
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
            Having designed the core functionality of the application after 3 weeks of research, we took the time to identify key areas of improvement. 
            We felt that Snowbuddy in its current form excluded those with physical disabilities, as they would never be able to help anyone. 
            They could contribute in other ways, such as buying meals for the providers, and providing equipment to the neighborhood.
          </p>
          <p className="body">
            Additionally, we initially compartmentalized the needs of the provider and customer to the mobile and desktop platform, respectively. 
            Given more time, we'd likely create more features so that the entire feature set can be achieved from mobile. 
            Desktop, naturally, is limited in necessity for someone actively shoveling, but plenty of detail can be provided to help an interested customer achieve their ideal goal.
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