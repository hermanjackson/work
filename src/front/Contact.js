import React, {Component} from 'react'
import { Link } from "react-router-dom";


class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
          message: {
            to: '',
            body: ''
          },
         
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       
      }
      onHandleChange(e) {
        const name = e.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: e.target.value }
        });
      }
      onSubmit(e) {
       
        this.setState({ submitting: true });
        fetch(`http://10.0.0.197:5000/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }
    

   render(){
      
   
  return (
    <div>
    <section className="py-4 bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-8 my-auto">
                <h2>Contact Us</h2>

                </div>
                <div className="col-md-8 my-auto">
                <h6 className="float-end">
                 <Link to="/Home" >  Home/</Link><Link to="/About" > About Us</Link>
                </h6>
            </div>
            

            </div>
            
            
        
        </div>
    </section>
<section className="section">
<div className="conatiner">
    <div className="card shadow">
        <div className="card-body">
            <div className="row">
                <div className="col-md-6">
                    <h6>contact form</h6>
                    <hr/>
                   
                    <div className="form-group">
                        <label htmlfor="to">Phone Number</label>
                        <input type="text" name="to"
                          id="to"
                        onChange={this.onHandleChange} className="form-control" placeholder="Enter Number"/>
                    </div>
                  
                    <div className="form-group">
                        <label htmlfor="body">Message</label>
                       
                        <textarea rows="3" 
                            onChange={this.onHandleChange}   name="body"
                            id="body" className="form-control"placeholder="type your message..."></textarea>
                    
                    </div>
                    <div className="form-group py-3">
                        
                       
                        <button  type="submit"  onClick={() => this.onSubmit()}  className="btn btn-primary shadow w-100">Send Message</button>
                    
                    </div>


                </div>
                <div className="col-md-6">
                    <h5 className="main-heading">Address Information</h5>
                    <div className="underline"></div>
                    <p>West Palm Beach</p>
                    <p>phone:561</p>
                    <p>email:whatever@gmail.com</p>

                </div>

            </div>
            
        
        </div>
    </div>
    
</div>
</section>
</div>
     
  )

 }
 
}
export default Contact