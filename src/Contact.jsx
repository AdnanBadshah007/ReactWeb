import React, { useState } from "react";



let Contact = () => {


let [values , setValues] = useState({
    fname : "",
    phone : "",
    email : "",
    text : ""
})

let [items , setItems] = useState([])

let inputEvent = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    // let {value , name} = event.target;
    setValues((preValues) => {
        return {
            ...preValues,
            [name] : value
        }
    })
    
}

let OnSubmit = (event) => {
    event.preventDefault();
    
    setItems(values);
    setValues( {
        fname : "",
        phone : "",
        email : "",
        text : ""
    })
}


    return (
        <>

        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={OnSubmit}>
                <h1>{items.fname}</h1>
                <div class="mb-3 ">
                    <label for="fName" class="form-label">FullName:</label>
                    <input type="text" class="form-control"  value={values.fname} onChange={inputEvent} placeholder="Enter FullName" name="fname" required/>
                </div>
                <div class="mb-3 ">
                    <label for="phone" class="form-label">Phone:</label>
                    <input type="number" class="form-control" value={values.phone} onChange={inputEvent} placeholder="Enter Mobile Number" name="phone" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" value={values.email} onChange={inputEvent} placeholder="Enter email" name="email" required/>
                </div>
                <div class="mb-3">
                    <label for="comment">Comments:</label>
                    <textarea class="form-control" rows="5" value={values.text} onChange={inputEvent} name="text"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}


export default Contact;