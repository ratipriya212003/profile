import React, { useState } from "react";
import contactImg from "../assets/contact.png";
import Menu from "../assets/menu.png";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
      <i class='bx bx-user-pin' style={{color:'#e8ed07'}}  ></i>
      </div>
      {/* <img src={logo} className="logo" /> */}
      <div className="navitems">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="navItemMenu" >
          Home
        </Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500} className="navItemMenu" >
          Education
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="navItemMenu" >
          About
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="navItemMenu" >
          Portfolio
        </Link>
        <Link activeClass="active" to="internship" spy={true} smooth={true} offset={-100} duration={500} className="navItemMenu" >
         Internship
        </Link>
      </div>
      <button className="navItemBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        {/* <img src={contactImg} alt="Not Avail" className="navItemImg" /> */}
        <div className="navItemImg">
        <i class='bx bxs-chat' style={{color:'black'}}  ></i>
        </div>
        Contact Me
      </button>


      <img src={Menu} alt="Not Avail" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >
          Home
        </Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >
          Education
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>
          About
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)} >
          Portfolio
        </Link>
        <Link activeClass="active" to="internship" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>
          Internship
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>
          Contact
        </Link>
      </div>

    </nav>
  );
}

export default Navbar