import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../BaseUrl";

function Report({ nid }) {
  console.log("nidre" + nid);
  const [data, setData] = useState({
    newsid: nid,
    readerid: localStorage.getItem('readerid'),
    typeofreport: "",
  });

  const reptfn = (e) => {
    e.preventDefault();
    axiosInstance.post(`reportnews`, data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Report submitted");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOptionChange = (event) => {
    setData({ ...data, typeofreport: event.target.value }); // Update state with the selected option
  };

  return (
    <div>
      <form onSubmit={reptfn}>
        <div className="col-12 pb-3 input_radio">
          <input
            type="radio"
            id="spam"
            value="spam"
            name="reportType" // This ensures only one radio button can be selected at a time
            onChange={handleOptionChange}
            checked={data.typeofreport === "spam"}
          />
          <label htmlFor="spam">&nbsp; Spam or misleading &nbsp;</label>
          <br />
          <input
            type="radio"
            id="sexualcontent"
            value="sexual content"
            name="reportType"
            onChange={handleOptionChange}
            checked={data.typeofreport === "sexual content"}
          />
          <label htmlFor="sexualcontent">&nbsp; Sexual content &nbsp;</label>
          <br />
          <input
            type="radio"
            id="violent"
            value="Violent or repulsive content"
            name="reportType"
            onChange={handleOptionChange}
            checked={data.typeofreport === "Violent or repulsive content"}
          />
          <label htmlFor="violent">&nbsp; Violent or repulsive content &nbsp;</label>
          <br />
          <input
            type="radio"
            id="hateful"
            value="Hateful or Abusive content"
            name="reportType"
            onChange={handleOptionChange}
            checked={data.typeofreport === "Hateful or Abusive content"}
          />
          <label htmlFor="hateful">&nbsp; Hateful or Abusive content &nbsp;</label>
          <br />
          <input
            type="radio"
            id="acts"
            value="Harmful or dangerous acts"
            name="reportType"
            onChange={handleOptionChange}
            checked={data.typeofreport === "Harmful or dangerous acts"}
          />
          <label htmlFor="acts">&nbsp; Harmful or dangerous acts &nbsp;</label>
          <br />
          <input
            type="radio"
            id="abuse"
            value="Child abuse"
            name="reportType"
            onChange={handleOptionChange}
            checked={data.typeofreport === "Child abuse"}
          />
          <label htmlFor="abuse">&nbsp; Child abuse &nbsp;</label>
          <br />
        </div>
        <button
          type="submit"
          style={{
            marginLeft: "95px",
            backgroundColor: "orange",
            borderRadius: "12px",
            width: "100px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Report;
