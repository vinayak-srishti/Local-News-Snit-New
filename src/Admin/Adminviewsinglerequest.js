import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import img from "../Assets/rightarrow.png"
import axiosInstance from '../BaseUrl';


function Adminviewsinglerequest({url}) {
    let id=useParams()
    const[data,setData]=useState({})
    useEffect(()=>{
        axiosInstance.post(`viewaddbyid/${id.id}`,data)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const acceptfn = ((e) => {
        e.preventDefault()
        axiosInstance.post(`acceptnews/${id.id}`)
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    alert("Approved Successfully")
                    // window.location.reload(false)
                    navigate("/addrequests")

                }
                else {
                    alert("error in api")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })
    const navigate = useNavigate()

    const deletefn = ((b) => {
        b.preventDefault()
        axiosInstance.post(`rejectreq/${id.id}`)
            .then((res) => {
                // console.log(id.id+"hell");
                console.log(res);
                if (res.data.status == 200) {
                    alert("Deled Succesfully")
                    navigate("/addrequests")
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
                <Link to='/addrequests'> <img src={img} alt='images' width='40px' height='40px' /></Link>
            </div>
            <div className='col-6 contributer_arrow'>
                <h2>Requests</h2>
            </div>

        </div>
        <form >
            <div className='row'>
                <div className='col-6 contributer_addnews'>
                  
                    <p style={{ fontSize: "20px" }}>Contributer Name:
                    {data.advertiserid && data.advertiserid.firstname}
                    </p>
                    <p style={{ fontSize: "20px" }}>Location:
                    {data.location}
                    </p>

                    <img src={`${url}/${data.image && data.image.filename}`} alt='images' width="350px" height="400px" />
                </div>
                <div className='col-4 ccccccccccc'>

                    <div className='row contributer_addnewsone '>
                        <h4>Title</h4>
                    </div>

                    <div className='row contributer_input ' style={{ border: "0px" }}>
                        <textarea style={{ border: "2px solid black" }}
                            name='title'
                            value={data.title}
                        // onChange={changefn}
                        // required
                        />
                    </div>
                    <div className='row contributer_addnewsone '>
                        <h4>Category</h4>
                    </div>

                    <div className='row contributer_input'>
                        <input type='text'
                            name='location'
                            value={data.category}
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
                            value={data.content}
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
                            value={data.date}
                        // onChange={changefn}
                        // required
                        />
                    </div>

                </div>

            </div>

            <div className='coontributor_button ' style={{ display: "flex" }}>
                <button type='submit' className='btn btn-danger col-2'onClick={deletefn} >Reject</button>
                <button type='submit' className='btn btn-primary col-2' onClick={acceptfn} >Approve</button>

            </div>
        </form>
    </div>

</div>

  )
}

export default Adminviewsinglerequest