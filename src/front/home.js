import React, {useContext, } from 'react'
import {Context} from "./appContext"
import "../styles/home.css"
import { Link } from "react-router-dom";
import ServeSliders from "./ServerSlider"


export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
       <>
        <div className="hero_cont">
        <div className="hero">
            <ServeSliders slides={store.services}/>
            
        

        </div>
      
    </div>
   
        
    

    </>
    )
}
