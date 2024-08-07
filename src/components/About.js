import React, { useState } from "react";
import "../styles/About.css";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";
 //import ReactIcon from "../assets/react3icon.png";
function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <span className="skillDesc">
        I have pursued Bachelor of Computer Application from Bharati
        Vidyapeeth University, Pune. I have gained knowledge in various technologies and looking forward to learn more. 
        <br />Below mentioned are the skills that i have learnt during my years of graduation .
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>Comfortable building front-end applications with React </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node-Express</h2>
            <p>Basic understanding of creating backend servers and RESTful APIs with Node.js and Express</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MongoDB</h2>
            <p>Familiar with MongoDB for storing and querying data in web applications</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
            <p>Understanding of impt concept and looking forward to in-depth knowledge</p>
          </div>
        </div>

{showMore && (
        <>
           <div className="skillBar">
          <img src={UIDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>Proficient in JavaScript for developing interactive and dynamic web applications</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML & CSS</h2>
            <p> Solid skills in creating responsive web pages with HTML5 and CSS</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>API</h2>
            <p>Experience in integrating third-party APIs to fetch and display data in web applications</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MySQL</h2>
            <p>Basic knowledge of relational databases, including schema design and SQL queries.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java</h2>
            <p>Basic knowledge of important concepts</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
            <p>Proficient in using Bootstrap for designing modern and responsive web interfaces.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="Not Avail" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C-Programming</h2>
            <p>Understanding of all important concepts</p>
          </div>
        </div>
      
        </>
      )}

      <button className='skillBtn' onClick={() => setShowMore(!showMore)}>
        {showMore ? 'See Less' : 'See More'}
      </button>
</div>

    </section>
  );
}

export default About;
