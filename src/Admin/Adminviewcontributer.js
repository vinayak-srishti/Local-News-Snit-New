import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'


function Adminviewcontributer() {
    const[data,setdata]=useState([])

    useEffect(()=>{
        axiosInstance.post(`/viewallcontributer`)
        .then((res)=>{
            setdata(res.data.data)
            console.log((res.data.data));
        })
    },[])
  return (
    <div className='col_8'>
    <div className='reader_viewuser container'>
        <div className='reader_viewuser_head row'>
          <div className='col-6'>
            <h4>Contributers</h4>
            </div>  
            <div className='col-6'>
              {/* <h4>Users</h4> */}
            </div>  
        </div>
        <div className='row'>
        <div className='reader_viewuser_boxes '>
          <div  style={{ display: 'flex' }}>
          <p className='col-2'>Name</p>
          <p className='col-3'>Email</p>
          <p className='col-2'>Contact</p>
          <p className='col-4'>Location</p>
          </div>
        </div>
        </div>
        {data.length ? (
      data.map((a) => (
        <Link to={"/admin_viewsinglecontributer/"+a._id }style={{textDecoration:'none', color: 'black' }}>
          <div className='row'>
          <div className='reader_viewuser_boxes ' style={{ display: 'flex' }}> 
                     
          <p className='col-2' >{a.firstname} {a.lastname}</p>
          <p className='col-3'>{a.email}</p>
          <p className='col-2'>{a.contact}</p>
          <p className='col-4'>{a.street}</p>
        </div>
        </div>
        </Link>
      ))
    ) : (
      <div>No data available</div>
    )}
  </div>
</div>

  )
}

export default Adminviewcontributer