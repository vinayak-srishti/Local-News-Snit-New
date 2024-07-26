import React, { useEffect, useState } from "react";
import "../Reader/Readerprofileaccountinfo.css";
import { Link } from "react-router-dom";
import img from "../Assets/profileside.png";
import axiosInstance from "../BaseUrl";

function Readerprofileaccountinfo() {
  const storedReaderId = localStorage.getItem("readerid");
  console.log(storedReaderId);

  const [data, setdata] = useState({});
  useEffect(() => {
    axiosInstance
      .post(`/readerviewbyid/${storedReaderId}`)
      .then((res) => {
        setdata(res.data.msg);
        console.log(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-8" style={{marginLeft:"20px"}}>
      <div className="reader_profile_account_info">
        <div className="reader_profile_account_info_details row">
          <div className="col-7  reader_profile_account_info_fulldetails ">
            <p>Account Info</p>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>First Name</p>
              <p>{data.firstname}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Last Name</p>
              <p>{data.lastname}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Gender</p>
              <p>{data.gender}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Age</p>
              <p>{data.age}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Street</p>
              <p>{data.street}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>City</p>
              <p>{data.city}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>State</p>
              <p>{data.state}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Pincode</p>
              <p>{data.pincode}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Nationality</p>
              <p>{data.nationality}</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Contact</p>
              <p>{data.contact}</p>
            </div>

            <div
              className="reader_profile_account_info_fulldetails_box mb-3"
              
            >
              <p>Email</p>
              <p style={{
                overflow: "hidden",
                maxWidth: "100%",
                wordBreak: "break-all",
              }}>{data.email}</p>
            </div>

            <div className="reader_profile_account_info_editbtn ">
              <Link to="/reader_editprofile">
                <button className="btn btn-primary">Edit Profile</button>
              </Link>
            </div>
          </div>
          <div className="col-5 reader_profile_account_info_image">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Readerprofileaccountinfo;
