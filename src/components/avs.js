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
          <div className="centeredTextContainer projectHeader">MITIGATING PEDESTRIAN UNCERTAINTY WITH AUTONOMOUS VEHICLES</div>
          <br/>
          <div className="centeredTextContainer captionText">A research project where we created a digital display to be placed on the windshield of autonomous vehicles 
            to specifically address <br/>the uncertainty pedestrians feel when confronted with them in ambiguous road situations.</div>
        </Row>
        <Row>
          <div className="btn-center">
            <button className="resumeButton buttonShadow"><a rel="noopener noreferrer" href="https://invis.io/TRF8096A7#/272209740_Splash" target="_blank">FULL PAPER</a></button>
          </div>
        </Row>
        <Row className="animated fadeIn"><div className="a-list">Project Information</div></Row>
        <Row className="animated fadeIn">
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Logistics</div>
            <p>5 weeks</p>
            <p>3 person team</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">My Role</div>
            <p>UX Researcher</p>
            <p>Project Manager</p>
            <p>UX Designer</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Skills</div>
            <p>Display Design</p>
            <p>Experience Prototyping</p>
            <p>Concept Videography</p>
          </Col>
          <Col className="p-list" lg="3" sm="12" xs="12">
            <div className="b-list">Tools</div>
            <p>Sketch</p>
            <p>Illustrator</p>
            <p>Photoshop</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <div className="a-head">Uber everywhere.</div>
          <p className="body">
          I like to use Uber a lot in Pittsburgh. It’s really cold in the late fall and winter, and the prospect of walking for half an hour to campus can be heavy at 8:00 in the morning. 
          Funnily enough, a lot of the Ubers that pick me up are self-driving ones. Uber’s Advanced Technology Group, responsible for their fleet of self-driving cars, 
          have a large campus in the Strip District in Pittsburgh. It was an unsettling experience seeing the LIDAR-equipped car pull up to my stoop, but after a couple of months of seeing them around the neighborhood, 
          I got slowly used to it. Not everyone shares my opinion, however—parents and elderly citizens have a noticeably more cautious response to autonomous vehicles.
          </p>
        </Row>
        <Row>
          <div className="a-head">Exploration through initial interviews</div>
          <p className="body">
          At the Human-Computer Interaction Institute at Carnegie Mellon University, 
          our team of three decided we wanted to explore human reactions to autonomous vehicles after seeing varied responses from our peers and neighbors. 
          Before submitting our formal proposal, we set up 8 interviews with individuals from varied demographics. This included:
          </p>
          <div className="body">
            <ul className="bulletList">
              <li className="centered-list">Undergrads from CMU (ages 18-22)</li>
              <li className="centered-list">Graduate students in our building (ages 22-32)</li>
              <li className="centered-list">Family members (ages 45-55)</li>
              <li className="centered-list">Elderly Neighbors in Pittsburgh (ages 60-75)</li>
            </ul>
          </div>
          <p className="body">
          Some questions we asked them included, but were not limited to are below:
          </p>
          <div className="body">
            <ul className="bulletList">
              <li className="centered-list">Are you familiar with the concept of an autonomous vehicle?</li>
              <li className="centered-list">How do you feel about autonomous vehicles eventually replacing general transportation?</li>
              <li className="centered-list">Would you feel comfortable taking a ride by yourself in an autonomous vehicle without a driver? Why?</li>
              <li className="centered-list">Would you feel comfortable crossing the street if you saw an autonomous vehicle approaching the crosswalk? Why?</li>
              <li className="centered-list">Do you trust if an autonomous vehicle would stop if you put your hand our on the road?</li>
            </ul>
          </div>
          <p className="body">
            Our interviews revealed a couple of generalizable, interesting points. 
            People don’t feel that the car detects human presence, as it's difficult to operate on roads without eye-to-eye contact and gestures. 
            Most respondents remarked early in the interview that the notion of self-driving cars on the road was a step in the right direction. 
            However, some balked at the idea of actually seeing one on the road, especially in road situations where there were no enforceable rules, like crosswalks. 
            This led us to believe that there was an interesting communication issue between pedestrians and autonomous vehicles, and we chose to explore that in our research. 
            We proposed to explore potentially ambiguous-to-negative sentiments humans have about autonomous vehicles, specifically from the perspective of a pedestrian.
          </p>
        </Row>
        <Row>
          <div className="a-head">Our formal research premise and project timeline</div>
        </Row>
        <Row>
          <p className="body">
          After conducting further interviews to better validate our findings and preliminary prototyping research, we arrived at our final thesis, written in its entirety below.
          </p>
          <p className="body">
            We chose to explore the on-road relationship between pedestrians and autonomous vehicles, investigating any ambiguity humans may experience when confronted with a vehicle without a driver. 
            Our early user interviews implied that people make snap decisions when crossing the road by immediately making eye contact with the driver, followed by optional hand motioning. 
            Many are comfortable with the advent of AVs, but are apprehensive when confronted with a real, on-road situation. 
            We anticipate more friction as autonomous vehicles continue to be introduced on the road. 
            For this reason, our team endeavored to design a smart glass display to be placed on the vehicle that would maintain the brevity and simplicity of human-human interaction. 
            We scoped our design context to a situation of known ambiguity—a crosswalk without street lights where the car and human both arrive simultaneously.          
          </p>
          <p className="body">This was finalized midway through the project. Our full project timeline was as follows.</p>
          <div className="body">
            <ol className="numberedList">
              <li className="centered-list">One-on-one interviewing</li>
              <li className="centered-list">Reviewing existing research regarding autonomous vehicles</li>
              <li className="centered-list">Paper and experience prototyping</li>
              <li className="centered-list">Digital prototypes, experience prototyping, and concept videography</li>
              <li className="centered-list">Research presentation</li>
            </ol>
          </div>
        </Row>
        <Row>
          <div className="a-head"></div>
        </Row>
        <Row>
          <div className="a-head">Reviewing existing research</div>
        </Row>
        <Row>
          <p className="body">
          After we finalized the scope of our project, we looked at existing research and literature concerning autonomous vehicles and pedestrians. 
          Nissan and BMW are both companies that have tried to incorporate LEDs on the body of the vehicle to communicate intent. 
          Additionally, Wendy Ju, a prominent researcher on the subject of automation, was a resource we looked greatly to in better understanding 
          the academic world’s approach to autonomous vehicle improvements. Our biggest takeaway was that our solution had to trigger 
          “system-one processing”, where the pedestrian need not think about what our design means for more than mere moments. 
          We decided to use this as a metric to better understand how successful we were in our research.
          </p>
          <p className="body">
            The full citations can be found in the paper we wrote linked at the top and bottom of this page.
          </p>
        </Row>
        <Row>
          <div className="a-head">Initial design and experience prototyping</div>
          <p className="body">
            The first thing we did at this point was separate and individually prototype what we thought a good display for a self-driving car would be on paper. 
            The three of us parallel prototyped a visualization that would help pedestrians understand the status of the vehicle as the pedestrian changes their position near the car.
          </p>
        </Row>
        <Row>
          <img className="img-fluid portfolio-img medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto1.jpg" alt="header"/>
        </Row>
        <Row>
          <p className="body">
            Display 1 would be mounted either on the window or windshield. 
            The closer humans come to the vehicle, the larger the blue portion of the display grows.
          </p>
        </Row>
        <Row>
          <img className="img-fluid portfolio-img medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto2.jpg" alt="header"/>
        </Row>
        <Row>
          <p className="body">
            Display 2 abstractly represented groups of people as particles, that would move and increase correspondingly in size with pedestrians.  
            This idea explored the avoidance of representing humans anthropomorphically.
          </p>
        </Row>
        <Row>
          <img className="img-fluid portfolio-img medium-image-inline" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_proto3.jpg" alt="header"/>
        </Row>
        <Row>
          <p className="body">
            We decided to borrow from a stoplight iconography and depict a humanoid figure as they move across the street on Display 3. 
            The green rectangle is meant to let pedestrians know that it's safe to cross.
          </p>
        </Row>
        <Row>
          <p className="body">
          We used a car and waited for unsuspecting people of all ages on the street. 
          After asking them if they'd consent to a quick user test, we gauged their reaction on a crosswalk to each prototype, which we'd either operate or explain as they moved in front of the car.
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
          <p className="body">
            The two prototypes that elicited the most positive feedback were displays 2 and 3. All of our respondents felt display 2's particles were an abstract representation of the pedestrian. 
            All of our respondents also naturally recognized display 3's humanoid shape as a representation of themselves, with the green rectangle telling them walking is okay.
          </p>
          <p className="body">
            The reason display 1 was received less well was due to the fact that the user doesn't need to know they're coming closer to the car, which is the fundamental purpose of this display. They naturally already know that. 
            Additionally, some users felt display 2 didn't provide any room for the pedestrian to communicate their intent back to the car due to its abstract nature; there are no gestures to be recognized. While display 3 is more 
            suitable in that sense, other respondents felt the green rectangle was creepy. They felt like they were being tracked.
          </p>
          <p className="body">
            Overall, we decided to fix a couple of things. We wanted to make sure the display better conveyed vehicle intent, as some were confused as to whether the vehicle was telling the pedestrian what to do or if the display was the vehicle's interpretation of the pedestrian's next action. 
            Additionally, the simpler the better—too much information would cause the user to focus on the display for longer than necessary. We dedicated ourselves to experimenting with color to help communicate vehicle state.
          </p>
        </Row>
        <Row>
          <div className="a-head">Digital prototyping and round 2 of user testing</div>
        </Row>
        <Row>
          <p className="body">
            After collecting feedback on the road with our paper prototypes, we sat down together and ideated using the feedback from the previous section. A quick session yielded a rough version below. 
          </p>
        </Row>
        <Row>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_test1_ishaan.jpg" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_test1_ross.JPG" alt="header"/>
          </Col>
          <Col xs="12" lg="4">
            <img className="img-fluid portfolio-img" src="https://s3.us-east-2.amazonaws.com/ishaankolluri/av_test1_ross.JPG" alt="header"/>
          </Col>
        </Row>

      </div>
    );
  }
}