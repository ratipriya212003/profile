import React from 'react'
import "../styles/Home.css"
import profile from"../assets/profilephoto.jpg";
import hire from"../assets/hireme.png";
import resume from "../assets/Resume(aug 2024).pdf";
import {Link} from 'react-scroll';
function Home() {
  return (
    <div>
<section className="home" id="home">
<div className="home-img">
 <img src={profile} alt="Not avail"/>   
</div>
<div className="home-content">
  <h1>
    Hello, I am <span>Ratipriya, </span>Web Developer
  </h1>
  
  <p>
  Passionate and Ambitious Web Developer<br/> Eager to Learn and Contribute to the world of Code and Technology
  </p>

  <div className="social-icons">
    <a href="https://wa.me/917015985174">
    <i class='bx bxl-whatsapp' style={{color:'#ffffff' }} ></i>
    </a>
    <a href="https://www.linkedin.com/in/ratipriya212003">
      {" "}
      <i class="bx bxl-linkedin"  style={{color:'#ffffff' }}></i>
    </a>
    <a href="mailto:ratipriya212003@gmail.com">
      {" "}
      <i class="bx bxl-gmail" style={{color:'#ffffff' }}></i>
    </a>
    
  </div>
  <div className="btn-group">
    <button className="btn"  onClick={() => window.open(resume)} img src={hire}> Resume</button>
   <Link to='/internship'><button className="btn">Contact</button></Link>
  </div>
</div>
</section>
    </div>
  )
}

export default Home