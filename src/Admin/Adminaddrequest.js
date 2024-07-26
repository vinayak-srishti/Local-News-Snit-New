import React, { useEffect, useState } from "react";
import "../Admin/Adminaddrequest.css";
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";

function Adminaddrequest({url}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewrequests`, data)
      .then((Res) => {
        console.log(Res);
        setData(Res.data.data);
        console.log(Res.data.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, []);

  return (
    <div className="col-8">
      <div className="container moderator_request">
        <div className="moderator_request">
          <h2>Requests</h2>
        </div>
        {data.length ? (
          data.map((a) => {
            const dateTime = new Date(a.date);
            const timeString = dateTime.toLocaleTimeString();
            return (
               <Link to={"/viewsingleaddrequests/"+a._id } style={{textDecoration:'none', color: 'black' }}>
              <div className="moderator_request_box row">
                <div
                  className="admin_advertiser_request"
                  style={{
                    display: "flex",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <img src={`${url}/${a.image.filename}`}  alt='images' width='130px' height='100px'/>
                  <div style={{ width: "200px" }}>
                    <h4
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "130%",
                      }}
                    >
                      {a.title}
                    </h4>
                    <p id="arrow">{a.advertiserid.firstname}</p>
                  </div>
                  <div className="admin_advertiser_time">
                    <p>{timeString}</p>
                    <div id="arrow" className="ri-arrow-right-s-line"></div>
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
    </div>
  );
}

export default Adminaddrequest;
