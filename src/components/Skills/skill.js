import React  from "react";
import './skill.css';
import python from '../../assets/python.png';
import mysql from '../../assets/pngimg.com - mysql_PNG35.png';
import powerbi from '../../assets/Power-BI.png';
import github from '../../assets/github.png';
 const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle"> My Skills </span>
            <span className="skillDesc"> I've worked with multiple technologies as a developer to develop and maintain my projects.</span>
            
            <div className="skillBars">
                
                <div className="skillTech">
                    <img src={python} alt="Python" className="skillTechno"></img>
                    <div className="skillText">
                    <h1> Python</h1>
                    <p>I work on back-end using Python</p>
                    </div>
                </div>

                <div className="skillTech">
                    <img src={mysql} alt="MySQL" className="skillTechno"></img>
                    <div className="skillText">
                    <h1> MySQL</h1>
                    <p> I manage database using MySQL.</p>
                    </div>
                </div>

                <div className="skillTech">
                    <img src={powerbi} alt="PowerBI" className="skillTechno"></img>
                    <div className="skillText">
                    <h1> Power BI</h1>
                    <p> I create visual insights using Power BI.</p>
                    </div>
                </div>

                <div className="skillTech">
                    <img src={github} alt="GitHub" className="skillTechno"></img>
                    <div className="skillText">
                    <h1> GitHub</h1>
                    <p> I use GitHub to push code changes.</p>
                    </div>
                </div>

                {/* <div className="skillTech">
                    <img src={img} alt="" className="skillTechno"></img>
                    <h1> React</h1>
                    <p> I work on back-end using Python</p>
                </div> */}
            
            </div>
        </section>
    )
 }

 export default Skills;