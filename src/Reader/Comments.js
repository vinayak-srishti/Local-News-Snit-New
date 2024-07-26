import React, { useEffect, useState } from "react";
import "../Reader/Comments.css";
import imgd from "../Assets/download1.png";
import axiosInstance from "../BaseUrl";

function Comments({ nid }) {
  console.log("idid" + nid);
  const readerid = localStorage.getItem("readerid");
  console.log(readerid);
  const [data, setdata] = useState({
    newsid: nid,
    readerid: localStorage.getItem("readerid"),
    msg: "",
  });
  const[res,setres]=useState([])

  const changefn = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitfn = (a) => {
    a.preventDefault();
    
    axiosInstance
      .post(`addcomment`, data)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          // alert("Comment Inserted Successfully");
          setdata({ ...data, msg: "" });
           setres([...res, response.data.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(()=>{
    axiosInstance.post(`viewcommentsbynewsid/${nid}`)
    .then((res)=>{
      console.log(res);
      setres(res.data.data)
    })
    .catch((err)=>{
      console.log(res);
    })
  },[])

  return (
    <div className="comments-main">
      <div className="container">
        <div className="row">
          <div className="comments-main-head">
            <h3>Comments</h3>
          </div>

          {res.length ?(
                res.map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
               return(

          <div className="comment-box" style={{marginTop:"10px"}}>
            <div className="row comments-main-content">
              <div className="col-6">
                <div className="ri-map-pin-user-fill">{a.readerid?.firstname} {a.readerid?.lastname}</div>
              </div>
              <div className="col-6">
                <div
                  className="ri-map-pin-time-line"
                  style={{ paddingLeft: "250px" }}
                >
                  {timeString}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8  comment-content">
                <p>
                 "{a.msg}"
                </p>
              </div>
            </div>
          </div>
               )
              })
              ) : (
                  <div>No data available</div>
              )}
          
   
        </div>
        <div className="row"  style={{marginTop:"10px"}}>
          <h4>Add Comment Here</h4>

          <div className="col-10">
            <div className="textarea-commetn">
              <textarea
                name="msg"
                value={data.msg}
                onChange={changefn}
                required title="please add a comment"
              ></textarea>
            </div>
          </div>
          <div className="col-2 textarea-commetn-img ">
            <img
              src={imgd}
              alt="sendimg"
              width="50px"
              height="40px"
              onClick={submitfn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
