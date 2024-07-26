import React, { useEffect, useState } from "react";
import "../Reader/Readerhome3.css";
import img from "../Assets/bunpic.png";
import imgrec from "../Assets/Rectangle21.png"
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";

function Readerhome3({url}) {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axiosInstance.post(`viewallnewses`)
    .then((Res)=>{
      console.log(Res);
      setdata(Res.data.msg)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  const storedReaderId = localStorage.getItem("readerid");
  console.log(storedReaderId);


  const slicedData = data.slice(0, 6);
  const slicedsecData = data.slice(0, 4);
  return (
    <div className="container reader_home3">
      <div className="row">
        <div className="reader_home3">
          <h2>For You</h2>
        </div>
        <div className="row">
        {slicedData.length ?(
                slicedData.map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
               return(
          <div className="col-sm-14 col-md-4 col-lg-4 reader_home3-one mt-4" key={a._id}>

              {storedReaderId ? (
             <Link to={"/viewallnewsbyid/" + a._id}   style={{ textDecoration: "none", color: "black" }} >
          <div className="backbround-img">
            <div className="reader_smbox">Newses</div>
            <div className="reader-image">
                <img src={`${url}/${a.image.filename}`} alt="images" width="370px" height="180px" />
                <div className="readre-box-under">
                <h6>
                    "{a.title}"
                  </h6>
                  <div className="ri-user-line" id="reader-user">
                    {a.contributorid.firstname}
                    <span className="ri-calendar-line" id="reader-dte">
                      {timeString}
                    </span>
                  </div>
                </div>
                {slicedsecData.length ?(
                slicedsecData.map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
               return(
                <div className="readre-box-under1" >
                <img src={`${url}/${a.image.filename}`} alt="images" width="100px" height="90px" />
                <p className="truncate-text" >"{a.title}"</p>
                <div className="ri-user-line" id="reader-user1">
                {a.contributorid.firstname}
                    <span className="ri-calendar-line" id="reader-dte1">
                    {timeString}
                    </span>
                  </div>
                </div>
                )
              })
              ) : (
                  <div>No data available</div>
              )}
                </div>   
          </div>
          </Link>
              ):(
                <div className="backbround-img">
                <div className="reader_smbox">Sports</div>
                <div className="reader-image">
                    <img src={`${url}/${a.image.filename}`} alt="images" width="370px" height="180px" />
                    <div className="readre-box-under">
                    <h6>
                        "{a.title}"
                      </h6>
                      <div className="ri-user-line" id="reader-user">
                        {a.contributorid.firstname}
                        <span className="ri-calendar-line" id="reader-dte">
                          {timeString}
                        </span>
                      </div>
                    </div>
                    {slicedsecData.length ?(
                    slicedsecData.map((a)=>{
                        const dateTime = new Date(a.date);
                        const timeString = dateTime.toLocaleTimeString();
                   return(
                    <div className="readre-box-under1" >
                    <img src={`${url}/${a.image.filename}`} alt="images" width="100px" height="90px" />
                    <p className="truncate-text" >"{a.title}"</p>
                    <div className="ri-user-line" id="reader-user1">
                    {a.contributorid.firstname}
                        <span className="ri-calendar-line" id="reader-dte1">
                        {timeString}
                        </span>
                      </div>
                    </div>
                    )
                  })
                  ) : (
                      <div>No data available</div>
                  )}
                    </div>   
              </div>
              )}
          
          </div>

)
})
) : (
    <div>No data available</div>
)}



        
        </div>
      </div>
    </div>
  );
}

export default Readerhome3;
