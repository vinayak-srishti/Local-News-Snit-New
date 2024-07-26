import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import img from "../Assets/rightarrow.png";
import { Link } from "react-router-dom";

function Advertiserupload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the file and set it to state
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, reset the state
      setSelectedFile(null);
    }
  };

  const id=localStorage.getItem("advertiserid")
  console.log(id);

  const[data,setData]=useState({
    advertiserid:id,
    title:"",
    content:"",
    location:"",
    category:"",
    image:null
  })

  const changefn=(e)=>{
    if(e.target.name === "image"){
        setData({...data,image:e.target.files[0]});
    }else{
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);
}

const submitfn=((a)=>{
    a.preventDefault()
    axiosInstance.post(`/addadvertisement/${id}`,data,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    })
    .then((result)=>{
        console.log(result);
        if (result.status === 200) {
            alert("successfully entered")
            window.location.reload(false)
        } else {
          alert("failed to entered");
        }
    })
    .catch((error) => {
        console.log("error", error);
      });

})
  return (
    <div className="col-8 contributer_addnews_main">
      <div className="container">
        <div className="row">
          <div className="col-2  contributer_arrow">
            <Link to="/advertiser_viewuploads">
              {" "}
              <img src={img} alt="images" width="40px" height="40px" />
            </Link>
          </div>
          <div className="col-6 contributer_arrow">
            <h2>Add Advertisements </h2>
          </div>
        </div>
        <form onSubmit={submitfn}>
          <div className="row">
            <div className="col-7 contributer_addnews">
              <label
                htmlFor="fileInput"
                style={{ position: "relative", display: "inline-block" }}
              >
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt="Selected File Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "10cm",
                      height: "10cm",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <p style={{ textAlign: "center", marginTop: "1.5cm" }}>
                      Select File
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  id="fileInput"
                  name="image"
                  accept=".jpg, .jpeg, .png" // Define the accepted file types if necessary
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  onChange={(e) => {
                    handleFileChange(e);
                    changefn(e)
                  }}
                  required
                  title="Please fill the fields"
                />
              </label>
            </div>
            <div className="col-3 ccccccccccc">
              {/* <div className='row contributer_addnewsone '>
                        <h4>Name</h4>
                    </div>

                    <div className='row contributer_input'>
                        <input type='text' name='contributername'
                        //  value={`${data.firstname} ${data.lastname} ` }
                        //  onChange={changefn}
                         required/>
                    </div> */}
              <div className="row contributer_addnewsone ">
                <h4>Title</h4>
              </div>

              <div className="row contributer_input">
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={changefn}
                  required
                />
              </div>
              <div className="row contributer_addnewsone ">
                <h4>Category</h4>
              </div>

              <div className="row contributer_input">
                <select
                  name="category"
                  value={data.category}  onChange={changefn}
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Politics">Politics</option>
                  <option value="Science">Science</option>
                  <option value="Sports">Sports</option>
                  <option value="Arts">Arts</option>
                  <option value="Breaking News">Breaking news</option>
                  <option value="Health">Health</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="row contributer_content ">
                <h4>Content</h4>
              </div>
              <div className=" ">
                <textarea
                  className="contributer_addnews_textarea"
                  name="content"
                  value={data.content}
                  onChange={changefn}
                  required
                />
              </div>
              {/* <div className='row contributer_addnewsone ' style={{ paddingTop: "10px" }}>
                        <h4>subcontent</h4>
                    </div>
                    <div className='row contributer_input'>
                        <input type='text'
                        name='subcontent'
                        // value={data.subcontent}
                        // onChange={changefn}
                        required />
                    </div> */}
              <div
                className="row contributer_addnewsone"
                style={{ paddingTop: "10px" }}
              >
                <h4>Location</h4>
              </div>
              <div className="row contributer_input">
                <input
                  type="text"
                  name="location"
                  value={data.location}
                  onChange={changefn}
                  required
                />
              </div>
             
            </div>
          </div>
          <div className="coontributor_button">
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Advertiserupload;
