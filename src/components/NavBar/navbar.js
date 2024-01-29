import React, { useState } from "react";
import './navbar.css';
// import logo from '../../assets/logo.png';
import { Link } from "react-scroll";
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => { 
    const [showMenu, setshowMenu] = useState(false);
    return (
        <nav className="navbar">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Home </Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> About </Link>
                <Link activeClass='active' to="project" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> Projects </Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> Skills </Link>
            </div>

            <button className="desktopMenuButton" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contact} alt="" className="desktopMenuImage" /> Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setshowMenu(!showMenu )}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}> Home </Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>setshowMenu(false)}> About </Link>
                <Link activeClass='active' to="project" spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>setshowMenu(false)}> Projects </Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>setshowMenu(false)}> Skills </Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>setshowMenu(false)}> Contact </Link>

            </div>

        </nav>
    )
}
export default Navbar;