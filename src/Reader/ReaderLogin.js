import React, { useState } from 'react'
import "../Reader/Readerlogin.css"
import {Link, useNavigate} from "react-router-dom"
import axiosInstance from '../BaseUrl'

function ReaderLogin() {

  const[login,setLogin]=useState("")

  const navigate=useNavigate()

  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };


  const submitfn=(e)=>{
      e.preventDefault()
    axiosInstance.post(`/readerlogin`,login)
    .then((result) => {
      console.log("data entered", result);
      if (result.data.status == 200) {
        localStorage.setItem("readerid", result.data.data._id);
        alert("login Sucessfully...");
        // navigate("/")
        navigate("/readerhome")

        window.location.reload();
      } else if (result.data.status==500) {
        // alert(result.data.msg);
          alert("password mismatch")
      }
      else {
        alert(result.data.msg)
      }
    })
    .catch((error) => {
      console.log("error", error);
    });

  }


  return (
    <div className='reader_login'>
      <div className='container'>
        <div className='row reader_box'>
          <div className='col-sm-12'>
            <h2 className='reader_login_title'>Reader Login</h2>
          </div>
          <form className='reader_login_inp' onSubmit={submitfn}>
          <div className='col-sm-12 input_text'>
            <input type='text' placeholder='Mail id' name='email' value={login.email} onChange={changehandleSubmit} />
          </div>
          <div className='col-sm-12 input_text'>
            <input type='password' placeholder='Password' name='password' value={login.password} onChange={changehandleSubmit} />
          </div>
          <div className='col-sm-12 '>
            <Link to="/readerforgetpswd" style={{textDecoration:'none' ,color:'black'}}><h6 className='mt-4 forget_login'>Forget Password</h6></Link>
          </div>
          <div className='col-sm-12  '>
            <button type='submit'  className='btn btn-primary mt-4 login_button'>LOGIN</button>
          </div>
          </form>
          <div className='col-sm-12 reader_login_or'style={{marginTop:"10px"}}>
            <p>OR</p>
          </div>
          <div className='col-sm-12 reader_login_last'>
            <p>YOU HAVE'NT ACCOUNT?
              <Link to="/readersignin"><button type='submit'>CREATE ONE</button></Link></p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ReaderLogin
