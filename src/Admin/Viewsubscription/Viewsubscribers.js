import React, { useEffect, useState } from 'react'
import axiosInstance from '../../BaseUrl'

function Viewsubscribers() {
    const [subs,setSubs]=useState([])

    useEffect(()=>{
        axiosInstance.post(`getAllSubscriptions`)
        .then((res)=>{
            console.log(res);
            setSubs(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='col-9' style={{padding:"20px"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-9 viewsubscription-head'>
                   <h3>View Subscribers</h3>
                </div>

                <div className='row viewsubscription-table'>
                <div className='col-2'><p>Name</p></div>
                <div className='col-2'><p>Contact</p></div>
                  <div className='col-2'><p>City</p></div>
                  <div className='col-2'><p>Amount</p></div>
                  <div className='col-4'><p>Date of Subscription</p></div>

                </div>

                {subs && subs.length ? (
          subs.map((a,index) => {
            return (
              <>
              {
                    a?.readerId===null?(<></>):(
                <div className='row viewsubscription-table-bottom'>
                 <div className='col-2'><p>{a?.readerId?.firstname}</p></div>
                <div className='col-2'><p>{a?.readerId?.contact}</p></div>
                  <div className='col-2'><p>{a?.readerId?.city}</p></div>
                      <div className='col-2'><p>{a?.planId}</p></div>
                    <div className='col-4'><p>{new Date(a.date).toLocaleDateString()}</p></div>
                </div>
               )
              }
                </>

);
})
 ) : (
 <div style={{color:"red",fontSize:"20px"}}>No Subscribers Available</div>
 )} 


                </div>

        </div>
    </div>
  )
}

export default Viewsubscribers