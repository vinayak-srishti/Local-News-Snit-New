import React, { useEffect, useState } from 'react'
import "../Reader/Readerviewone.css"
import img from "../Assets/rightarrow.png"
import img1 from "../Assets/bunpic.png"
import imgopt from "../Assets/option.png"
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../BaseUrl'



function Politicsviewone({url}) {
    const id=useParams()
    const[data,setdata]=useState({image: { filename: '' }})
useEffect(()=>{
    axiosInstance.post(`viewnewsById/${id.id}`)
    .then((res)=>{
        console.log(res);
        setdata(res.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
console.log(data.image.filename);
const dateTime = new Date(data.date);
                    const timeString = dateTime.toLocaleTimeString();
  return (
    <div className='container reader_viewone'>
    <div className='row'>
        <div className='reader_viewone col-1 '>
          <Link to="/readerpolitics" ><img src={img} alt='imageartrow' width='40px' height='40px' /></Link> 
        </div>
        <div className='reader_viewone col-10 '>
            <h2>Politics</h2>
        </div>
        </div>
        <div className='row'>
            <div className='col-11 '>

                <img src={`${url}/${data.image.filename}`} alt='images' className='reader_viewone_image'  />
            </div>
            <div className='col-1'>
             {/* <Popup trigger={
                <button type='button' onClick={() => console.log('Button clicked!')}> */}
                    <img src={imgopt} alt='option img' width="40px" height="40px"/>
                    {/* </button>}
                modal nested>
                    {
                        close=>(
                            <div className='modal'>
                                <div className='content'>
                            Welcome to GFG!!!
                        </div>
                        <div>
                            <button onClick={() => close()}>Close modal</button>
                        </div>
                            </div>
                        )
                    }
                </Popup> */}
            </div>
        </div>
        <div className='row  reader_viewone-title'>
            <h2>"{data.title}"</h2>
        </div>
        <div className='row reader_viewone-text'>
            <p>{data.content}<br/>{data.subcontent}
            </p>
        </div>
        <div className='reader_viewone-likesdislikes '>
          <button type='button' className='ri-thumb-up-line'> </button>
          <button type='button' className='ri-thumb-down-line'> </button>
          <button className='ri-user-line' id='reader_usename' style={{paddingLeft:"700px" ,padding:"30px"}}>Rahul</button>
          <button className='ri-map-pin-line' id='reader_location'>{data.location}</button>
          <button className='ri-map-pin-time-line' id='reader_time'>{timeString}</button>

        </div>
</div>

  )
}

export default Politicsviewone