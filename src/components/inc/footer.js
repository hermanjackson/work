import React from 'react'
import { Link,  } from "react-router-dom";

export const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h6 className="main-heading">Company Information</h6>
                <hr/>
                <p className="text-whit">
                industry. Lorem Ipsum has been
     the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley
       of type and scrambled it to make a type specimen book. It has survived

                </p>
                </div>
                    
  
<div className="col-md-4 ">
    <h6>Quick links</h6>
    <hr/>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/aboutsus">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    
    
    </div>
    <div className="col-md-4 ">
        <h6>Contact Information</h6>
        <hr/>
        <div><p className="text-white mb-1"> letsbuildtech</p></div>
        <div><p className="text-white mb-1"> #1-561-351-7323</p></div>
        <div><p className="text-white mb-1"> whatever@gmail.com</p></div>
    </div>
   

</div>

</div>
        
        
        
    </section>

    )
}