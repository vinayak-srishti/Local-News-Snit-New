import React, { useEffect, useState } from "react";
import "../Reader/Menu.css";
import Report from "./Report";
import { Modal } from "react-bootstrap";
import axiosInstance from "../BaseUrl";

function Menu({ nid }) {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [savenews, setSavenews] = useState({
    newsid: nid,
    readerid: localStorage.getItem("readerid"),
  });
  const rid = localStorage.getItem("readerid");
  const [subscribtion, setSubscription] = useState({});

  const handleLoginButtonClick = () => {
    setShowMenuModal(true);
  };

  const handleMenuModalClose = () => {
    setShowMenuModal(false);
  };

  const savefn = () => {
    axiosInstance
      .post(`savenews`, savenews)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Saved");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axiosInstance
      .post(`getSubscriptionByReaderId/${rid}`)
      .then((result) => {
        setSubscription(result.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [rid]);

  return (
    <div className="container">
      <div className="row menu-reader">
        <div className="col">
          {subscribtion.planId === "299" && (
            <div
              className="ri-save-line menu-reader-rept"
              style={{ paddingTop: "10px" }}
              onClick={() => {
                savefn(savenews.nid);
              }}
            >
              Save
            </div>
          )}
          {subscribtion.planId === "499" && (
            <>
              <div
                className="ri-save-line menu-reader-rept"
                style={{ paddingTop: "10px" }}
                onClick={() => {
                  savefn(savenews.nid);
                }}
              >
                Save
              </div>
              <div
                className="ri-error-warning-fill menu-reader-rept"
                onClick={handleLoginButtonClick}
              >
                Report
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        show={showMenuModal}
        onHide={handleMenuModalClose}
        style={{ width: "350px", height: "700px", marginLeft: "940px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Report</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ cursor: "pointer" }}>
          <Report nid={nid} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Menu;
