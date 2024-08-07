import React from 'react'
import "../styles/Education.css"
function Education() {
  return (
    // <section id="edu">
    // <div className="eduTitle">Education</div>
    // < div className="eduBars">
    
    //     <div className="eduText">
    //       <h2>Graduation</h2>
    //       <p><b>Institution-Bharati Vidyapeeth ,IMED (Pune)</b></p>
    //       <p><b>Course- Bachelor of Computer Application</b></p>
    //       <p>Year of Passing- 2024</p>
    //       <ul>
    //         <li>First Semester -<span>9.8</span></li>
    //         <li>Second Semester -<span>9.0</span></li>
    //         <li>Third Semester -<span>9.44</span></li>
    //         <li>Fourth Semester -<span>9.0</span></li>
    //         <li>Fifth Semester -<span>8.96</span></li>
    //         <li>Sixth Semester -<span>Awaiting</span></li>
    //         </ul>
    //     </div>
      
    //     <div className="eduText">
    //       <h2>Higher Secondary Certificate </h2>
    //       <p><b>Institution- Ryan International School (Delhi)</b></p>
    //       <p>Year of Passing- 2019</p>
    //       <p>Stream-PBMC</p>
    //       <p>CBSE Percentage-87%</p>
    //       <br/>
    //       <h2>Secondary School Certificate</h2>
    //       <p><b>Institution- Ryan International School (Delhi)</b></p>
    //       <p>Year of Passing- 2021</p>
    //       <p>CBSE Percentage-95%</p>
    //     </div>
    //   </div>
      
    //   </section>
    <section className="education" id="education">
    <h2 className="heading">Education</h2>
    <div className="education-items">
      <div className="education-item">
        <div className="education-dot"> </div>
        <div className="education-date">2024-2025</div>
        <div className="education-content">
          <h3>Post Graduation Diploma</h3>
          <p><b>IIT-Kanpur</b></p>
          <p>
            {" "}
            Professional Data Science Diploma
          </p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-dot"> </div>
        <div className="education-date">2021-2024</div>
        <div className="education-content">
          <h3>Graduation</h3>
          <h3>
            <b>
            Bharati Vidyapeeth, IMED (Pune)</b>
          </h3> 
            <p><b>Bachelor of Computer Application </b></p>
        <br/>  <ul>
           <li>First Semester -<span>9.8</span></li>
            <li>Second Semester -<span>9.0</span></li>
            <li>Third Semester -<span>9.44</span></li>
            <li>Fourth Semester -<span>9.0</span></li>
           <li>Fifth Semester -<span>8.96</span></li>
       <li>Sixth Semester -<span>9.0</span></li>
             </ul>
             <br/>
             <p><b>Overall</b>-<span>9.17</span></p>
         
        </div>
      </div>
      <div className="education-item">
        <div className="education-dot"> </div>
        <div className="education-date">2020-2021</div>
        <div className="education-content">
          <h3>Higher Secondary Certificate</h3>
          <p>
            <b>Ryan International School
           </b>
          </p> 
          <p>
            {" "}Stream-PBMC {" "}</p>
              <p>{" "}CBSE Percentage-87%{" "}</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-dot"> </div>
        <div className="education-date">2018-2019</div>
        <div className="education-content">
          <h3>Secondary School Certificate</h3>
          <p>
            <b>Ryan International School
           </b>
          </p> 
          <p>
            {" "}
          CBSE Percentage-95%.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education