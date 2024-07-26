import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ModeratorLogin() {
  const[moderator,setmoderator]=useState({username:"",password:""})

  const username="moderator"
  const password="moderator123"

  const onchangefn=(a)=>{
    setmoderator({
      ...moderator,[a.target.name]:a.target.value
    })
  }
const navigate=useNavigate()
  const loginfn=((e)=>{
    e.preventDefault()
    if(username==moderator.username){
      if(password==moderator.password){
        alert("login successfully")
        navigate("/moderatorrequest")
      }
      else{
        alert("password error")
      }
    }
    else{
      alert("username error")
    }
  })
  return (
    <div style={{height:"550px"}}>
             <div className='reader_login'>
          <div className='container'>
            <div className='row reader_box contributor_login'>
              <div className='col-sm-12'>
                <h2 className='reader_login_title'>Moderator Login</h2>
              </div>
              <form className='reader_login_inp' onSubmit={loginfn} >
                <div className='col-sm-12 input_text'>
                  <input type='text' placeholder='Mail id' name='username' value={moderator.username}   onChange={onchangefn} />
                </div>
                <div className='col-sm-12 input_text'>
                  <input type='password' placeholder='Password' name='password' value={moderator.password} onChange={onchangefn}  />
                </div>
                {/* <div className='col-sm-12 '>
                  <Link to="/advertiserforgetpswd" style={{ textDecoration: 'none', color: 'black' }}><h6 className='mt-4 forget_login'>Forget Password</h6></Link>
                </div> */}
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

export default ModeratorLogin
