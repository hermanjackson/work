import React , { useContext } from 'react'

import ServiceSliders from './ServiceSlider';
import Card from '../front/cardui';
import "../styles/card.css"


import { Context } from "./appContext";
        
export const Services = () => {
    const { store, actions } = useContext(Context);
    return (
       
        
        
        
       
        
        
       
           
           
                <div className="hero_cont">
                    <div className="hero">
                        <ServiceSliders slides={store.services}/>
                        
                    
        
                    </div>
                    <div className="myservices">
                        <Card/>
        
                    </div>
        
                </div>
           
           
        
        
            
    )
}
