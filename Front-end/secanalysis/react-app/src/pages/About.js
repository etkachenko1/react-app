import React from "react";
import Kate from "../assets/Kate.jpg"
import Eva from "../assets/Eva.png"
import Kadiatou from "../assets/Kadiatou.jpeg"
import Gael from "../assets/Gael.jpeg"
import YingYing from "../assets/yingying.jpg"


import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div className="text">
        <div className="box">

        <h1> About Us</h1> </div>
        <p>
        Since Bloomberg LP is a highly financial company we decided on a project that reflects the work being done at Bloomberg.

        </p>

        <h2> Our Mission </h2>
        <p> Our goal is to make the investing process easier for everyone. On our website,
          you are prompted to start a quiz. With a series of questions, this quiz helps us to determine
          the stocks that fit your particular needs and goals.
</p>

      <h2>Meet Our Team</h2>
          </div>
          <div className="team">
            <div className="column">
              <img src = {Kate} alt="Kate" width={"200"}/>
              <h6>Ekaterina Tkachenko</h6>
            </div>

            <div className="column">
              <img src = {Eva} alt="Eva" width={"200"}/>
              <h6>Eva Georgieva</h6>
            </div>

            <div className="column">
               <img src = {Kadiatou} alt="Kadiatou" width={"200"}/>
               <h6>Kadiatou Diallo</h6>
            </div>

             <div className="column">
              <img src = {Gael} alt="Gael" width={"200"}/>
              <h6>Gael Antar Diab</h6>
            </div>

            <div className="column">
             <img src = {YingYing} alt="YingYing" width={"200"}/>
             <h6>Ying Ying Chen</h6>
           </div>

          </div>
      </div>
  );
  }
export default About;
