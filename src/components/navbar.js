import "../styles/nav.css"
import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div >
              <nav className="navbar">
			<div className="navbar__container">
				<h1 href="#home" id="navbar__logo">
                    <h1>logo</h1>
				</h1>
				<ul className="navbar__menu">
					<Link to={"/Services"}>
						<li className="navbar__item">
							<span href="#Services" className="navbar__links" id="Services-page">
								Services
							</span>
						</li>
					</Link>
					
					
					
						<li className="navbar__item">
							<span href="#home" className="navbar__links" id="home-page">
								home
							</span>
						</li>
					
						
						
					
						
						<li className="navbar__btn">
							<span href="contact" className="button" id="contact">
								Contact
							</span>
						</li>
					
					
				</ul>
			</div>
		</nav>
            
        </div>
    )
}
