import React, { useEffect, useState } from 'react'
import img from "../Assets/rightarrow.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../BaseUrl';


function Viewsinglereport({url}) {
    const {id}=useParams()
    // console.log(id);
    const[data,setdata]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
        axiosInstance.post(`viewreportbyid/${id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
            console.log(res.data.data);
        })
        .catch((Err)=>{
            console.log(Err);
        })
    },[])

    const deletefn = ((b) => {
        b.preventDefault()
        axiosInstance.post(`deleteNewsById/${data?.newsid._id}`)
            .then((res) => {
                if (res.data.status === 200) {
                    console.log(res);
                    alert("Deled Succesfully")
                    navigate("/allreports")
                }
                else {
                    alert("Error in delete")
                }
            })
            .catch((Err) => {
                console.log(Err);
            })
    })
  return (
    <div className='col-8 contributer_addnews_main'>
    <div className='container'>
        <div className='row'>
            <div className='col-2  contributer_arrow'>
                <Link to='/allreports'> <img src={img} alt='images' width='40px' height='40px' /></Link>
            </div>
            <div className='col-6 contributer_arrow'>
                <h2>Reports</h2>
            </div>

        </div>
        <form >
            <div className='row'>
                <div className='col-6 contributer_addnews'>
                    {/* <label htmlFor="fileInput" style={{ position: 'relative', display: 'inline-block' }}>
                
            </label>
          */}
                    <p style={{ fontSize: "20px" }}>Contributer Name:
                    {data.readerid?.firstname} {data.readerid?.lastname}
                    </p>
                    <p style={{ fontSize: "20px" }}>Location:
                    {data.newsid?.location} 
</p>

                    <img src={`${url}/${data.newsid?.image.filename}`} alt='images' width="350px" height="400px" />
                </div>
                <div className='col-4 ccccccccccc'>

                    <div className='row contributer_addnewsone '>
                        <h4>Title</h4>
                    </div>

                    <div className='row contributer_input ' style={{ border: "0px" }}>
                        <textarea style={{ border: "2px solid black" }}
                            name='title'
                            value={data.newsid?.title}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_addnewsone '>
                        <h4 style={{paddingTop:"10PX"}}>Category</h4>
                    </div>

                    <div className='row contributer_input'>
                        <input type='text'
                            name='location'
                            value={data.newsid?.category}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_content '>
                        <h4>Content</h4>
                    </div>
                    <div className=' '>
                        <textarea className='contributer_addnews_textarea'
                            name='content'
                            value={data.newsid?.content}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_addnewsone ' style={{ paddingTop: "10px" }}>
                        <h4>subcontent</h4>
                    </div>
                    <div className='row contributer_input ' style={{ border: "0px" }}>
                        <textarea style={{ border: "2px solid black" }}
                            name='title'
                            value={data.newsid?.subcontent}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_addnewsone' style={{ paddingTop: "10px" }}>
                        <h4>Date</h4>
                    </div>
                    <div className='row contributer_input'>
                        <input type='text'
                            name='location'
                             value={data.newsid?.date}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_addnewsone' style={{ paddingTop: "10px" }}>
                        <h4>Type of Report</h4>
                    </div>
                    <div className='row contributer_input'>
                        <input type='text'
                            name='location'
                             value={data.typeofreport}
                        // onChange={changefn}
                        // required
                        />
                    </div>

                </div>

            </div>

            <div className='coontributor_button ' style={{ display: "flex" }}>
                {/* <button type='submit' className='btn btn-danger col-2' onClick={deletefn}>Delete Post</button> */}
                {data.newsid &&
                            <button type='submit' className='btn btn-danger col-2' onClick={deletefn}>Delete Post</button>
                        }
            </div>
        </form>
    </div>

</div>

  )
}

export default Viewsinglereport