import React, { useEffect, useState } from 'react'
import "../Admin/Adminviewuser.css"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'


function Adminviewuser() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axiosInstance.post(`viewallusers`)
    .then((res)=>{
      console.log(res.data);
      if (res.data.status === 200) {
          setdata(res.data.data);
        
      } else if (res.data.status === 500) {
        alert("No user found");
      }
    })
    
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div className='col_8'>
        <div className='reader_viewuser container'>
            <div className='reader_viewuser_head row'>
              <div className='col-6'>
                <h4>Users</h4>
                </div>  
                <div className='col-6'>
                  {/* <h4>Users</h4> */}
                </div>  
            </div>
            <div className='row'>
            <div className='reader_viewuser_boxes '>
              <div  style={{ display: 'flex' }}>
              {/* <p className='col-2'>Regno</p> */}
              <p className='col-2'>Name</p>
              {/*<p className='col-2'>Account Status</p> */}
              <p className='col-4'>Loction</p>
              <p className='col-2'>Email</p>

              </div>
            </div>
            </div>
            {data.length ? (
          data.map((a) => (
            <Link to={"/admin_viewsingleuser/"+a._id }style={{textDecoration:'none', color: 'black' }}>
              <div className='row'>
              <div className='reader_viewuser_boxes ' style={{ display: 'flex' }}> 
                         
              {/* <p className='col-2'>Regno</p> */}
              <p className='col-2' >{a.firstname}</p>
              {/*  <p className='col-2'>account</p> */}
              <p className='col-4'>{a.city},{a.street},{a.nationality}</p>
              <p className='col-2'>{a.email}</p>

            </div>
            </div></Link>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}
export default Adminviewuser