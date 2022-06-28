import React from "react";



let Card = (props) => {
    return (
        <>
            
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                    <img className="card-img-top" src={props.imgSrc} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                    </div>
                </div>    
        </>
    )
}


export default Card;