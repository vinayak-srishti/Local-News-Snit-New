import React, { useState } from 'react'
import img from "../Assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';

function Adminlognav() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === 'contributerlogin') {
      navigate ('/contributerlogin'); // Navigate to the UserLogin page
    }
    else if(selectedValue === 'advertiserlogin'){
      navigate('/advertiserlogin')
    }
    else if(selectedValue === 'moderatorlogin'){
      navigate('/moderatorlogin')
    }
    else if(selectedValue === 'admin'){
      navigate('/admin')
    }
    else if(selectedValue == 'readerlogin'){
      navigate('/readerlogin')
    }
    
  }

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

            </form>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse user_navbar_items" id="navbarSupportedContent">
              <ul class="navbar-nav nav nav-underline  ms-5 mb-2 mb-lg-0 user_nav_margin"  style={{ fontFamily:"inherit",fontWeight: 'bold' ,color:"black" }}>


                <li class="nav-item">
                  <a class="nav-link " href="/" >Home</a>
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
                {/* <li class="nav-item"> */}
                 {/* <Link to="/readerlogin"> */}
                    {/* <button type="button" class="userpage_navbar_loginbtn">Login</button> */}
                    {/* <img src={imgprofile} alt='icon' width="30px" height="30px" style={{ borderRadius: '50%' }} /> */}
                    {/* </Link> */}
                {/* </li> */}
              {/* </ul> */}
            {/* </div> */}

            {/* <select value={selectedOption} onChange={handleOptionChange} style={{border:"none",fontWeight:"500"}}>
              <option value="admin">Admin</option>
              <option value="contributerlogin">Contributer</option>
              <option value="advertiserlogin">Advertiser</option>
              <option value="moderatorlogin">Moderator</option>

            </select> */}
            <div class="nav-item dropdown" style={{fontSize:"20px",fontWeight:"700",paddingRight:"60px"}}>
                   <Link href="" class=" dropdown-toggle rjr_a" data-bs-toggle="dropdown" style={{textDecoration:"none"}}>User Role </Link>
                   <div class="dropdown-menu rounded-0 m-0">
                   <Link to='/admin' class="dropdown-item" style={{fontSize:"17px",fontWeight:"700"}}>Admin</Link>

                       <Link to='/contributerlogin' class="dropdown-item" style={{fontSize:"17px",fontWeight:"700"}}>Contributor</Link>
                       <Link to='/advertiserlogin' class="dropdown-item"style={{fontSize:"17px",fontWeight:"700"}}>Advertiser</Link>
                       <Link to='/moderatorlogin' class="dropdown-item"style={{fontSize:"17px",fontWeight:"700"}}>Moderator</Link>
                       <Link to='/readerlogin' class="dropdown-item"style={{fontSize:"17px",fontWeight:"700"}}>Reader</Link>

                   </div>
               </div>
          </div>
        </nav>
      </div>



    </div>
  )
}

export default Adminlognav