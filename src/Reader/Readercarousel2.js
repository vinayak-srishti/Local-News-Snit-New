import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import img from "../Assets/imagess.png"
import "../Reader/Readercarousel2.css"
import axiosInstance from '../BaseUrl';
import { Link } from 'react-router-dom';


function Readercarousel2({url}) {
    const storedReaderId = localStorage.getItem("readerid");
    console.log(storedReaderId);

    const[data,setdata]=useState([])

    useEffect(()=>{
        axiosInstance.post(`viewallnewses`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.msg)
            console.log(res.data.msg);
        })
    },[])
    const slicedData = data.slice(0, 8);
  return (
    <div className='readerCar'>
    <div className='reader-carousel2-heading'>
        <h4>Trending Topics</h4>
    </div>
    <div className="row">
        {slicedData.length ? (
            slicedData.map((a) => {
                const dateTime = new Date(a.date);
                const timeString = dateTime.toLocaleTimeString();
                return (
                    <div className="col-lg-3" key={a._id}>
                        {storedReaderId ? (
                            <Link to={"/viewallnewsbyid/" + a._id} style={{ textDecoration: "none", color: "black" }}>
                                <div className='reader-carousel2-box'>
                                    <div>
                                        <img src={`${url}/${a.image.filename}`} alt='bded' width="300px" height="190px" />
                                    </div>
                                    <p>{a.title}</p>
                                    <div className='reader-carousel2-pro'>
                                        <span className='ri-user-line' id='span1'>{a.contributorid.firstname}</span>
                                        <span className='ri-calendar-line' id='span2'>{timeString}</span>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className='reader-carousel2-box'>
                                <div>
                                    <img src={`${url}/${a.image.filename}`} alt='bded' width="300px" height="190px" />
                                </div>
                                <p>{a.title}</p>
                                <div className='reader-carousel2-pro'>
                                    <span className='ri-user-line' id='span1'>{a.contributorid.firstname}</span>
                                    <span className='ri-calendar-line' id='span2'>{timeString}</span>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })
        ) : (
            <div>No data available</div>
        )}
    </div>
</div>
);}

export default Readercarousel2