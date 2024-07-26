import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axiosInstance from '../../../BaseUrl';

function Upgradeplans() {
  const rid = localStorage.getItem("readerid");
  console.log(rid);
  const [subscription, setSubscription] = useState({});

  useEffect(() => {
    axiosInstance
      .post(`getSubscriptionByReaderId/${rid}`)
      .then((result) => {
        console.log(result, " subscription details");
        setSubscription(result.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [rid]);

  const renderPlans = () => {
    if (subscription.planId === "299") {
      return (
        <div className="col-4 ">
        <div className="reader-viewsubplans-box1">
          <div className="reader-viewsubsc-bodhead">
            <p>₹499 One-Time</p>
          </div>
          <div className="reader-viewsubsc-content1">
            <h5 className="ri-vip-diamond-line" />{" "}
            <p className="">Diamond Membership</p>
            <h6>₹499</h6>
          </div>
          <hr />
          <div className="reader-viewsubsc-lists">
            <ul>
              <li>One time payment</li>
              <li>Get Ads free experience</li>
              <li>Exclusive contents</li>
              <li>Access our priority complaint resolution service for any issues you encounter.</li>
            </ul>
            <p>"Read more news without ads by subscribing Diamond plan."</p>
          </div>
          <div className="reader-viewsubsc-button">
            <Link to={`/reader-upgradepayment/${"499"}`}>
              <button type="button">
                Upgrade Now <span className="ri-arrow-right-s-line" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      );
    } else if (subscription.planId === "499") {
      return <p style={{color:"red",fontSize:"22px",textAlign:"center"}}>"We're sorry, but there are currently no available plans that exceed the benefits of your existing plan."</p>;
    } else if (subscription.planId === "99") {
      return (
        <>
          <div className="col-4 ">
            <div className="reader-viewsubplans-box1">
              <div className="reader-viewsubsc-bodhead2">
                <p>₹299 One-Time</p>
              </div>
              <div className="reader-viewsubsc-content2">
                <h5 className="ri-medal-2-line" />{" "}
                <p className="">Silver Membership</p>
                <h6>₹299</h6>
              </div>
              <hr />
              <div className="reader-viewsubsc-lists">
                <ul>
                  <li>One time payment</li>
                  <li>Get Ads free experience</li>
                  <li>Get news saving option.</li>
                  <li>Never lose track of your activities with our convenient save feature.</li>
                </ul>
                <p>"Read more news without ads and save news for later by subscribing silver plan."</p>
              </div>
              <div className="reader-viewsubsc-button2">
                <Link to={`/reader-upgradepayment/${"299"}`}>
                  <button type="button">
                  Upgrade Now <span className="ri-arrow-right-s-line" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="reader-viewsubplans-box1">
              <div className="reader-viewsubsc-bodhead">
                <p>₹499 One-Time</p>
              </div>
              <div className="reader-viewsubsc-content1">
                <h5 className="ri-vip-diamond-line" />{" "}
                <p className="">Diamond Membership</p>
                <h6>₹499</h6>
              </div>
              <hr />
              <div className="reader-viewsubsc-lists">
                <ul>
                  <li>One time payment</li>
                  <li>Get Ads free experience</li>
                  <li>Exclusive contents</li>
                  <li>Access our priority complaint resolution service for any issues you encounter.</li>
                </ul>
                <p>"Read more news without ads by subscribing Diamond plan."</p>
              </div>
              <div className="reader-viewsubsc-button">
                <Link to={`/reader-upgradepayment/${"499"}`}>
                  <button type="button">
                  Upgrade Now <span className="ri-arrow-right-s-line" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <p>No subscription plan found.</p>;
    }
  };

  return (
    <div className="col-9">
      <div className="container">
        <div className="reader-viewsubplanshead">
          <p>
             Subscribe now and enjoy ad free <br />
            experience & Save your favorite news.
          </p>
        </div>
        <div className="row">
          {renderPlans()}
        </div>
      </div>
    </div>
  )
}

export default Upgradeplans;
