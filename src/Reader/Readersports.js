import React, { useEffect,useState } from 'react'
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link, useLocation } from 'react-router-dom';

function Readersports({url}) {
  // const url={baseurl:"http://hybrid.srishticampus.in:4003/"}
  const [category, setCategory] = useState('Sports');
  const [newsData, setNewsData] = useState([]);

  const location=useLocation()


  const viewallnewsbycategory=(()=>{
    axiosInstance.post(`viewallNewsByCategory`,{category})
    .then((res)=>{
      console.log(res);
      setNewsData(res.data.msg)
      console.log(res.data.msg);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  useEffect(()=>{
   viewallnewsbycategory();
  },[])

  const storedReaderId = localStorage.getItem("readerid");
  console.log(storedReaderId);



  return (
    <div className='reader_politics container'  style={{margin:"30px"}}>
              <h1>Sports</h1>

              {newsData.length ?(
                newsData
                .slice()
                .reverse()
                .map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
                    console.log(a.image.filename);
                    console.log(`${url}/${a.image.filename}`);
                    // const dateTime = new Date(data.date);
  const now = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = now - dateTime;

  // Convert the difference to hours
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  // Decide whether to show the date or time
  const displayValue =
    hoursDifference >= 24
      ? dateTime.toLocaleDateString() // Display date if more than 24 hours
      : dateTime.toLocaleTimeString(); // Display time otherwise
               return(
                
    <div className='row'>
      <div className='col-md-5 readre_politics_image'>
        <img src={`${url}/${a.image?.filename}`} alt='images'  width="400px" height="300px" />
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"{a.title}"</h2>
      <p>{a.content}
      {storedReaderId ?(
      <Link to={`/viewallnewsbyid/${a._id}?prevPage=${encodeURIComponent(location.pathname)}`}><button type='submit' className='readmorebtn'>Read more</button></Link>
      ):(
        <button type='submit' className='readmorebtn'>Read more</button>
      )}
      </p>
        <div className='like-dislike-buttons'>
              {/* <button type='button' className='ri-thumb-up-line'> </button>
              <button type='button' className='ri-thumb-down-line'> </button> */}
              <button className='ri-user-line' id='reader_usename'>{a?.contributorid?.firstname}</button>
              <button className='ri-map-pin-line' id='reader_location'>{a.location}</button>
              {
          hoursDifference>=24?(
            <button className="ri-calendar-2-line" id="reader_time">
            {displayValue}
           </button>
   
          ):(
            <button className="ri-map-pin-time-line" id="reader_time">
            {displayValue}
           </button>
   
          )
        }

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

export default Readersports