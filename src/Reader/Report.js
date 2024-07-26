import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../BaseUrl";

function Report({nid}) {
  console.log("nidre"+nid);
const [data,setdata]=useState({
  newsid:nid,
  readerid:localStorage.getItem('readerid'),
  typeofreport:""
})

const reptfn=((e)=>{
  e.preventDefault()
  axiosInstance.post(`reportnews`,data)
  .then((res)=>{
    console.log(res);
    if(res.data.status==200){
      alert("report submitted")
      window.location.reload(false)
    }
  })
  .catch((err)=>{
    console.log(err);
  })

})
const handleOptionChange = (event) => {
  setdata({ ...data, typeofreport: event.target.value }); // Update state with the selected option
};
  return (
    <div>
      <form onSubmit={reptfn}>
      <div className="col-12 pb-3 input_radio ">
        <input type="radio" id="spam" value="spam" onChange={handleOptionChange} />
        <label for="spam">&nbsp; Spam or misleading &nbsp;</label>
        <br />
        <input type="radio" id="sexualcontent" value="sexual content" onChange={handleOptionChange} />
        <label for="sexualcontent" >&nbsp; Sexual content &nbsp;</label>
        <br />
        <input type="radio" id="Violent" value="Violent or repulsive content" onChange={handleOptionChange}/>
        <label for="Violent">&nbsp; Violent or repulsive content &nbsp;</label>
        <br />
        <input type="radio" id="content" value=" Hateful or Abusive content" onChange={handleOptionChange} />
        <label for="content">&nbsp; Hateful or Abusive content&nbsp;</label>
        <br />
        <input type="radio" id="acts" value="Harmful or dangerous acts "  onChange={handleOptionChange}/>
        <label for="acts">&nbsp; Harmful or dangerous acts &nbsp;</label>
        <br />
        <input type="radio" id="abuse" value=" Child abuse" onChange={handleOptionChange} />
        <label for="abuse">&nbsp; Child abuse &nbsp;</label>
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
