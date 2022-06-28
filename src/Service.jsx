import React from "react";
import Card from "./Card";
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"


let Service = () => {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>

        <div className="container mb-5">
            <div className="row gy-4">
            <Card imgSrc = {img1}/>
            <Card imgSrc = {img2}/>
            <Card imgSrc = {img3}/>
        </div>
        <div className="row gy-4">
            <Card imgSrc = {img4}/>
            <Card imgSrc = {img5} />
            <Card imgSrc = {img6} />
        </div>
        </div>
            
        </>
    )
}


export default Service;