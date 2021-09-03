import React , {useContext} from 'react'
import {Context} from "./appContext"
import { Link  } from "react-router-dom";
import "../styles/cards.css"

export const Shop = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <section className="section bg-c-light border-top">
		<div className="container">
			<div className="row">
			<h3 className="main-heading">Supplements</h3>
					<div className="underline mx-auto"></div>
  
					{store.shop.map((item, index) =>{
             return(
                <div className="col-md-4 " key={index}>
                <div className="card shawdow">
                <img src={item.image} className="w-100 border-bottom" alt="services"/>
                <div className="card-body">
                    <h6>{item.label}</h6>
                    <div className="underline"></div>
                    <p>{item.description}</p>
                
                    <a href={item.link}  className="btn btn-outline-success">go anywhere</a>
               
                   
        
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
