import React from 'react'
import "../Reader/Footer.css"
import img from "../Assets/logo.png"
import youtube from "../Assets/youtube.png"
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  


function Footer() {
  return (
    <div className='' >
    <MDBFooter className='bg-dark text-center text-white footer_reader_main'>
    <div style={{display:"flex",paddingLeft:"580px",paddingTop:"30px",fontFamily:"cursive"}}>
        <h4 >Follow Us</h4>
        <p className='ri-facebook-circle-fill' style={{padding:"5px",paddingLeft:"20px"}}></p>     
           <p className='ri-instagram-fill' style={{padding:"5px",paddingLeft:"20px"}}  ></p>
           <p className='ri-whatsapp-fill' style={{padding:"5px",paddingLeft:"20px"}}  ></p>
           <p className='ri-twitter-fill' style={{padding:"5px",paddingLeft:"20px"}}  ></p>

    </div>

    <div className='text-center p-3 text-class' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright:
      <a className='text-white' >
        LocalNews.com
      </a>
    </div>
  </MDBFooter>  
</div>
  )
}

export default Footer