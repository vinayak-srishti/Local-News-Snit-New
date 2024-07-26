import React ,{useState}from 'react'
import {Link, useNavigate} from "react-router-dom"
import axiosInstance from '../BaseUrl'

function AdvertiserLogin() {

  const [login, setlogin] = useState("")

  const changehandleSubmit = (a) => {
    setlogin({ ...login, [a.target.name]: a.target.value });
  };

  const navigate=useNavigate()
  const submitfn = (e) => {
    e.preventDefault()
    axiosInstance.post(`/advertiserlogin`, login)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          localStorage.setItem("advertiserid", result.data.data._id);
          alert("login Sucessfully...");
          navigate("/advertiser_viewaccount")
          // window.location.reload(false)
        } else if (result.data.status == 500) {
          // alert(result.data.msg);
          alert(result.data.msg)
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
      <div style={{height:"550px"}}>
        <div className='reader_login'>
          <div className='container'>
            <div className='row reader_box contributor_login'>
              <div className='col-sm-12'>
                <h2 className='reader_login_title'>Advertiser Login</h2>
              </div>
              <form className='reader_login_inp' onSubmit={submitfn} >
                <div className='col-sm-12 input_text'>
                  <input type='text' placeholder='Mail id' name='email' value={login.email} onChange={changehandleSubmit} />
                </div>
                <div className='col-sm-12 input_text'>
                  <input type='password' placeholder='Password' name='password' value={login.password} onChange={changehandleSubmit} />
                </div>
                <div className='col-sm-12 '>
                  <Link to="/advertiserforgetpswd" style={{ textDecoration: 'none', color: 'black' }}><h6 className='mt-4 forget_login'>Forget Password</h6></Link>
                </div>
                <div className='col-sm-12  '>
                  <button type='submit' className='btn btn-primary mt-4 login_button'>LOGIN</button>
                </div>
              </form>

            </div>

          </div>


        </div>

      </div>
    )
  }

  export default AdvertiserLogin
