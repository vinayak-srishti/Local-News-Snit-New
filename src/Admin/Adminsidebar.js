import React from 'react'
import "../Admin/Adminsidebar.css"
import {Link} from "react-router-dom"

function Adminsidebar() {
  return (
            <div className='col-3'>
            <div className="admin_profile_sidebar">
      {/* <div className="reader_profile_sidebar_img mt-5">
        <Link to=''><img src={""} alt="profile_picture" /></Link>
        <div className="reader_profile_sidebar_camerabg">
        <Link to=''><i class="ri-camera-line"></i></Link>
        </div>
      </div> */}
      <div className="admin_profile_sidebar_title">
        <p>Admin</p>
      </div>
      {/* <div className="admin_profile_sidebar_settings admin_profile_sidebar_padding ">
        <i class="ri-settings-3-fill reader_profile_sidebar_icons"></i>
        <p>Settings</p>
      </div> */}
      <hr />
      <div className="admin_profile_sidebar_padding ">
        <Link to='/admin_dashboard' >
          <div className="admin_profile_sidebar_account_info">
            <div className="d-flex mt-2">
              <i class="ri-dashboard-line admin_profile_sidebar_icons"></i>
              <p> Dashboard</p>
            </div>

            <div className="mt-2">
              <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="admin_profile_sidebar_padding ">
        <Link to='/admin_viewuser' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2 ">
            <i class="ri-user-fill admin_profile_sidebar_icons"></i>{" "}
            <p> User</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>

      <div className="admin_profile_sidebar_padding ">
        <Link to='/admin_viewadvertiser' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2 ">
            <i class="ri-advertisement-fill admin_profile_sidebar_icons"></i>{" "}
            <p> Advertiser</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <div className="admin_profile_sidebar_padding ">
        <Link to='/addrequests' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2 ">
            <i class="ri-sticky-note-line admin_profile_sidebar_icons"></i>{" "}
            <p> Advertisement Requests</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <div className="admin_profile_sidebar_padding ">
        <Link to='/adminviewcontributer' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-file-user-fill admin_profile_sidebar_icons"></i>
            <p> Contributor</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <div className="admin_profile_sidebar_padding ">
        {/* <Link to= '' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-vip-crown-fill admin_profile_sidebar_icons"></i>
            <p>Moderator</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link> */}
        
      </div>
      <div className="admin_profile_sidebar_padding ">
         <Link to='/viewsubscription' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-mail-volume-line admin_profile_sidebar_icons"></i>
            <p> Subscription Plans</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> 
        <Link to='/viewsubscribers' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-group-fill admin_profile_sidebar_icons"></i>
            <p>View Subscribers</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> 

        {/* <Link to='' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-question-fill admin_profile_sidebar_icons"></i>
            <p> About</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
            <p></p>
          </div>
        </div>
        </Link> */}

      </div>
      <div className="admin_profile_sidebar_padding ">
        <Link to='/adminprivacy' >
        <div className="admin_profile_sidebar_account_info">
          <div className="d-flex mt-2">
            <i class="ri-error-warning-fill admin_profile_sidebar_icons"></i>
            <p> Privacy & Security</p>
          </div>

          <div className="mt-2">
            <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
          </div>
        </div>
        </Link>
        
      </div>
      <Link to='/admin' ><div className="admin_profile_sidebar_logoybtn mt-4 mb-4">
        <button className="btn btn-secondary" >
          <i class="ri-logout-box-r-line"></i> logout
        </button>
      </div></Link>
    </div>

    </div>

  )
}

export default Adminsidebar