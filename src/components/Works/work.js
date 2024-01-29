import React from "react";
import './work.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Works = () => {
    return(
        <section id="works">
            <span className="workTitle"> What I Do</span>

            <span className="workDesc">I'm dedicated to transforming data into actionable insights through visually compelling and user-friendly dashboards.</span>

            <div className="workBars">

                <div className="workBar">
                    <img src={UIDesign} alt="UIDesign" className="workBarImage"/>
                    <div className="workBarText">
                        <h2> Power BI Dashboard </h2>
                        {/* <p>This is a demo. </p> */}
                    </div>
                </div>

                <div className="workBar">
                    <img src={WebDesign} alt="WebDesign" className="workBarImage"/>
                    <div className="workBarText">
                        <h2>Website Design </h2>
                        {/* <p> This is a demo.</p> */}
                    </div>
                </div>

            </div>       
        </section>

    )
}
export default Works;


