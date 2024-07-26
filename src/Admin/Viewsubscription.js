import React from 'react'
import "./Viewsubscription.css"
import { Link } from 'react-router-dom'

function Viewsubscription() {
  return (
    <div className='col-9' style={{padding:"20px"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-9 viewsubscription-head'>
                   <h3> Subscription Plans</h3>
                </div>
                {/* <div className='col-3 add-new-box'>
                    <Link to="/addsubscription" style={{textDecoration:"none",color:"black"}}><span className='ri-play-list-add-line'>Add New</span></Link>
                </div> */}

                <div className='row viewsubscription-table'>
                  <div className='col-3'><p>Plans</p></div>
                  <div className='col-2'><p>Amount</p></div>
                  <div className='col-7'><p>Features</p></div>
                  {/* <div className='col-2'><p>Price</p></div>
                  <div className='col-3'><p>Date</p></div> */}
                </div>

                <div className='row viewsubscription-table-bottom'>
                  <div className='col-3'><p>Gold Membership</p></div>
                  <div className='col-2'><p>₹99</p></div>
                  <div className='col-7'><p>Experience a seamless browsing experience without interruptions. Enjoy all our features without any advertisements.</p></div>
                  {/* <div className='col-2'><p>58</p></div> */}
                  {/* <div className='col-3'>
                    <p>22/08/2024</p>
                    <div className=''>
                      <button className='col-4' type='submit'style={{color:"blue"}}>Edit</button>
                      <button className='col-4'type='submit'style={{color:"red"}}>Delete</button>

                    </div>
                    </div> */}
                </div>
                <div className='row viewsubscription-table-bottom'>
                  <div className='col-3'><p>Silver Membership</p></div>
                  <div className='col-2'><p>₹299</p></div>
                  <div className='col-7'><p>Unlock an ad-free experience along with the ability to save your newses. Never lose track of your activities with our convenient save feature.</p></div>
                  {/* <div className='col-2'><p>58</p></div>
                  <div className='col-3'>
                    <p>22/08/2024</p>
                    <div className=''>
                      <button className='col-4' type='submit'style={{color:"blue"}}>Edit</button>
                      <button className='col-4'type='submit'style={{color:"red"}}>Delete</button>

                    </div>
                    </div> */}
                </div>

                <div className='row viewsubscription-table-bottoms'>
                  <div className='col-3'><p>Diamond Membership</p></div>
                  <div className='col-2'><p>₹499</p></div>
                  <div className='col-7'><p>Get the ultimate experience with our Platinum Plan. Enjoy an ad-free interface, save your newses, and access our priority complaint resolution service for any issues you encounter. Your satisfaction is our top priority.</p></div>
                  {/* <div className='col-2'><p>58</p></div> */}
                 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Viewsubscription