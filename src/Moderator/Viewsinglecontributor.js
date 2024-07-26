import React, { useEffect, useState } from "react";
import "./Viewsinglecontributor.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";

function Viewsinglecontributor({url}) {
  const id=useParams()
  const[data,setdata]=useState({})

  useEffect(()=>{
    axiosInstance.post(`viewrequestId/${id.id}`)
    .then((res)=>{
      console.log(res);
      setdata(res.data.data)
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[])
const navigate=useNavigate()
  const deletefn=((b)=>{
    b.preventDefault()
        axiosInstance.post(`deletecontributer/${id.id}`)
            .then((res) => {
                if (res.data.status == 200) {
                    alert("Request Deleted Succesfully")
                    navigate("/contributerrequest")
                }
                else {
                    alert("Error in delete")
                }
            })
            .catch((Err) => {
                console.log(Err);
            })
  })
  const acceptfn = ((e) => {
    e.preventDefault()
    axiosInstance.post(`acceptcontributorById/${id.id}`)
        .then((res) => {
            console.log(res);
            if (res.data.status == 200) {
                alert("Approved Successfully")
                // window.location.reload(false)
                navigate("/contributerrequest")

            }
            else {
                alert("error in api")
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

  return (
    <div className="col-8">
      <div className="container">
        <div className="row singlecontributer-main">
          <div className="col-12" style={{padding:"20px"}}>
            <img src={`${url}/${data.image?.filename}`} alt="profile image" width="425px" height="200px" style={{borderRadius:"12px"}}/>

          </div>
          <div className="col-4">Name :</div>
          <div className="col-8">
            <input type="text" value={`${data.firstname} ${data.lastname}`} />
          </div>
          <div className="col-4">Age :</div>
          <div className="col-8">
            <input type="text" value={data.age}/>
          </div>
          <div className="col-4">Street :</div>
          <div className="col-8">
            <input type="text" value={data.street} />
          </div>{" "}
          <div className="col-4">City :</div>
          <div className="col-8">
            <input type="text" value={data.city}/>
          </div>{" "}
          <div className="col-4">Nationality :</div>
          <div className="col-8">
            <input type="text" value={data.nationality}/>
          </div>{" "}
          <div className="col-4">Email :</div>
          <div className="col-8">
            <input type="text" value={data.email}/>
          </div>
          <div className="col-4">Phone :</div>
          <div className="col-8">
            <input type="text" value={data.contact}/>
          </div>{" "}
          <div className="col-4">Gender :</div>
          <div className="col-8">
            <input type="text" value={data.gender}/>
          </div>{" "}
          <div className="col-4">pincode :</div>
          <div className="col-8">
            <input type="text" value={data.pincode}/>
          </div>{" "}
          <div className="col-4">State :</div>
          <div className="col-8">
            <input type="text" value={data.state}/>
          </div>
          <div className="singlecontributer-button">
          <button type="submit" className="col-3 btn btn-primary" onClick={acceptfn}>Accept</button>
          <button type="submit" className="col-3 btn btn-danger" onClick={deletefn}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewsinglecontributor;
