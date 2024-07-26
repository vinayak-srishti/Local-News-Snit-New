import React, { useEffect, useState } from 'react'
import "../Admin/Adminviewadvertiser.css"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'


function Adminviewadvertiser() {
const[data,setdata]=useState([])

useEffect(()=>{
    axiosInstance.post(`/viewalladvertiser`)
    .then((res)=>{
        setdata(res.data.data)
        console.log(res.data.data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])

    return (
            <div className='col-9 admin_viewadvertiser'>
                <div className='container'>
                    <div className=' row'>
                        <div className='adminadvertiser_view col'>
                            <h2>Advertiser</h2>
                        </div>
                        <div className='adminadvertiser_view_req col'>
                         <Link to='/advertiser_request' style={{textDecoration:'none', color: 'black' }}>  <div className='ri-file-add-line' id='request'>Requests</div></Link> 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='admin_viewadvertiser_box' style={{ display: 'flex' }}>
                            <p className='col-2'>Reg no</p>
                            <p className='col-3'>Company name</p>
                            <p className='col-3'>Email</p>
                            <p className='col-2'>Contact</p>
                            <p className='col-4'>Location</p>
                        </div>

                    </div>

                    {data.length ? (
                        data.map((b) => (
                     <Link to={"/viewsingleadvertiser/"+b._id}style={{textDecoration:'none', color: 'black' }}>       
                    <div className='row'>
                        <div className='admin_viewadvertiser_box' style={{ display: 'flex' }}>
                            <p className='col-2'>{b.regno}</p>
                            <p className='col-3'>{b.companyname}</p>
                            <p className='col-3'>{b.email}</p>
                            <p className='col-2'>{b.contact}</p>
                            <p className='col-4'>{b.street}</p>
                        </div>

                    </div></Link>
 ))
 ) : (
     <div>No data available</div>
 )}

                    {/* <div className='row'>
                        <div className='admin_viewadvertiser_box' style={{ display: 'flex' }}>
                            <p className='col-2'>Reg no</p>
                            <p className='col-3'>Company name</p>
                            <p className='col-3'>Email</p>
                            <p className='col-2'>Contact</p>
                            <p className='col-4'>Location</p>
                        </div>

                    </div> */}

                </div>
            </div>
    )
}

export default Adminviewadvertiser