import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'

function Moderatorviewcontribuorrequest({url}) {
    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewallcontributorReqsForModerator`,data)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((Err)=>{
            console.log(Err);
        })
    },[])
  return (
    <div className="col-8">
    <div className="container moderator_request">
      <div className="moderator_request">
        <h2>Contributor Requests</h2>
      </div>
      {data.length ?(
          data.map((a)=>{
              const dateTime = new  Date(a.date);
              const timeString = dateTime.toLocaleTimeString();
         return(
            <Link to={"/viewsinglecontributer/"+a._id } style={{textDecoration:"none",color:"black"}}>
      <div className="moderator_request_box row">
        <div
          className="admin_advertiser_request"
          style={{ display: "flex", marginLeft: "20px", marginTop: "10px" }}
        >
          <img src={`${url}/${a.image?.filename}`} alt='images'/>
          <div className='row'>
            {/* <h5  > */}
              <div className='col-6' style={{paddingLeft:"10px",width:"300PX",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"20px",fontWeight:"500"}} >Name: {a.firstname} {a.lastname}</div> 
                <div className='col-6' style={{width:"300PX",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"20px",fontWeight:"500"}}>
                   Email: {a.email}
                </div>
            {/* </h5> */}
            <p id="arrow" style={{fontSize:"20px",fontWeight:"500"}}>
               Nationality: {a.nationality}
                </p>
          </div>
          <div className="" style={{ paddingLeft: "100px" }}>
            <p></p>
            <div id="arrow" className=""></div>
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
  </div>
  

  )
}

export default Moderatorviewcontribuorrequest