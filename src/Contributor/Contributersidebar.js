import React, { useEffect, useState } from 'react'
import "../Reader/Readerprofilesidebar.css"
import axiosInstance from '../BaseUrl'
import { Link } from "react-router-dom";


function Contributersidebar() {
const id=localStorage.getItem("contibuterid")
console.log(id);

const[data,setdata]=useState([])

useEffect(()=>{
  axiosInstance.post(`/contibuterviewbyid/${id}`,data)
  .then((result)=>{
      setdata(result.data.data)
      console.log(result.data.data);
   
  })
 .catch((err)=>{
  console.log(err);
 })
},[])

  return (
    <div className='col-3' >
    <div className="reader_profile_sidebar">
{/* <div className="reader_profile_sidebar_img mt-5">
<Link to=''><img src={""} alt="profile_picture" /></Link>
<div className="reader_profile_sidebar_camerabg">
<Link to=''><i class="ri-camera-line"></i></Link>
</div>
</div> */}
<div className="reader_profile_sidebar_title">
<p>{data.firstname}</p>
</div>
<div className="reader_profile_sidebar_settings reader_profile_sidebar_padding ">
<i class="ri-settings-3-fill reader_profile_sidebar_icons"></i>
<p>Settings</p>
</div>
<hr />
<div className="reader_profile_sidebar_padding ">
<Link to='/contributer_viewprofile' >
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
<Link to='/contributer_addnews' >
<div className="reader_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-upload-2-line reader_profile_sidebar_icons"></i>{" "}
    <p> Upload News</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div>

<div className="reader_profile_sidebar_padding ">
{/* <Link to='' >
<div className="reader_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-notification-3-fill reader_profile_sidebar_icons"></i>{" "}
    <p> Notifications</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="reader_profile_sidebar_padding ">
{/* <Link to='' >
<div className="reader_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-book-open-fill reader_profile_sidebar_icons"></i>
    <p> Countries</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="reader_profile_sidebar_padding ">
{/* <Link to= '' >
<div className="reader_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-hand-heart-fill reader_profile_sidebar_icons"></i>
    <p> Page Roles</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="reader_profile_sidebar_padding ">
{/* <Link to='' >
<div className="reader_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-question-fill reader_profile_sidebar_icons"></i>
    <p> Subscriptions</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line reader_profile_sidebar_icons"></i>
    <p></p>
  </div>
</div>
</Link> */}
{/* <Link to='/about' >
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
<Link to='/privacy' >
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
<Link to='/contributerlogin' ><div className="reader_profile_sidebar_logoybtn mt-4 mb-4">
<button className="btn btn-secondary" 
// onClick={handleLogout}
>
  <i class="ri-logout-box-r-line"></i> logout
</button>
</div></Link>
</div>

</div>

  )
}

export default Contributersidebar