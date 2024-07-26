import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../BaseUrl";

function Viewmysubscribedplan() {
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

  const navigate = useNavigate();
  const navbckfn = () => {
    navigate(-1);
  };

  const renderSubscriptionPlan = () => {
    switch (subscription.planId) {
      case "99":
        return (
          <div className="reader-viewsubplans-box1">
            <div className="reader-viewsubsc-bodhead">
              <p>₹99 One-Time</p>
            </div>
            <div className="reader-viewsubsc-content1">
              <h5 className="ri-medal-2-line" />
              <p className="">Gold Membership</p>
              <h6>₹99</h6>
            </div>
            <hr />
            <div className="reader-viewsubsc-lists">
              <ul>
                <li>One time payment</li>
                <li>Get Ads free experience</li>
                <li>Exclusive contents</li>
                <li>Experience a seamless browsing experience without interruptions.</li>
              </ul>
              <p>"Read more news without ads by subscribing Gold plan."</p>
            </div>
            <div className="reader-viewsubsc-button">
            <Link to="/reader-upgradeplan"> <button type="button">
              Change Plan <span className="ri-arrow-right-s-line" />
              </button></Link> 
            </div>
          </div>
        );
      case "299":
        return (
          <div className="reader-viewsubplans-box1">
            <div className="reader-viewsubsc-bodhead2">
              <p>₹299 One-Time</p>
            </div>
            <div className="reader-viewsubsc-content2">
              <h5 className="ri-medal-2-line" />
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
            <Link to="/reader-upgradeplan"> <button type="button">
              Change Plan <span className="ri-arrow-right-s-line" />
              </button></Link> 
            </div>
          </div>
        );
      case "499":
        return (
          <div className="reader-viewsubplans-box1">
            <div className="reader-viewsubsc-bodhead">
              <p>₹499 One-Time</p>
            </div>
            <div className="reader-viewsubsc-content1">
              <h5 className="ri-vip-diamond-line" />
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
            <Link to="/reader-upgradeplan"> <button type="button">
                Change Plan <span className="ri-arrow-right-s-line" />
              </button></Link> 
            </div>
          </div>
        );
      default:
        return <p>No subscription plan found.</p>;
    }
  };

  return (
    <div className="col-9">
      <div className="container">
        <span onClick={navbckfn} className="ri-arrow-left-line span-subsc-right" />

        <div className="reader-viewsubplanshead">
          <p> Manage Your Subscription</p>
        </div>

        <div className="manage-subsc-usermain">
          {renderSubscriptionPlan()}
        </div>
      </div>
    </div>
  );
}

export default Viewmysubscribedplan;
