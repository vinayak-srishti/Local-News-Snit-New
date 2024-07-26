import React, { useEffect, useState } from 'react'
import "../Reader/Readerprofilesidebar.css"
import { Link } from "react-router-dom";
import axiosInstance from '../BaseUrl'



function Readerprofilesidebar() {
  const storedReaderId = localStorage.getItem("readerid");
  const[readerid,setReaderid]=useState(null);

  const [data,setdata]=useState({})


  useEffect(()=>{
    axiosInstance.post(`/readerviewbyid/${storedReaderId}`)
    .then((res)=>{
      setdata(res.data.msg)
      console.log(res);
      console.log(res.data.msg);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

console.log(storedReaderId);
  // Clear the reader ID from local storage and update the state
const handleLogout = () => {
  localStorage.removeItem("readerid");
  setReaderid(null);
};

  return (
    <div className='col-3'>
            <div className="reader_profile_sidebar">
      {/* <div className="reader_profile_sidebar_img mt-5">
        <Link to=''><img src={""} alt="profile_picture" /></Link>
        <div className="reader_profile_sidebar_camerabg">
        <Link to=''><i class="ri-camera-line"></i></Link>
        </div>
      </div> */}
      <div className="reader_profile_sidebar_title">
        <p>{data.firstname} {data.lastname}</p>
      </div>
      <div className="reader_profile_sidebar_settings reader_profile_sidebar_padding ">
        <i class="ri-settings-3-fill reader_profile_sidebar_icons"></i>
        <p>Settings</p>
      </div>
      <hr />
      <div className="reader_profile_sidebar_padding ">
        <Link to='/readerprofile_accountinfo' >
          <div className="reader_profile_sidebar_account_info">
            <div className="d-flex mt-2">
              <i class="ri-user-2-fill reader_profile_sidebar_icons"></i>
              <p> Account Info</p>
            </div>

            <div className="mt-2">
              <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="reader_profile_sidebar_padding ">
        <Link to='/savednews' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2 ">
            <i class="ri-notification-3-fill reader_profile_sidebar_icons"></i>{" "}
            <p> Saved News</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>

      {/* <div className="reader_profile_sidebar_padding ">
        <Link to='' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2 ">
            <i class="ri-notification-3-fill reader_profile_sidebar_icons"></i>{" "}
            <p> Notifications</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div> */}
      {/* <div className="reader_profile_sidebar_padding ">
        <Link to='' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-book-open-fill reader_profile_sidebar_icons"></i>
            <p> Countries</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div> */}
      <div className="reader_profile_sidebar_padding ">
        <Link to= '/reader_pageroles' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-hand-heart-fill reader_profile_sidebar_icons"></i>
            <p> Page Roles</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <div className="reader_profile_sidebar_padding ">
         <Link to='/reader-viewsubscriptionplans' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-question-fill reader_profile_sidebar_icons"></i>
            <p> Subscription Plans</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> 
        <Link to='/reader-viewsubscribedplan' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-question-fill reader_profile_sidebar_icons"></i>
            <p> Subscribed Plan</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> 

        {/* <Link to='/reader_about' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-question-fill reader_profile_sidebar_icons"></i>
            <p> About</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> */}

      </div>
      <div className="reader_profile_sidebar_padding ">
        <Link to='/reader_privacy' >
        <div className="reader_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-error-warning-fill reader_profile_sidebar_icons"></i>
            <p> Privacy & Security</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <Link to='/' ><div className="reader_profile_sidebar_logoybtn mt-4 mb-4">
        <button className="btn btn-secondary" onClick={handleLogout}>
          <i class="ri-logout-box-r-line"></i> logout
        </button>
      </div></Link>
    </div>

    </div>
  )
}

export default Readerprofilesidebar