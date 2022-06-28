import React from "react";
import Common from "./Common";
import  img from "./images/2.svg"



let Home = () => {
    return (
        <>
          <Common 
          name="Grow Your Busines with"
          visit="/service"
          imgSrc = {img}
          btname = "Get Started"

          />
        </>
    )
}


export default Home;