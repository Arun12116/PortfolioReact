import React from 'react'
import Nav from '../../Navbar/Nav';
import resume from "../../images/y.pdf"
import images from "../../images/123.jpeg"
import "./About.css";
import { FaMailBulk, FiMail } from 'react-icons/fa';




const About = () => {
    return (
        <div className="team">

<Nav/>
            <section className="parent">
                <div className="about">
                  <span className='tour'><h4>About-me</h4></span> 

                    <p>Hey,<br />
                        I am Arun Yadav
                        <hr />
                        Software Developer with Computer Science Background <br /> <span>Specialization in Web Development</span>
                    </p>
                    <div className="mail">
                        
                        <a href="mailto:yarunkumar136@gmail.com"> <FaMailBulk />Mail</a>
                        <div className="resume">
                            <a href={resume}><button className='Aboutbtn'>Download Resume</button></a>

                        </div>
                    </div>

                </div>
                <div className="img">
                    <img src={images} />

                </div>

            </section>



        </div>




    )
}

export default About;
