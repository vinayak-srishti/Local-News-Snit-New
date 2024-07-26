import React, { useEffect, useState } from 'react'
import "../Admin/Advertiserrequest.css"
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'
import img1 from "../Assets/rightarrow.png"



function Advertiserrequest({url}) {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewalladvertiserReqsForadmin`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
        <div className='container'>
                <Link to="/admin_viewadvertiser"><img src={img1} alt="back" width="40px" height="40px"/></Link>

            <div className='row' >
                <div className='col'>
                    <h2>Advertiser Requests</h2>
                </div>

            </div>
            {data.length ?(
          data.map((a)=>{
              const dateTime = new  Date(a.date);
              const timeString = dateTime.toLocaleTimeString();
         return(
            <Link to={"/Viewsingleadvertiserreq/"+a._id } style={{textDecoration:"none",color:"black"}}>

            <div className='row' style={{padding:"10px"}}>
                <div className='admin_advertiser_request' style={{ display: 'flex' }} >
                    <div className='col-4'>
                        <img src={`${url}/${a.image?.filename}`} alt='images' width="250px" height="100px"/>
                    </div>
                    <div className='col-8'>
                    <h4> {a.companyname} <span style={{paddingLeft:"40px",fontFamily:"initial"}}>Reg No:{a.regno}</span></h4>
                    
                    <p id='arrow'>Owner Name:{a.firstname} {a.lastname}</p>
                    </div>
                    
                </div>
            </div>

             </Link>
      )
 })
 ) : (
  <div>No data available</div>
 )} 




    </div>
  )
}

export default Advertiserrequest