import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";

function Allreports({url}) {

    const[data,setData]=useState([])
    
    useEffect(()=>{
        axiosInstance.post(`viewreportformoderator`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className="col-8">
      <div className="container moderator_request">
        <div className="moderator_request">
          <h2>Reported News</h2>
        </div>
        {data&&
        data.length ?(
            data.map((a)=>{
                const dateTime = new  Date(a.date);
                const timeString = dateTime.toLocaleTimeString();
           return(
            <>
            {
              a?.newsid===null?(<></>):(

        <Link to={"/singlerequest/"+a._id } style={{textDecoration:'none', color: 'black' }}> 
        <div className="moderator_request_box row">
          <div
            className="admin_advertiser_request"
            style={{ display: "flex", marginLeft: "20px", marginTop: "10px" }}
          >
            <img src={`${url}/${a.newsid?.image?.filename}`} alt="image" width="130px" height="100px" />
            <div>
              <h4
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "500px",
                }}
              >
                {a.newsid?.title}
              </h4>
              <p id="arrow">{a.readerid?.firstname} {a.readerid?.lastname}</p>
            </div>
            <div className="" style={{ paddingLeft: "100px" }}>
              <p></p>
              <div id="arrow" className="ri-arrow-right-s-line"></div>
            </div>
          </div>
        </div>
        </Link>
                      )
                    }
        
        </>  
        )
})
) : (
    <div>No data available</div>
)}
      </div>
    </div>
    
  );
}

export default Allreports;
