import React, { useEffect, useState } from 'react'
import "../Contributor/Contributereditprofile.css"
import img from "../Assets/profileside.png"
import axiosInstance from '../BaseUrl'
import { useNavigate } from 'react-router-dom'


function Advertisereditprofile() {
    const id=localStorage.getItem("advertiserid")
    console.log(id);
    const navigate=useNavigate()

    const[data,setData]=useState({})


    useEffect(()=>{
        axiosInstance.post(`viewoneadvertiser/${id}`)
        .then((res)=>{
            console.log(res)
            setData(res.data.data);
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
    const updatefn=((e)=>{
        e.preventDefault()
        if (!/^\d{6}$/.test(data.pincode)) {
            alert("Pincode must have 6 digits");
            return;
          }

          axiosInstance.post(`editadvertiser/${id}`,data)
          .then((res)=>{
              if(res.data.status===200){
                alert("Profile updated successfully")
                navigate("/advertiser_viewaccount")
                window.location.reload();
  
              }
              else{
                alert("something went wrong")
              }
            })
            .catch((err)=>{
              console.log(err);
              alert("something went wrong")
            })

          
        
  
    })
    const onchangefn=((e)=>{
        setData({
          ...data,[e.target.name]:e.target.value
        })
        console.log(data);
      })

  return (
    <div className='col-8 ' style={{marginLeft:"30px"}}>
    <div className='reader_editprofile_account_info' >
      <form onSubmit={updatefn}>
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
        onChange={onchangefn}
       />
    </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Gender</p>
    <p>
    <input
        type="text"
        name="gender"
        value={data.gender}
        onChange={onchangefn}
       />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Regno</p>
    <p>
    <input
        type="number"
        name="regno"
        value={data.regno}
        onChange={onchangefn}
  />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Street</p>
    <p>
    <input
        type="text"
        name="street"
        value={data.street}
        onChange={onchangefn}
       />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>City</p>
    <p><input
        type="text"
        name="city"
        value={data.city}
        onChange={onchangefn}
     />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>State</p>
    <p>
    <input
        type="text"
        name="state"
        value={data.state}
        onChange={onchangefn}
        />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Pincode</p>
    <p>
    <input
        type="number"
        name="pincode"
        value={data.pincode}
        onChange={onchangefn}
        /></p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3'  >
    <p>Company</p>
    <p><input
        type="text"
        name="companyname"
        value={data.companyname}
        onChange={onchangefn}
      /></p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Contact</p>
    <p><input
        type="number"
        name="contact"
        value={data.contact}
        onChange={onchangefn}
        />
        </p>
  </div>
  <div className='reader_profile_accounts_info_fulldetails_box mb-3' >
    <p>Email</p>
    <p>
    <input
        type="email"
        name="email"
        value={data.email}
         onChange={onchangefn}
       />
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

export default Advertisereditprofile