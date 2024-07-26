import React from 'react'
import "./Addsubscription.css"
import { Link } from 'react-router-dom'

function Addsubscription() {
  return (
    <div
    className='add-subscription-main col-9'>
      <div className='container'>
        <div className='row'>
          <div className='add-subscription-head col-9'>Subscription Plans</div>
         <div className='add-subscription-back col-3'><Link to="/viewsubscription" style={{textDecoration:"none",color:"black"}}><p>Back</p></Link> </div>
        </div>
        <form>
        <div className='row add-subscription-title'>
          <div className='col-12 '>
            <label for="title">Title   </label>
            <input type='text' id='title' className='col-9' />
          </div>
          <div className='col-12 add-subscription-features'>
            <label for="features">Features</label>
            <textarea type='text' id='features' className='col-9' />
          </div>
          <div className='col-8 add-subscription-features '>
            <label for="duration">Duration   </label>
            <input type='text' id='duration' className='col-9' />
          </div>
          <div className='col-2'>
            <select className='add-subscription-select'>
              <option>Month</option>
              <option>Weak</option>
              <option>Hour</option>
              <option>Day</option>

            </select>

          </div>
          <div className='col-12 add-subscription-price'>
            <label for="price">Price</label>
            <input type='text' id='price' className='col-9' />
          </div>

        </div>
        <div className='col-12 add-subscription'>
          <button type='submit' className='btn btn-primary '>Publish</button>
        </div>
        </form>

      </div>
    </div>
  )
}

export default Addsubscription