import React, { useEffect, useState } from 'react'
import "../Reader/Readerpoliticspage.css"
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link, useLocation } from 'react-router-dom';

function Others({url}) {

    const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
const location=useLocation()

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
    
  const handleLikes = () => {
    setLikes(likes + 1);
  };

  const handleDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false); // Reset dislike state
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false); // Reset like state
  };




    const [data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewallnewses`)
        .then((res)=>{
            console.log(res);
            setData(res.data.msg)
            console.log(res.data.msg);
        })
    },[])
    const storedReaderId = localStorage.getItem("readerid");
    console.log(storedReaderId);


  return (



    <div className='reader_politics container'>
    <h1>All news</h1>

    {data.length ? (
      data
      .slice()
                .reverse()
      .map((a) => {
        const dateTime = new Date(a.date);
        const timeString = dateTime.toLocaleTimeString();
        return (
          <div className='row' style={{ padding: "20px" }} key={a._id}>
            <div className='col-md-5 readre_politics_image'>
              <img src={`${url}/${a.image.filename}`} alt='images' width="400px" height="300px" />
            </div>
            <div className='col-md-6 offset-md-1  reader_politics_text'>
              <h2>"{a.title}"</h2>
              <p>{a.content}</p>
              {storedReaderId ? (
                <Link to={`/viewallnewsbyid/${a._id}?prevPage=${encodeURIComponent(location.pathname)}`}>
                  <button type='submit' className='readmorebtn'>Read more</button>
                </Link>
              ) : (
                
                <div>
{/*                   
                  <button type='button' className={`ri-thumb-up-line ${isLiked ? 'liked' : ''}`} ></button>
                  <button type='button' className={`ri-thumb-down-line ${isDisliked ? 'disliked' : ''}`} ></button> */}
                </div>
              )}
              <div className='like-dislike-buttons'>
                {storedReaderId && (
                  <>
                    {/* <button type='button' className={`ri-thumb-up-line ${isLiked ? 'liked' : ''}`} style={{ color: isLiked ? 'black' : 'inherit' }} onClick={() => { handleLike(); handleLikes(); }}>
                      <span>{likes}{isLiked ? ' Liked' : ''}</span>
                    </button>
                    <button type='button' className={`ri-thumb-down-line ${isDisliked ? 'disliked' : ''}`} style={{ color: isDisliked ? 'black' : 'inherit' }} onClick={() => { handleDislike(); handleDislikes(); }}>
                      <span>{isDisliked ? ' Disliked' : ''}</span>
                    </button> */}
                  </>
                )}
                <button className='ri-user-line' id='reader_usename'>{a?.contributorid?.firstname}</button>
                <button className='ri-map-pin-line' id='reader_location'>{a.location}</button>
                <button className='ri-map-pin-time-line' id='reader_time'>{timeString}</button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No data available</div>
    )}

  </div>

  )
}

export default Others