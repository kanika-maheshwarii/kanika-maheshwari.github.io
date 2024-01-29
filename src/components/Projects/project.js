import React from "react";
import './project.css';
import netflix from '../../assets/netflix.png';
import prime from '../../assets/primee.png';
import hr from '../../assets/hr.png';
// import wastehome from '../../assets/wastehome.png';
import wastemanag from '../../assets/wastemanag.png';

const Project = () => {
    return(
        <section id="project">
            <span className="projectTitle"> Projects </span>
            <span className="projectDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I'm excited to bring my skills and experience to help businesses achieve their goals and create a strong presence.  </span>
            <div className="projectBars">

                <div className="projectBar">
                    <img src={netflix} alt='netflix' className="projectBar"></img>
                </div>

                <div className="projectBar">    
                    <img src={prime} alt='prime' className="projectBar"></img>
                </div>

                <div className="projectBar">    
                    <img src={hr} alt='prime' className="projectBar"></img>
                </div>

                <div className="projectBar">
                    <img src={wastemanag} alt='netflix' className="projectBar"></img>
                </div>

            </div>
        </section>
    )
}

export default Project;