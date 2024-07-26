import React, { useEffect, useState } from 'react'
import img from "../Assets/rightarrow.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrl'
import img2 from "../Assets/bunpic.png"



function Moderatorsinglerequest({ url }) {
    // const url={baseurl:"http://localhost:4004"}
    let id = useParams()
    console.log(id);
    const [data, setData] = useState({ image: { filename: '' } })

    useEffect(() => {
        axiosInstance.post(`viewnewsById/${id.id}`)
            .then((result) => {
                console.log(result);
                setData(result.data.data)
                console.log(result.data.data);

            })
            .catch((Err) => {
                console.log(Err);
            })
    }, [])
    console.log();

    const acceptfn = ((e) => {
        e.preventDefault()
        axiosInstance.post(`acceptNewsById/${id.id}`)
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    alert("Approved Successfully")
                    // window.location.reload(false)
                    navigate("/moderatorrequest")

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
        axiosInstance.post(`deleteNewsById/${id.id}`)
            .then((res) => {
                if (res.data.status == 200) {
                    alert("Deled Succesfully")
                    navigate("/moderatorrequest")
                }
                else {
                    alert("Error in delete")
                }
            })
            .catch((Err) => {
                console.log(Err);
            })
    })
    // console.log(data.image.filename);
    console.log(`${url.baseurl}/${data.image.filename}`);
    return (
        <div className='col-8 contributer_addnews_main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2  contributer_arrow'>
                        <Link to='/moderatorrequest'> <img src={img} alt='images' width='40px' height='40px' /></Link>
                    </div>
                    <div className='col-6 contributer_arrow'>
                        <h2>Requests</h2>
                    </div>

                </div>
                <form >
                    <div className='row'>
                        <div className='col-6 contributer_addnews'>
                            {/* <label htmlFor="fileInput" style={{ position: 'relative', display: 'inline-block' }}>
                        
                    </label>
                  */}
                            <p style={{ fontSize: "20px" }}>Contributer Name:
                                {data.contributorid?.firstname}
                            </p>
                            <p style={{ fontSize: "20px" }}>Location:{data.location}</p>

                            <img src={`${url}/${data.image.filename}`} alt='images' width="350px" height="400px" />
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
                            <div className='row contributer_addnewsone ' style={{paddingTop:"20px"}}>
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
                            <div className='row contributer_addnewsone ' style={{ paddingTop: "10px" }}>
                                <h4>subcontent</h4>
                            </div>
                            <div className='row contributer_input ' style={{ border: "0px" }}>
                                <textarea style={{ border: "2px solid black" }}
                                    name='title'
                                    value={data.subcontent}
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
                        <button type='submit' className='btn btn-danger col-2' onClick={deletefn}>Reject</button>
                        <button type='submit' className='btn btn-primary col-2' onClick={acceptfn}>Approve</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Moderatorsinglerequest