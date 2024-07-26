import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Reader/Readereditprofile.css"
import img from "../Assets/profileside.png"
import axiosInstance from '../BaseUrl'



function Readereditprofile() {
  const navigate=useNavigate()
  const storedReaderId = localStorage.getItem("readerid");
console.log(storedReaderId);
const[data,setdata]=useState({})

useEffect(()=>{
  axiosInstance.post(`/readerviewbyid/${storedReaderId}`)
  .then((res)=>{
    setdata(res.data.msg)
    console.log(res.data.msg);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

const submitfn=(a)=>{
  a.preventDefault()

  if (!/^\d{6}$/.test(data.pincode)) {
    alert("Pincode must have 6 digits");
    return;
  }

  axiosInstance.post(`/readeredirprofile/${storedReaderId}`,data)
  .then((res)=>{
    if(res.data.status===200){
      alert("Profile updated successfully")
      navigate("/readerprofile_accountinfo")
    }
    else{
      alert("something went wrong")
    }
  })
  .catch((err)=>{
    console.log(err);
    alert("something went wrong")
  })
}

const onchangefn=((e)=>{
  setdata({
    ...data,[e.target.name]:e.target.value
  })
  console.log(data);
})
  return (
  
            <div className='col-9 ' style={{marginLeft:"30px"}}>
            <div className='reader_editprofile_account_info' >
              <form onSubmit={submitfn}>
      <div className='reader_profile_account_info_details row' >
        <div className='col-7  reader_profile_account_info_fulldetails ' >
          <p >Edit Profile</p>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>First Name</p>
            <p><input
                type="text"
                name="firstname"
                value={data.firstname}
                onChange={onchangefn}
            /></p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Last Name</p>
            <p>
            <input
                type="text"
                name="lastname"
                value={data.lastname}
                onChange={onchangefn}/>
            </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Gender</p>
            <p>
            <input
                type="text"
                name="gender"
                value={data.gender}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Age</p>
            <p>
            <input
                type="number"
                name="age"
                value={data.age}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Street</p>
            <p>
            <input
                type="text"
                name="street"
                value={data.street}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>City</p>
            <p><input
                type="text"
                name="city"
                value={data.city}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>State</p>
            <p>
            <input
                type="text"
                name="state"
                value={data.state}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Pincode</p>
            <p>
            <input
                type="text"
                name="pincode"
                value={data.pincode}
                onChange={onchangefn}/></p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Nationality</p>
            <p><input
                type="text"
                name="nationality"
                value={data.nationality}
                onChange={onchangefn}/></p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Contact</p>
            <p><input
                type="number"
                name="contact"
                value={data.contact}
                onChange={onchangefn}/>
                </p>
          </div>
          <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
            <p>Email</p>
            <p>
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={onchangefn}/>
            </p>
          </div>

          <div className='reader_profile_account_info_editbtn ' >
            <button className='btn btn-primary' type='submit'>Save Updates</button>
          </div>
        </div>
        <div className='col-5 reader_profile_account_info_image' >
          <img src={img} />
        </div>
      </div>
      </form>
    </div>

    </div>
  )
}

export default Readereditprofile