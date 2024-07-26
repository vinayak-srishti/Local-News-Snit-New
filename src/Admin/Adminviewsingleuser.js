import React, { useEffect, useState } from 'react'
import "../Admin/Adminviewsingleuser.css"
import img from "../Assets/profilepic.png"
import axiosInstance from '../BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'

function Adminviewsingleuser() {
    const navigate=useNavigate()
    let id=useParams()
    const[data,setdata]=useState({
        // readerid:localStorage.getItem("readerid")
    })
    const[deletedata,setdeletedata]=useState({})

    useEffect(()=>{
        axiosInstance.post(`/readerviewbyid/${id.id}`,data)
        .then((res)=>{
            console.log(res);
            setdata(res.data.msg)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
const deletefn=((_id)=>{
    axiosInstance.post(`/readerdeletebyid/${_id}`)
    .then((res)=>{  
        if(res.data.status==200){
            alert("User deleted successfully")
            navigate("/admin_viewuser")
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
                    <h3>Users</h3>
                </div>
                <div className='adminview_sinleuser_box row'>
                    <div className='adminview_sinleuser col'>
                        <h4>Account Info</h4>
                        
                        <div className='reader_profile_account_info_details row' >
                            <div className='col-10  reader_profile_account_info_fulldetails ' >
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>First Name</p>
                                    <p>{data.firstname}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Last Name</p>
                                    <p>{data.lastname}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Gender</p>
                                    <p>{data.gender}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Age</p>
                                    <p>{data.age}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Street</p>
                                    <p>{data.street}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>City</p>
                                    <p>{data.city}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>State</p>
                                    <p>{data.city}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Pincode</p>
                                    <p>{data.pincode}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Nationality</p>
                                    <p>{data.nationality}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Contact</p>
                                    <p>{data.contact}</p>
                                </div>
                                <div className='reader_profile_account_info_fulldetails_box mb-3' >
                                    <p>Email</p>
                                    <p>{data.email}</p>
                                </div>
                                <div className='admin_viewuser_button'>
                                    <button type='submit' className='btn btn-danger' onClick={()=>{deletefn(data._id)}}>Delete User</button>
                                </div>

                            </div>
                               {/* <div className='col-5'>
                                    <img src={img} alt="image" className='admin_viewuser_image'/>
                               </div> */}
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminviewsingleuser