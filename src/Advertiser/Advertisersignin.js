import React, { useEffect } from 'react'
import "../Advertiser/Advertisersignin.css"
import img from "../Assets/logo.png"
import { advertiserRegSchema } from '../schema'
import { useFormik } from 'formik'
import axiosInstance from '../BaseUrl'
import { useNavigate } from 'react-router-dom'


function Advertisersignin() {

    const storedReaderId = localStorage.getItem("readerid");
    console.log(storedReaderId);
    useEffect(()=>{
        axiosInstance.post(`/readerviewbyid/${storedReaderId}`,values)
        .then((res)=>{
          const readerData = res.data.msg; // Assuming res.data.msg contains reader data
            // Set the initial values for the form fields
            setFieldValue('firstname', readerData.firstname);
            setFieldValue('lastname', readerData.lastname);
            setFieldValue('gender', readerData.gender);
            setFieldValue('street', readerData.street);
            setFieldValue('city', readerData.city);
            setFieldValue('pincode', readerData.pincode);
            setFieldValue('state', readerData.state);
            setFieldValue('nationality', readerData.nationality);
            setFieldValue('email', readerData.email);
            setFieldValue('contact', readerData.contact);
      
            // Other fields...
      
            console.log(readerData);
        })
        .catch((err)=>{
          console.log(err);
        })
      },[storedReaderId])
          
const navigate=useNavigate()
    const onSubmit=(a)=>{
        a.preventDefault()
        axiosInstance.post(`/advertisersignup`,values,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
    
        .then(result => {
            console.log(result);
            if (result.data.status == 200) {
              alert("reg sucessfully")
              navigate("/advertiserlogin")

            }
            else if (result.data.status == 409) {
              alert("You are already been registered")
            }
            else if(result.data.status==500){
              alert("some fields are missing")
            }
          })
          .catch((err) => {
            console.log(err);
            alert("errorrr")
          })
    
    }

    const { values, errors, touched, handleBlur, setFieldValue, handleChange, handleSubmit } =

    useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        gender: '',
        companyname: '',
        regno:'',
        street: '',
        city: '',
        pincode: '',
        state: '',
        email: '',
        contact: '',
        image:'',
        password: '',
        confirmpassword: '',
      },
      validationSchema: advertiserRegSchema,
      validateOnChange: true,
      onSubmit,
    });
    const handleImageChange = (event) => {
      setFieldValue('image', event.currentTarget.files[0]);
    };


    return (
        <div>
            <div className='contributor_signin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 col-lg-6 col-md-6'>
                            <div className='contributor_head'>
                                <p>Became a Advertiser</p>
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className='row input_class'>
                                    <div className='col-6 pb-3 contributor_signin_input'>
                                        <input type='text' placeholder='First Name' name='firstname'value={values.firstname} onChange={handleChange} onBlur={handleBlur} required title='Please fill the fields' />
                                        {errors.firstname && touched.firstname && (
                      <p className="error">{errors.firstname}</p>
                    )}
                                    </div>
                                    <div className='col-6 pb-3 contributor_signin_input'>
                                        <input type='text' placeholder='Last Name' name='lastname' value={values.lastname} onChange={handleChange} onBlur={handleBlur} required />
                                        {errors.lastname && touched.lastname && (
                      <p className="error">{errors.lastname}</p>
                    )}
                                    </div>
                                    <div className="col-12 pb-3 input_radio " >
                                        <label className="pb-3">Gender :</label>
                                        <input type="radio" id="male" name="gender" value='male' onChange={handleChange} onBlur={handleBlur} required />
                                        <label for="male">&nbsp; Male &nbsp;</label>
                                        <input type="radio" id="female" name="gender" value='female' onChange={handleChange} onBlur={handleBlur} required />
                                        <label for="female">&nbsp; Female &nbsp;</label>
                                        <input type="radio" id="others" name="gender" value='others' onChange={handleChange} onBlur={handleBlur} required />
                                        <label for="female">&nbsp; Others &nbsp;</label>
                                        {errors.gender && touched.gender && (
                      <p className="error">{errors.gender}</p>
                    )}

                                    </div>
                                    <div className='col-6 pb-3 contributor_signin_input'>
                                        <input type='text' placeholder='Company name' name='companyname' value={values.companyname} onChange={handleChange} onBlur={handleBlur} required />
                                        {errors.companyname && touched.companyname && (
                      <p className="error">{errors.companyname}</p>
                    )}
                  </div> 
                                        <div className='col-6 pb-3 contributor_signin_input'>
                                            <input type='text' placeholder='Reg no' name='regno' value={values.regno} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.regno && touched.regno && (
                      <p className="error">{errors.regno}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input'>
                                            <input type='text' placeholder='Street' name='street' value={values.street} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.street && touched.street && (
                      <p className="error">{errors.street}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input '>
                                            <input type='text' placeholder='City' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.city && touched.city && (
                      <p className="error">{errors.city}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input '>
                                            <input type='text' placeholder='Pincode' name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.pincode && touched.pincode && (
                      <p className="error">{errors.pincode}</p>
                    )}
                                        </div>

                                        <div className='col-6 pb-3 contributor_signin_input '>
                                            <input type='text' placeholder='State' name='state' value={values.state} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.state && touched.state && (
                      <p className="error">{errors.state}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input '>
                                            <input type='text' placeholder='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input'>
                                            <input type='text' placeholder='Contact' name='contact' value={values.contact} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.contact && touched.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input' style={{textAlign:"center",color:"red"}}>
                    Upload A Valid Certificate:
                  </div>
                  <div className='col-6 pb-3 contributor_signin_input'>
                  <input
                    type="file"
                    placeholder="Enter the street name"
                    className="w-100"
                    name="image"
                     onChange={handleImageChange} onBlur={handleBlur} required
                  />
                  </div>
                                        <div className='col-6 pb-3 contributor_signin_input '>
                                            <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
                                        </div>
                                        <div className='col-6 pb-3 contributor_signin_input'>
                                            <input type='password' placeholder='Confirm Password' name='confirmpassword' value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} required />
                                            {errors.confirmpassword && touched.confirmpassword && (
                      <p className="error">{errors.confirmpassword}</p>
                    )}
                                        </div>
                                        <div className="col-6 pb-3 reader_signin_button">
                                            <button type='submit' className='btn btn-primary'>Register</button>
                                        </div>
                                  </div>
                            </form>
                        </div>
                        <div className='col-sm-6 col-lg-6 col-md-6'>
                            <div className='row contributer_writings'>
                                <div className='col-12 pb-6 contributer_heading'>
                                    <p><img src={img}/> Ads</p>
                                </div>
                                <div className='col-12 pb-6 contributer_para1'>
                                    <p>Target Audiance</p>
                                </div>
                                <div className='col-12 pb-6 '>
                                    <p>Reach customers where they're most passionate and engaged</p>
                                </div>
                                <div className='col-12 pb-6 contributer_para1'>
                                    <p>Measure Success</p>
                                </div>
                                <div className='col-12 pb-6 '>
                                    <p>Increase brand awareness and drive traffic,convertions, or app installs</p>
                                </div>
                                <div className='col-12 pb-6 contributer_para1'>
                                    <p>Meet bussiness goals</p>
                                </div>
                                <div className='col-12 pb-6 '>
                                    <p>Leverage insights to optimize campaigns and drive convertions</p>
                                </div>
                                <div className='col-12 pb-6 contributer_para2'>
                                    <p>Once you are register,it requires approval by LNG <br />Normally it takes 24 hrs for approval <br />
                                    {/* But if ,still not approved mail at Inghelpline@gmail.com */}
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advertisersignin