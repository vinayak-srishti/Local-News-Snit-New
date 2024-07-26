import React from 'react'
import "../Reader/Readerhomecarousle.css"
import img1 from "../Assets/carousle1.png"
import img2 from "../Assets/carousle2.png"


function Contributercarousle() {
const id=localStorage.getItem("contibuterid")
console.log(id);

  return (
    <div className='main_class'>
    <h1 className='breaking_head'>Breaking News  
    {/* <button type='submit' onClick={handleLogout}>Logout</button> */}
    </h1>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
            <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
            <button type='submit' className='carousel_button'>Read More</button>
        </div>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
            <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
            <button type='submit' className='carousel_button'>Read More</button>
        </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Contributercarousle