import React from "react";
import './intro.css';
import bg from '../../assets/k1.png';
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png';
// import resume from '../../assets/'
const Intro = () => {
    const openResumeLink = () => {
        window.open("https://drive.google.com/file/d/1ihFMeb01QPdmqtXerO5rj3g6pgA6TSW5/view?usp=drive_link", "_blank");
    };
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText"> I'm <span className="introName"> Kanika.</span> <br /> Data Enthusiast.</span>
                <p className="introPara"> I bring data to life, turning raw information into captivating stories <br />through the art of visualization.<br /> Let's make your data speak and drive meaningful insights.</p>
                <Link>
                <button className="button" onClick={openResumeLink}>   
                    <img src={btnImg} alt="" className="btnImg"/> Hire Me    
                </button>
                </Link>
            </div>

            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro;