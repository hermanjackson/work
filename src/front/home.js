import React, {useContext, } from 'react'
import {Context} from "./appContext"
import "../styles/home.css"

import ServeSliders from "./ServerSlider"


export const Home = () => {
    const { store,} = useContext(Context);
    return (
       <>
        <div className="hero_cont">
        <div className="heros">
            <ServeSliders slides={store.services}/>
            
        

        </div>
      
    </div>
    <div className="services" id="services">
				<h1 className="services_first">Services</h1>
				<div className="services__wrapper">
					<div className="services__card">
						<h2>hire a developer</h2>
						<img className="card_images" src={store.homeImage1} alt="" />
                        <button type="button" className="btn btn-primary btn-sm">
						learn more
						</button>
					</div>

					<div className="services__card">
						<h2>Talk with a consultant</h2>
						<img className="card_images" src={store.homeImage2} alt="" />
                        <button type="button" className="btn btn-primary btn-sm">
						learn more
						</button>
					</div>
					<div className="services__card">
						<h2>computer Repair</h2>
						<img className="card_images" src={store.homeImage3} alt="" />
                        <button type="button" className="btn btn-primary btn-sm">
						learn more
						</button>
					</div>
					<div className="services__card">
						<h2>Chat Apps</h2>
						<img className="card_images" src={store.homeImage4} alt="" />
                        <button type="button" className="btn btn-primary btn-sm">
						learn more
						</button>
					</div>
				</div>
            </div>
   
        
    

    </>
    )
}
