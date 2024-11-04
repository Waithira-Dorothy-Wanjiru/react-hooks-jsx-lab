import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
  <div id ="About">
    <h2>About Me</h2>
      <p>
        I am a passionate web developer with a love for creating dynamic and responsive web applications. 
        My journey in web development has been both challenging and rewarding, and I am excited to continue 
        learning and growing in this field.
      </p>
      <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
