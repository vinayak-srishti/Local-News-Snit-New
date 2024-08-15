import React, { useEffect, useState } from 'react'
import "../Reader/Readerpoliticspage.css"
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link, useLocation } from 'react-router-dom'
import img2 from "../Assets/rightarrow.png"



function Readerpoliticspage({url}) {
  const[category,setCategory]=useState('Politics')
  const[data,setData]=useState({})
  const location = useLocation();
  useEffect(()=>{
    axiosInstance.post(`viewallNewsByCategory`,{category})
    .then((res)=>{
      console.log(res);
      setData(res.data.msg)
      // console.log(res.data.msg);

    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[])

  const storedReaderId = localStorage.getItem("readerid");
  console.log(storedReaderId);




  return (
    <div className='reader_politics container' style={{margin:"30px"}}>
      <h1>Politics</h1>


      {data.length ?(
                data
                .slice()
                .reverse()
                .map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
                    // console.log(a.image.filename);
               return(
                
              
    <div className='row' key={a._id}>
        
      <div className='col-md-5 readre_politics_image'style={{padding:"20px"}}>
        <img src={`${url}/${a.image?.filename}`} alt='images' width="400px" height="300px" />
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"{a.title}"</h2>
      <p>{a.content}
      {storedReaderId ? (
  <Link to={`/viewallnewsbyid/${a._id}?prevPage=${encodeURIComponent(location.pathname)}`}><button type='submit' className='readmorebtn'>Read more</button></Link>
) : (
  <button type='submit' className='readmorebtn'>Read more</button>
)}      </p>
        <div className='like-dislike-buttons'>
              {/* <button type='button' className='ri-thumb-up-line'> </button>
              <button type='button' className='ri-thumb-down-line'> </button> */}
              <button className='ri-user-line' id='reader_usename'>{a?.contributorid?.firstname}</button>
              <button className='ri-map-pin-line' id='reader_location'>{a.location}</button>
              <button className='ri-map-pin-time-line' id='reader_time'>{timeString}</button>

            </div>
      </div>

    </div> 

)
})
) : (
    <div>No data available</div>
)}   

    </div>
  )
}

export default Readerpoliticspage