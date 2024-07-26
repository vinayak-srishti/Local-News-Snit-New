import React, { useEffect, useState } from 'react'
import "../Moderator/Moderatorrequests.css"
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
import Checknewscontent from './Ml/Checknewscontent'

function Moderatorrequest({url}) {
    const [data, setData] = useState([]);
    const [selectedRequestId, setSelectedRequestId] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axiosInstance.post(`viewallNewsReqsForModerator`)
        .then((res) => {
            console.log(res);
            setData(res.data.msg);
            console.log(res.data.msg);
        })
        .catch((err) => {
            console.log(err);
            // Handle the error appropriately here
        });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectedRequestId(id);
        setShow(true);
    };

    return (
        <div className='col-8'>
            <div className='container moderator_request'>
                <div className='moderator_request'>
                    <h2>Requests</h2>
                </div>
                {data.length ? (
                    data.map((a) => {
                        const dateTime = new Date(a.date);
                        const timeString = dateTime.toLocaleTimeString();
                        return (
                            <Link 
                                key={a._id}
                                to="#"
                                style={{ textDecoration: 'none', color: 'black' }}
                                onClick={() => handleShow(a._id)}
                            > 
                                <div className='moderator_request_box row'>
                                    <div className='admin_advertiser_request' style={{ display: 'flex', marginLeft: "20px", marginTop: "10px" }}>
                                        <img src={`${url}/${a.image.filename}`} alt='image' width='130px' height='100px' />
                                        <div>
                                            <h4 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "500px" }}>
                                                {a.title}
                                            </h4>
                                            <p id='arrow'>{a.contributorid.firstname}</p>
                                        </div>
                                        <div className='admin_advertiser_time' style={{ paddingLeft: "50px" }}>
                                            <p>{timeString}</p>
                                            <div id='arrow' className='ri-arrow-right-s-line'></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <div>No data available</div>
                )}
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Checknewscontent close={handleClose} newsId={selectedRequestId} />
            </Modal>
        </div>
    );
}

export default Moderatorrequest;
