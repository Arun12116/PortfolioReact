import Nav from '../../Navbar/Nav';
import images from "../../images/123.jpeg"
import resume from "../../images/y.pdf"

import React from 'react'
import "./Home.css";
import { FaMailBulk } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="team">
            <Nav />

            <section className="parent">
                <div className="about">
                    <p>Hey,<br />
                        I am Arun Yadav
                        <hr />
                        Software Developer with Computer Science Background <br /> <span>Specialization in Web Development</span>
                    </p>
                    <div className="mail">

                        <a href="mailto:yarunkumar136@gmail.com"> <FaMailBulk />Mail</a>
                        <div className="resume">
                            <a href={resume}><button className='Homebtn'>Download Resume</button></a>
                        </div>

                    </div>


                </div>
                <div className="img">
                    <img src={images} alt="hello" />

                </div>

            </section>



        </div>




    )
}

export default Home;
