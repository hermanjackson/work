import React   from 'react'


import "../styles/card.css"



import { Vmc } from '../components/inc/Vmc';

export const About = () => {
    return (
        <div >
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 my-auto">
                        <h2>about Page</h2>

                        </div>
                        <div className="col-md-8 my-auto">
                        <h6 className="float-end">
                            Home/ About Us
                        </h6>
                    </div>
                    

                    </div>
                    
                    
                
                </div>
            </section>
            <section className="section bg-c-light border-bottom">
                <div className="container">
                    
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline">

                    </div>
                    <p> 
                    our mission is solve any problem presented to us 
            with many developers and it proffesionals who enjoy working with computers
            we have the experience and knowledge to tackle any problem feel free to cantact a consultantand get started
            our sioftwarew and it professonails have years of experience,
            specialize in many program languages encluding pythin, javacript,html bootstrap, node.js jqueury,
            and many more, feel free to contact us and talk with a consultant 
        

                    </p>
                    
                
                </div>
            </section>
            <Vmc/>
            
        </div>
    )
}
