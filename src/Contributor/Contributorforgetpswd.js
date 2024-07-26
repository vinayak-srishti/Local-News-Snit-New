import React from 'react'
import "../Contributor/Contributerforgetpswd.css"
import img from "../Assets/rightarrow.png"
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../BaseUrl'
import { useState } from 'react'


function Contributorforgetpswd() {
  const navigate = useNavigate()

  const [password, setPassword] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const changehandleSubmit = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  console.log(password);
  const validatePassword = (password) => {

    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return '';
  };

  const handlesubmit = (e) => {
    e.preventDefault()
    const passwordError = validatePassword(password.password);
    const confirmPasswordError = password.password !== password.confirmpassword ? 'Passwords do not match' : '';

    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);

    if (!passwordError && !confirmPasswordError) {

      axiosInstance.post(`/contributerforgetpswd`, password)
        .then((result) => {
          console.log(result);

          if (result.data.status == 200) {
            alert("updated sucessfully")
            navigate("/contributerlogin")

          }
          else if (result.data.status == 500) {
            alert("usernot found")
          }
        })
        .catch((err) => {
          console.log("error", err);
        })
    }
  }

  return (
    <div>


      <div className='reader_login contributer_pswd'>
        <div className='col-sm-12 contributer_image'>
          <Link to="/contributerlogin"> <img src={img} alt="image" height="40px" width="40px" /></Link>
        </div>
        <div className='container'>
          <div className='row reader_box'>
            <div className='col-sm-12'>
              <h2 className='reader_login_title'>Login</h2>
            </div>
            <form className='reader_login_inp' onSubmit={handlesubmit}>
              <div className='col-sm-12 input_text'>
                <input type='text' placeholder='Mail id' name='email' value={password.email} onChange={changehandleSubmit} />
              </div>
              <div className='col-sm-12 input_text'>
                <input type='password' placeholder='New Password' name='password' value={password.password} onChange={changehandleSubmit} />
                {passwordError && <p className='error-message'>{passwordError}</p>}
              </div>
              <div className='col-sm-12 input_text'>
                <input type='password' placeholder='Confirm Password' name='confirmpassword' value={password.confirmpassword} onChange={changehandleSubmit} />

                {confirmPasswordError && <p className='error-message'>{confirmPasswordError}</p>}
              </div>
              {/* <div className='col-sm-12 '>
          <h6 className='mt-4 forget_login'>Forget Password</h6>
        </div> */}
              <div className='col-sm-12  '>
                <button type='submit' className='btn btn-primary mt-4 login_button'>UPDATE</button>
              </div>
            </form>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Contributorforgetpswd