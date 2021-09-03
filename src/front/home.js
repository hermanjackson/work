import React , {useContext} from 'react'
import { Link  } from "react-router-dom";
import {Context} from "./appContext"

import {Slider} from "../components/inc/Slider"
import {Vmc} from "../components/inc/Vmc"




export const Home = () => {
	const { store, actions } = useContext(Context);
	
	
    return (
		<div>
		<Slider/>


	<section className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<h3 className="main-heading">Our Services</h3>
					<div className="underline mx-auto"></div>
					<p>
					Lets build tech offer any services coming to computers,You tell us the problem and we come up with the solution
					 Our full stack developers specialize in many program languages, we have years of IT experience and gaurantee to solve your problem
					 feel free to contact us
						 
					
					 
					
				
					</p>
					<Link to="/About" className="btn btn-warning shadow">
						Read More
					</Link>

				</div>

			</div>
		</div>
		
		
	</section>
	<Vmc/>
	<section className="section bg-c-light border-top">
		<div className="container">
			<div className="row">
			<h3 className="main-heading">Our Services</h3>
					<div className="underline mx-auto"></div>
  
					{store.allServices.map((item, index) =>{
             return(
                <div className="col-md-4 " key={index}>
                <div className="card shawdow">
                <img src={item.image} className="w-100 border-bottom" alt="services"/>
                <div className="card-body">
                    <h6>{item.label}</h6>
                    <div className="underline"></div>
                    <p>{item.description}</p>
                   
        
                </div>
        
                </div>
               
        
            </div>
           

             )
         })};
      
        
     
     

</div>
		</div>
		
		
	</section>


	
	

	</div>
    )
}