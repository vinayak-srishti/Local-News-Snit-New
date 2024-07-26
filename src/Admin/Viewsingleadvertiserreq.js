import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import img from "../Assets/rightarrow.png"

function Viewsingleadvertiserreq({url}) {
  const id = useParams();
  const[data,setdata]=useState({})

  useEffect(()=>{
    axiosInstance.post(`viewoneadvertiser/${id.id}`)
    .then((res)=>{
        console.log(res);
        setdata(res.data.data)
    })
    .catch((Err)=>{
        console.log(Err);
    })
  },[])
const navigate=useNavigate()
  const acceptfn = ((e) => {
    e.preventDefault()
    axiosInstance.post(`acceptadvertiserById/${id.id}`)
        .then((res) => {
            console.log(res);
            if (res.data.status == 200) {
                alert("Approved Successfully")
                // window.location.reload(false)
                navigate("/advertiser_request")

            }
            else {
                alert("error in api")
            }
        })
        .catch((err) => {
            console.log(err);
        })
})
const deletefn=((b)=>{
    b.preventDefault()
        axiosInstance.post(`deleteadvertiser/${id.id}`)
            .then((res) => {
                if (res.data.status == 200) {
                    alert("Request Deleted Succesfully")
                    navigate("/advertiser_request")
                }
                else {
                    alert("Error in delete")
                }
            })
            .catch((Err) => {
                console.log(Err);
            })
  })

  return (
    <div className="container" >
    <Link to="/advertiser_request"><img src={img} alt="back" width="40px" height="40px"/></Link>
      <div className="row singlecontributer-main" style={{marginLeft:"350px"}}>
        <div className="col-12">
        <img src={`${url}/${data.image?.filename}`} alt="images" width="440px" height="200px" style={{padding:"20px"}}/>
        </div>
        <div className="col-4">Name :</div>
        <div className="col-8">
          <input
            type="text"
            value={`${data.firstname} ${data.lastname}`}
          />
        </div>
        <div className="col-4">companyname :</div>
        <div className="col-8">
          <input
            type="text"
            value={data.companyname}
          />
        </div>
        <div className="col-4">Reg no :</div>
        <div className="col-8">
          <input type="text"
            value={data.regno}
            />
        </div>{" "}

        <div className="col-4">Street :</div>
        <div className="col-8">
          <input type="text"
           value={data.street} 
           />
        </div>{" "}
        <div className="col-4">City :</div>
        <div className="col-8">
          <input type="text" 
          value={data.city}
           />
        </div>{" "}
        {/* <div className="col-4">Nationality :</div>
        <div className="col-8">
          <input type="text"
           value={data.nationality}
            />
        </div>{" "} */}
        <div className="col-4">Email :</div>
        <div className="col-8">
          <input type="text"
           value={data.email} 
           />
        </div>
        <div className="col-4">Phone :</div>
        <div className="col-8">
          <input type="text" 
          value={data.contact} 
          />
        </div>{" "}
        <div className="col-4">pincode :</div>
        <div className="col-8">
          <input type="text" 
          value={data.pincode}
           />
        </div>{" "}
        <div className="col-4">State :</div>
        <div className="col-8">
          <input type="text"
            value={data.state} 
           />
        </div>
        <div className="singlecontributer-button">
         <button type="submit" className="col-3 btn btn-primary" onClick={acceptfn}>Accept</button>
       <button type="submit" className="col-3 btn btn-danger" onClick={deletefn}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Viewsingleadvertiserreq;
