import React, { useEffect, useState } from "react";
import "../Reader/Readerviewone.css";
import img from "../Assets/rightarrow.png";
import img1 from "../Assets/bunpic.png";
import imgopt from "../Assets/option.png";
import Popup from "reactjs-popup";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import Menu from "./Menu";
import { Modal, Button } from "react-bootstrap";
import Comments from "./Comments";

function Allnewsviewone({ url }) {
  const id = useParams();
  const location = useLocation();
  const prevPage = new URLSearchParams(location.search).get("prevPage");

  const [data, setdata] = useState({ image: { filename: "" } });
  const [like, setlike] = useState({});

  const [showMenuModal, setShowMenuModal] = useState(false);
  const handleLoginButtonClick = () => {
    setShowMenuModal(true);
  };

  const handleMenuModalClose = () => {
    setShowMenuModal(false);
  };
  const [showComments, setShowComments] = useState(false);
  const handleCommentsButtonClick = () => {
    setShowComments(!showComments); // Toggle the state
  };
  const readerIds = localStorage.getItem("readerid");
  // console.log(readerIds + "hello readreid");

  // useEffect(()=>{
  //     axiosInstance.post(`viewnewsById/${id.id}`, {
  //         readerid: readerIds,
  //       })
  //     .then((res)=>{
  //         console.log(res);
  //         setdata(res.data.data);
  //         setlike(res.data)
  //         // setlike(prevArray => prevArray.filter(item => item._id !== id));

  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  // },[])
  // console.log(data.data.image.filename);
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  useEffect(() => {
    if (!initialFetchDone) {
      axiosInstance
        .post(`viewnewsById/${id.id}`, {
          readerid: readerIds,
        })
        .then((res) => {
          // console.log(res);
          setdata(res.data.data);
          setlike(res.data);
          setInitialFetchDone(true); // Mark initial fetch as done
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, [initialFetchDone, id.id, readerIds]);

  const [latestAdds, setLatestAdds] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewalladds`)
      .then((res) => {
        // console.log(res);
        setLatestAdds(res.data.msg);
        // console.log(res.data.msg);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  // const latestAdd =
  //   latestAdds.length > 0 ? latestAdds[latestAdds.length - 1] : null;

  // console.log(data);
  const dateTime = new Date(data.date);
  const timeString = dateTime.toLocaleTimeString();

  //like and dislike functionality

  const [likeStatus, setLikeStatus] = useState(null);

  const handleLike = async () => {
    const newsId = id.id;
    // const readerId = readerIds;

    try {
      const response = await axiosInstance.post(`likeOrDislike/${newsId}`, {
        readerid: readerIds,
      });
      // console.log(response);
      if (response.status === 200) {
        // setLikeStatus(response.data.msg);
        // setlike(response.data);
        if (like.liked === true) {
          // If currently liked, set liked to false and decrement like count
          setlike({ ...like, liked: false, likecount: like.likecount - 1 });
        } else {
          // If currently not liked, set liked to true and increment like count
          setlike({ ...like, liked: true, likecount: like.likecount + 1 });
        }
      } else {
        // console.error(response.data);
      }
    } catch (error) {
      // console.error("Error:", error);
    }
  };


  //subscription functionality
  const rid = localStorage.getItem("readerid");
  console.log(rid);
  const [subscribtion,setSubscription]=useState({})
  
  useEffect(() => {
    axiosInstance
      .post(`getSubscriptionByReaderId/${rid}`)
      .then((result) => {
        console.log((result) , " subscription details");
        setSubscription(result.data.data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [rid]);

  return (
    <div className="container reader_viewone" style={{ margin: "30px" }}>
      <div className="row">
        <div className="reader_viewone col-1 ">
          <Link to={prevPage || "/"}>
            <img src={img} alt="imageartrow" width="40px" height="40px" />
          </Link>
        </div>
        <div className="reader_viewone col-10 ">
          <h2>{data.category}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-11 ">
          <img
            src={`${url}/${data.image.filename}`}
            alt="images"
            className="reader_viewone_image"
          />
        </div>
        <div className="col-1">
        {(subscribtion.planId === "299" || subscribtion.planId === "499") && (
          <img
            src={imgopt}
            alt="option img"
            width="40px"
            height="40px"
            onClick={handleLoginButtonClick}
          />
        )}
        </div>
      </div>
      <div className="row  reader_viewone-title">
        <h2>"{data.title}"</h2>
      </div>
      <div className="row reader_viewone-text">
        <p>
          {data.content}
          <br />
          <br />

          {/* Advertisements */}

          {/* {latestAdd && (
            <div>
              <img
                src={`${url}/${latestAdd.image.filename}`}
                alt={`Latest Ad`}
                width="1100px"
                height="500px"
                style={{ borderRadius: "12px" }}
              />
              <br />
            </div>
          )} */}
          {!subscribtion.planId && (
<div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    {latestAdds &&
      latestAdds.map((a, index) => (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          data-bs-interval="5000"
          key={a.image.filename}
        >
          <img
            src={`${url}/${a.image.filename}`}
            className="d-block w-100"
            alt="..."
          />
        </div>
      ))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          )}

          {data.subcontent}
        </p>
      </div>
      <div className="reader_viewone-likesdislikes ">
        {/* <button type='button'  style={{border:"none"}} className='ri-thumb-up-line'onClick={handleLike}>{like.likecount} </button>
          <button type='button'style={{border:"none"}} className='ri-thumb-down-line' onClick={handleLike}> </button> */}

        {like.liked === true ? (
          <button
            type="button"
            style={{ border: "none" }}
            className="ri-thumb-up-line"
            onClick={handleLike}
          >
            {like.likecount}
          </button>
        ) : (
          <button
            type="button"
            style={{ border: "none" }}
            className="ri-thumb-down-line"
            onClick={handleLike}
          ></button>
        )}
        <button
          type="submit"
          className="ri-message-2-line"
          onClick={handleCommentsButtonClick}
          style={{
            marginLeft: "40px",
            border: "none",
            width: "40px",
            height: "40px",
          }}
        ></button>
        <button
          className="ri-user-line"
          id="reader_usename"
          style={{ paddingLeft: "700px" }}
        >
          {" "}
          {data.contributorid?.firstname}
        </button>
        <button className="ri-map-pin-line" id="reader_location">
          {data.location}
        </button>
        <button className="ri-map-pin-time-line" id="reader_time">
          {timeString}
        </button>
      </div>
      <Modal
        show={showMenuModal}
        onHide={handleMenuModalClose}
        style={{ width: "250px", marginLeft: "1000px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Menu nid={id.id} />
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleMenuModalClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
      </Modal>
      {showComments && (
        <div className="footer-comments" style={{ marginLeft: "100px" }}>
          <Comments nid={id.id} />
        </div>
      )}
    </div>
  );
}

export default Allnewsviewone;
