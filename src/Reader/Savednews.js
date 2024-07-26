import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";
import "../Reader/Savednews.css"

function Savednews({url}) {
  const readerid = localStorage.getItem("readerid");
  console.log(readerid);

  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewmynewsforuser/${readerid}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletefn=((_id)=>{
    axiosInstance.post(`deletesavednews/${_id}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
        alert("News Removed Successfully")
        window.location.reload(false)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <div className="col-9"style={{Width:"100%"}} >
      <div className="readerCar">
        <div className="reader-carousel2-heading">
          <h4>Saved News</h4>
        </div>
        <div className="row 
        " >
          {data.length>0 ? (
            data.map((a) => {
              // const dateTime = new Date(a.newsid.date);
              // const timeString = dateTime.toLocaleTimeString();
              return (
                <div className="col-3 reader-carousel2-box " style={{width:"260px"}}>
                     <Link to={"/viewallnewsbyid/"+a.newsid?._id}  style={{ textDecoration: "none", color: "black" }} >

                  <div className="reader-carousel2-box-container">
                    {/* <div className=""> */}
                      {/* <div> */}
                        <img
                          src={`${url}/${a.newsid?.image.filename}`}
                          alt="bded"
                          width="300px"
                          height="190px"
                          style={{marginLeft:"-15px"}}
                        />
                      {/* </div> */}
                      <p>{a.newsid?.title}</p>
                      <div className="reader-carousel2-pro" style={{paddingTop:"0",marginTop:"40px"}}>
                        <span className="ri-map-pin-line" id="">
                          {a.newsid?.location}
                        </span>
                        {/* <span className="ri-calendar-line" id="" style={{paddingLeft:"30px"}}>
                          {timeString}
                        </span> */}
                      </div>
                    </div>
                  {/* </div> */}
                </Link>
                <button type="submit" onClick={()=>{deletefn(a._id)}}>Remove </button>

                </div>

              );
            })
          ) : (
            <div>No Savednews available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Savednews;
