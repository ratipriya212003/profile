import React, { useRef } from "react";
import "../styles/Contact.css";
import siemens from "../assets/siemens-removebg-preview (1).png";
import jetsynthesys from "../assets/jetsynthesys.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dmcoo9o", "template_3t9xwye", form.current, 
       "jC5OZ9h4BTFc9-Mfe",
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
  };


  return (
    <section id="contactPage">
      <div id="internship">
        <h1 className="contactPageTitle">Internships</h1>
        <p className="internshipDesc">
          To have an in-depth knowledge of how organisation works ,<br />I have
          previously done internships at the follwoing companies
        </p>
        <div className="internshipImgs">
          <img src={siemens} alt="Not Avail" className="internshipImg"/>
          <img src={jetsynthesys} alt="Not Avail" className="internshipImg" style={{ width:'400px', height: '130px' }} />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name"  required/>
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
          <a href="https://wa.me/917015985174" target="_blank" rel="noopener noreferrer">
          <div className="link">
            {/* <img src={Whatsapp} alt="Not Avail" className="link"  ></img> */}
            <i class='bx bxl-whatsapp' style={{color:'#ebf10b'}}  ></i>
            </div>
            </a>
             <a href="https://www.linkedin.com/in/ratipriya212003" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <i class='bx bxl-linkedin' style={{color:'#ebf10b'}} ></i>
            </div>
            </a>
            <a href="mailto:ratipriya212003@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="link">
          <i class='bx bxl-gmail' style={{color:'#ebf10b'}} ></i>
            </div>
            </a>
           
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
