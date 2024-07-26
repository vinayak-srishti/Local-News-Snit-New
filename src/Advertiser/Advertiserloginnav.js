import React from 'react'
import img from "../Assets/logo.png"

function Contributernavbar() {
  return (
    <div>
              <div class="container-fluid ">
        <nav class="navbar navbar-expand-lg user_navbar ">
          <div class="container ">
            <a class="navbar-brand" href="#">
              <img src={img} alt="logo" />
            </a>


            {/* <form class="d-flex ms-5 user_nav_Search">
              <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />

            </form> */}

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse user_navbar_items" id="navbarSupportedContent">
              {/* <ul class="navbar-nav nav nav-underline  ms-5 mb-2 mb-lg-0 user_nav_margin"  style={{ fontFamily:"inherit",fontWeight: 'bold' ,color:"black" }}>


                <li class="nav-item">
                  <a class="nav-link " href="#" >Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Politics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    India
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">America</a></li>
                    <li><a class="dropdown-item" href="#">Africa</a></li>
                    <li> <a class="dropdown-item" href="#">China</a></li>
                    <li><a class="dropdown-item" href="#">Russia</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Others</a>
                </li> */}

                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Business</a></li>
                    <li><a class="dropdown-item" href="#">Entertainment</a></li>
                    <li> <a class="dropdown-item" href="#">Tech</a></li>
                  </ul>
                </li> */}
                {/* <li class="nav-item">
                 <button type="button" class="userpage_navbar_loginbtn">Login</button>
                </li> */}
              {/* </ul> */}
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Contributernavbar