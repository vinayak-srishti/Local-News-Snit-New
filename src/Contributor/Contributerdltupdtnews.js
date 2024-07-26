import React, { useEffect, useState } from "react";
import img from "../Assets/rightarrow.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";

function Contributerdltupdtnews({ url }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      // Read the file and set it to state
      const reader = new FileReader();
      reader.onload = (e) => {
        // Log the data URL to verify it's correct
        console.log("Data URL:", e.target.result);
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, reset the state
      setSelectedFile(null);
    }
  };
  const { id } = useParams();
  console.log(id + "kbhfkudbh");

  const [data, setdata] = useState({});

  useEffect(() => {
    axiosInstance.post(`viewnewsById/${id}`).then((res) => {
      console.log(res);
      setdata(res.data.data);
    });
  }, [id]);
  const navigate = useNavigate();
  
  const changefn = (e) => {
    if(e.target.name === "image"){
        
        setdata({...data,image:e.target.files[0]});
    }else{
        setdata({...data,[e.target.name]:e.target.value})
    }
    console.log(data);
  };


  const submitupdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
  console.log(formData);
    // Append all fields except image to formData
    for (const key in data) {
      if (key !== 'image') {
        formData.append(key, data[key]);
      }
    }
  
    // If image has changed, append the new image to formData
    if (data.image instanceof File) {
      formData.append('image', data.image);
    }
  
    // Log formData to check its contents
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  
    // Send formData instead of the plain data object
    axiosInstance
      .post(`updatenews/${id}`, formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        if (res.data.status === 200) {
          alert('Updated successfully');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
    

  const deletefn = () => {
    axiosInstance
      .post(`deleteNewsById/${id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Deleted successfully");
           navigate("/contributerviewnewsbyid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-8 contributer_addnews_main">
      <div className="container">
        <div className="row">
          <div className="col-2  contributer_arrow">
            <Link to="/contributerviewnewsbyid">
              {" "}
              <img src={img} alt="images" width="40px" height="40px" />
            </Link>
          </div>
          <div className="col-6 contributer_arrow">
            <h2>Add News</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-7 contributer_addnews">
              <label
                htmlFor="fileInput"
                style={{ position: "relative", display: "inline-block" }}
              >
           {selectedFile ? (
  // If selectedFile exists, display the selected image
  <img
    src={selectedFile} // Ensure selectedFile is used as the source
    alt="Selected File Preview"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "5px",
    }}
  />
) : data.image && data.image.filename ? (
  // Otherwise, display the image from the API data
  <img
    src={`${url}/${data.image.filename}`}
    alt="Image from API"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "5px",
    }}
  />
) : (
  // Placeholder for image selection
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
                  accept=".jpg, .jpeg, .png" // Define the accepted file types 
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
                    changefn(e);
                  }}
                  required
                  title="Please fill the fields"
                />
              </label>
            </div>
            <div className="col-3 ccccccccccc">
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
                  value={data.category}
                  onChange={changefn}
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
              <div
                className="row contributer_addnewsone "
                style={{ paddingTop: "10px" }}
              >
                <h4>subcontent</h4>
              </div>
              <div className="row contributer_input">
                <input
                  type="text"
                  name="subcontent"
                  value={data.subcontent}
                  onChange={changefn}
                  required
                />
              </div>
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
          <div className="coontributor_button" style={{ display: "flex" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitupdate}
            >
              Update{" "}
            </button>
            <button type="submit" className="btn btn-danger" onClick={deletefn}>
              Delete{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contributerdltupdtnews;
