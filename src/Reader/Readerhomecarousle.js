import React, { useState } from 'react'
import "../Reader/Readerhomecarousle.css"
import img1 from "../Assets/carousle1.png"
import img2 from "../Assets/carousle2.png"
import { useEffect } from 'react'
import Readerlogin from "../Reader/ReaderLogin"
import { Modal,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function  Readerhomecarousle() {
    const[showLoginModal,setShowLoginModal]=useState(false);
    const[readerid,setReaderid]=useState(null);
    const storedReaderId = localStorage.getItem("readerid");

    useEffect(()=>{
        const storedReaderId = localStorage.getItem("readerid");
        console.log(storedReaderId);
    if (storedReaderId) {
      setReaderid(storedReaderId);
    } 
    },[])

    const handleLoginButtonClick = () => {
        // Show the login modal only if there is no reader ID
        if (!readerid) {
          setShowLoginModal(true);
        }
        
      };
    
      const handleLoginModalClose = () => {
        setShowLoginModal(false);
      };
      console.log(readerid);

      const handleLogout = () => {
        // Clear the reader ID from local storage and update the state
        localStorage.removeItem("readerid");
        setReaderid(null);
      };
    return (
        <div className='main_class'>
            <h1 className='breaking_head'>Breaking News  
            {/* <button type='submit' onClick={handleLogout}>Logout</button> */}
            </h1>
          {
            storedReaderId ?(
          

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{background:"linear-gradient(271deg, rgba(0, 0, 0, 0.87) 27.27%, rgba(149, 149, 149, 0.00) 97.46%);"}}>
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                    <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
                    <button type='submit' className='carousel_button' onClick={handleLoginButtonClick}>
                      <Link to="/others"  style={{ textDecoration: "none", color: "white" }}>
                        Read More
                        </Link>
                      </button>
                </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                    <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
                    <button type='submit' className='carousel_button'>
                    <Link to="/others"  style={{ textDecoration: "none", color: "white" }}>
                        Read More
                        </Link>
                      </button>
                </div>
                    </div>
                </div>
            </div>
            ):(
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" style={{background:"linear-gradient(271deg, rgba(0, 0, 0, 0.87) 27.27%, rgba(149, 149, 149, 0.00) 97.46%);"}}>
                  <div className="carousel-item active">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="carousel-caption">
                  <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
                  <button type='submit' className='carousel_button' onClick={handleLoginButtonClick}>
                    {/* <Link to="/otherslogin"  style={{ textDecoration: "none", color: "white" }}> */}
                      Read More
                      {/* </Link> */}
                    </button>
              </div>
                  </div>
                  <div className="carousel-item">
                      <img src={img2} className="d-block w-100" alt="..." />
                      <div className="carousel-caption">
                  <p>"Global Collaboration <br/> in Space Exploration :<br/>Nations United for<br/>Lunar Research"</p>
                  <button type='submit' className='carousel_button'>
                  {/* <Link to="/otherslogin"  style={{ textDecoration: "none", color: "white" }}> */}
                      Read More
                      {/* </Link> */}
                    </button>
              </div>
                  </div>
              </div>
          </div>
            )}


            <Modal show={showLoginModal} onHide={handleLoginModalClose}>
            {/* <Modal.Header closeButton> */}
          {/* <Modal.Title>Login</Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body>
          {/* Include your login component here */}
          <Readerlogin onClose={handleLoginModalClose} />
        </Modal.Body>
        <Modal.Footer>
          {/* Additional modal footer content */}
          <Button variant="secondary" onClick={handleLoginModalClose}>
            Close
          </Button>
        </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Readerhomecarousle