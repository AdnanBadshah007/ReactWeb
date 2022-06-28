import React from "react";
import Common from "./Common";
import  img from "./images/1.svg"



let About = () => {
    return (
        <>
          <Common 
          name="Welcome To About Page"
          visit="/contact"
          imgSrc = {img}
          btname = "Contact Now"

          />
        </>
    )
}


export default About;