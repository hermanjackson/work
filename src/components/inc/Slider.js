import React from 'react'
import image1 from "../../images/mobile apps.jpg"
import image2 from "../../images/repair.jpg"
import image3 from "../../images/developers.jpg"
import "../../styles/slider.css"

export const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Get A Mobile App built</h2>
              <h5>Contact A Consultant To Learn More</h5>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={image2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Computer Trouble Shooting</h2>
              <h5>Contact Our It Specialist</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Hire A Developer</h2>
              <h5>contact Us and hire a personal developer Starting at 50Hr</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
