import React, { useEffect, useState } from "react";
import "../Admin/Admindashboard.css";
import axiosInstance from "../BaseUrl";
import { Link } from 'react-router-dom'


function Admindashboard() {
  const [data, setdata] = useState([]);
  const [advertiser, setAdvertiser] = useState([]);
  const [contributer, setContributer] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewallusers`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setdata(res.data.data);
        } else if (res.data.status === 500) {
          alert("No user found");
        }
      })

      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewalladvertiser`, advertiser)
      .then((res) => {
        console.log(res.data);
        setAdvertiser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewallcontributer`, contributer)
      .then((res) => {
        console.log(res.data);
        setContributer(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(advertiser.length);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.post(
        `/searchusersByName/${searchTerm}`
      );
      setSearchResults(response.data);
      setErrorMessage("");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setSearchResults([]);
        setErrorMessage("No User found with the given name.");
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="col-9" style={{ margin: "20px" }}>
      <div className="admin_dashboard container">
        <div className="row">
          <div className="admin_dashboard_text col-6">
            <h2 className="admindashboard_h2">Dashboard</h2>
          </div>
          <div className="col-6" style={{display:"flex"}}>
          <div className="admin_dashboard_search col-3">
            <input
              type="text"
              placeholder="Search your name here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="admin_dashboard_search col-3" style={{paddingLeft:"125px"}}>
            <button type="submit" className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
            </div>
            <div style={{paddingTop:"50px"}} className="viewservices_search">
            {errorMessage && <p>{errorMessage}</p>}
            <div id="service-search" >
              {searchResults.map((service) => (
                <div  className="viewservices_search"  >
                 <Link to={`/admin_viewsingleuser/${service._id}`} style={{textDecoration:"none",color:"black"}}>
                    <p className="ri-search-line viewsearch-users" >{service.firstname}</p>
                    </Link> 
                </div>
              ))}
</div>
          </div>
          </div>
          <div className="admin_dashboard_box col-2">
            <p>UserCount</p>
            <h1 id="count">{data.length}</h1>
          </div>
          <div className="admin_dashboard_box col-2">
            <p>Contributor count</p>
            <h1 id="count">{contributer.length}</h1>
          </div>
          <div className="admin_dashboard_box col-2">
            <p>Advertiser Count</p>
            <h1 id="count">{advertiser.length}</h1>
          </div>
          {/* <div className='admin_dashboard_box col-2'>
                        <p>Moderator Count</p>
                        <h1 id='count'>1</h1>
                    </div> */}
        </div>
        <div className="row">
          <div className="admin_dashboard_text">
            <h2 className="admindashboard_h2">Users</h2>
          </div>

          <div className="admindashboard_users" style={{ display: "flex" }}>
            {/* <p className='col-2'>Reg no</p> */}
            <p className="col-4">Name</p>
            <p className="col-4">Email </p>
            {/* <p className='col-3'>Account Status</p> */}
            {/* <p className='col-2'>Activity</p> */}
            <p className="col-4">Location</p>
          </div>
          {data.length ? (
            data.map((a) => (
              <div
                className="admindashboard_users_list"
                style={{ display: "flex" }}
              >
                {/* <p className='col-2'>784</p> */}
                <p
                  className="col-4"
                  style={{
                    width: "250px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {a.firstname}
                </p>
                <p
                  className="col-4"
                  style={{
                    width: "250px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {a.email}{" "}
                </p>
                {/* <p className='col-3'>Activite</p> */}

                <p
                  className="col-4"
                  style={{
                    width: "300px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {a.street},{a.state}
                </p>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}

          {/*   <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                     
                        <p className='col-4'>Location</p>
                    </div> */}
        </div>

        <div className="row">
          <div className="admin_dashboard_text" style={{ marginTop: "30px" }}>
            <h2 className="admindashboard_h2">Advertiser</h2>
          </div>
          <div className="admindashboard_users" style={{ display: "flex" }}>
            <p className="col-2">Reg no</p>
            <p className="col-2">Company </p>
            <p className="col-3">Email </p>
            <p className="col-3">Contact</p>
            {/* <p className='col-2'>Activity</p> */}
            <p className="col-4">Location</p>
          </div>
          {advertiser.length ? (
            advertiser.map((b) => (
              <div
                className="admindashboard_users_list"
                style={{ display: "flex" }}
              >
                <p
                  className="col-2"
                  style={{
                    width: "140px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.regno}
                </p>
                <p
                  className="col-2"
                  style={{
                    width: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.companyname}
                </p>
                <p
                  className="col-3"
                  style={{
                    width: "200px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.email}
                </p>
                <p
                  className="col-3"
                  style={{
                    width: "200px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.contact}
                </p>
                {/* <p className='col-2'>Activity</p> */}
                <p
                  className="col-4"
                  style={{
                    width: "160px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.street}
                </p>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}

          {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                        <p className='col-4'>Location</p>
                    </div> */}
        </div>

        <div className="row">
          <div className="admin_dashboard_text" style={{ marginTop: "30px" }}>
            <h2 className="admindashboard_h2">Contributor</h2>
          </div>
          <div className="admindashboard_users" style={{ display: "flex" }}>
            <p className="col-2">Reg no</p>
            <p className="col-2">Company </p>
            <p className="col-3">Email </p>
            <p className="col-2">Contact</p>
            {/* <p className='col-2'>Activity</p> */}
            <p className="col-4">Location</p>
          </div>
          {contributer.length ? (
            contributer.map((c) => (
              <div
                className="admindashboard_users_list"
                style={{ display: "flex" }}
              >
                <p className="col-2">784</p>
                <p className="col-2">
                  {c.firstname} {c.lastname}
                </p>
                <p className="col-3">{c.email} </p>
                <p className="col-2">{c.contact}</p>
                {/* <p className='col-2'>Activity</p> */}
                <p className="col-4">{c.street}</p>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}

          {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                      
                        <p className='col-4'>Location</p>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
