import React, { useEffect, useState } from 'react'
import img from "../Assets/profileside.png"
import axiosInstance from '../BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'


function Adminviewsingleadvertiser() {
    const navigate=useNavigate()
    const id=useParams()
    const[data,setdata]=useState({})
useEffect(()=>{
    axiosInstance.post(`/viewoneadvertiser/${id.id}`,data)
    .then((res)=>{
        setdata(res.data.data)
        console.log(res.data.data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])

const deletefn=((_id)=>{
    axiosInstance.post(`/deleteadvertiser/${_id}`)
.then((res)=>{
    if(res.data.status==200){
        alert("User deleted successfully")
        navigate("/admin_viewadvertiser")
        console.log(res);
    }
    else{

    }
})
.catch((err)=>{
    console.log("err");
    alert("error")
})

})

  return (
    <div className='col-8'>
    <div className='adminview_sinleuser container'>
        <div className='adminviews row'>
            <h3>Advertisers</h3>
        </div>
        <div className='adminview_sinleuser_box row'>
            <div className='adminview_sinleuser col'>
                <h4>Account Info</h4>
                
                <div className='reader_profile_account_info_details row' >
                    <div className='col-7  reader_profile_account_info_fulldetails ' >
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>First Name</p>
                            <p>{data.firstname}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Last Name</p>
                            <p>{data.lastname}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Company name</p>
                            <p>{data.companyname}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Reg no</p>
                            <p>{data.regno}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Street</p>
                            <p>{data.street}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>City</p>
                            <p>{data.street}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>State</p>
                            <p>{data.state}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Pincode</p>
                            <p>{data.pincode}</p>
                        </div>
                        {/* <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Nationality</p>
                            <p>{data.nationality}</p>
                        </div> */}
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Contact</p>
                            <p>{data.contact}</p>
                        </div>
                        <div className='reader_profile_account_info_fulldetails_box mb-3' >
                            <p>Email</p>
                            <p>{data.email}</p>
                        </div>
                        <div className='admin_viewuser_button'>
                            <button type='submit' className='btn btn-danger' 
                            onClick={()=>{deletefn(data._id)}}
                            >
                                Delete User</button>
                        </div>

                    </div>
                       <div className='col-5'>
                            <img src={img} alt="image" className='admin_viewuser_image'/>
                       </div>
                
                </div>

            </div>
        </div>
    </div>
</div>

  )
}

export default Adminviewsingleadvertiser