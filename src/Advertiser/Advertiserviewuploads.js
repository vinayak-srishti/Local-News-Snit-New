import React, { useEffect, useState } from 'react';
import "../Advertiser/Advertiserviewuploads.css"
import img from "../Assets/bunpic.png"
import { Link } from 'react-router-dom'
import { RiFileAddLine, RiInformationLine } from 'react-icons/ri';
import axiosInstance from '../BaseUrl';


function Advertiserviewuploads({url}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const advertiserid=localStorage.getItem("advertiserid")
  console.log(advertiserid);

  const[data,setdata]=useState([])
  useEffect((a)=>{
    axiosInstance.post(`viewaddsbyadvertiserid/${advertiserid}`)
    .then((res)=>{
        console.log(res);
        setdata(res.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  },[])

  return (
    <div className='col-9' style={{ padding: "20px" }}>
            <div className='container addupload_main '>
                <div className='row '>
                    <h2 className='col'>Uploads</h2>
                    <div className='adminadvertiser_view_req col'>
                        <Link to='/advertiser_upload' style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='ri-file-add-line' id='request'>Addnew</div>
                        </Link>
                    </div>
                </div>
                {data.length ? (
                    <div className='addupload_main_paddings' style={{ display: "auto" }}>
                        {data.map((item, index) => (
                            <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className='col addupload_main_padding'>
                                <div className='addupload_image'>
                                    <img src={`${url}/${item.image.filename}`} alt='image' />
                                </div>
                                <div className='addupload_box'>
                                    <h5>{item.title}</h5>
                                    <p
                                     style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: 'vertical'
                                      }}
                                    >{item.content}</p>
                                    {hoveredIndex === index && (
                                      <Link to={"/addsviewbyid/"+item._id} style={{textDecoration:"none",color:"black"}}>  <div className='icon-container'>
                                            {/* Place your icon here */}
                                            <i className='ri-edit-2-line'></i>
                                        </div></Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </div>
  )
}

export default Advertiserviewuploads