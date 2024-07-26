import React from 'react'
import "../Reader/Readersignin.css"
import img from "../Assets/signin.png"
import { readerRegSchema } from '../schema'
import { useFormik } from "formik";
import axiosInstance from '../BaseUrl'
import { useNavigate } from 'react-router-dom';



function Readersignin() {
    const navigate = useNavigate()
    const onSubmit = (a) => {
        a.preventDefault();
        if (!values.contact || !/^\d{10}$/.test(values.contact)) {
            alert("Contact number must be a 10-digit number");
            return;
        }
        if (!/^\d{6}$/.test(values.pincode)) {
            alert("Pincode must have 6 digits");
            return;
          }

        axiosInstance.post(`/readersignup`, values)
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    // axiosInstance.post(`/readerlogin`,{email:values.email,password:values.password})
                    // .then((res)=>{
                    //     console.log("data entered",res);
                    //     if(res.status==200){
                    //         localStorage.setItem("userid", res.data.id);
                    //         alert(" reg success")
                    //     }
                    //     else{
                    //         alert("something error")
                    //     }
                    // })
                    // .catch((err)=>{
                    //     console.log(err);
                    //     alert("error")
                    // })
                    console.log(res);
                    alert("registered successfully")
                    navigate("/readerlogin")
                }
                else if (res.data.status == 409) {
                    alert(res.data.msg)
                }
                else if(res.data.status === 500){
                    alert("Something Fields Are Missing")
                }
            })
            .catch((err) => {
                console.log(err);
                alert("errorr")
            })

    }

    const { values, errors, touched, handleBlur, setFieldValue, handleChange, handleSubmit } =

        useFormik({
            initialValues: {
                firstname: '',
                lastname: '',
                gender: '',
                age: '',
                street: '',
                city: '',
                pincode: '',
                state: '',
                nationality: '',
                email: '',
                contact: '',
                password: '',
                confirmpassword: '',
            },
            validationSchema: readerRegSchema,
            validateOnChange: true,
            onSubmit,
        });
    console.log(values.contact);
    console.log(values);
    return (
        <div className='reader_signin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-6 col-md-6  reader_signin_img'>
                        <img src={img} alt='image' className='readre_img' />
                    </div>

                    <div className='col-sm-6 col-lg-6 col-md-6 reader_signin_title'>
                        <p className='reader_title'>Register</p>
                        <form onSubmit={onSubmit}>
                            <div className='row'>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='First Name' name='firstname' value={values.firstname} onChange={handleChange} onBlur={handleBlur} required title='Please fill the fields' />
                                    {errors.firstname && touched.firstname && (
                                        <p className="error">{errors.firstname}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='Last Name' name='lastname' value={values.lastname} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.lastname && touched.lastname && (
                                        <p className="error">{errors.lastname}</p>
                                    )}
                                </div>
                                <div className="col-12 pb-3 input_radio " >
                                    <label className="pb-3">Gender :</label>
                                    <input type="radio" id="male" name="gender" value='Male' onChange={handleChange} onBlur={handleBlur} required />
                                    <label for="male">&nbsp; Male &nbsp;</label>
                                    <input type="radio" id="female" name="gender" value='Female' onChange={handleChange} onBlur={handleBlur} required />
                                    <label for="female">&nbsp; Female &nbsp;</label>
                                    <input type="radio" id="others" name="gender" value='Others' onChange={handleChange} onBlur={handleBlur} required />
                                    <label for="female">&nbsp; Others &nbsp;</label>
                                    {errors.gender && touched.gender && (
                                        <p className="error">{errors.gender}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='Age' name='age' value={values.age} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.age && touched.age && (
                                        <p className="error">{errors.age}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='Street' name='street' value={values.street} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.street && touched.street && (
                                        <p className="error">{errors.street}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='City' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.city && touched.city && (
                                        <p className="error">{errors.city}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='Pincode' name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.pincode && touched.pincode && (
                                        <p className="error">{errors.pincode}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='State' name='state' value={values.state} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.state && touched.state && (
                                        <p className="error">{errors.state}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <select name="nationality" value={values.nationality} onChange={handleChange} onBlur={handleBlur} >
                                        <option value="" disabled>Nationality</option>
                                        <option value="Canada">Canada</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                        <option value="India">India</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Japan">Japan</option>
                                        <option value="China">China</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="South Africa">South Africa</option>
                                    </select>
                                    {errors.nationality && touched.nationality && (
                                        <p className="error">{errors.nationality}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='email' className='form_label' placeholder='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='text' className='form_label' placeholder='Contact' name='contact' value={values.contact} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.contact && touched.contact && (
                                        <p className="error">{errors.contact}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='password' className='form_label' placeholder='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_input">
                                    <input type='password' className='form_label' placeholder='Confirm Password' name='confirmpassword' value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.confirmpassword && touched.confirmpassword && (
                                        <p className="error">{errors.confirmpassword}</p>
                                    )}
                                </div>
                                <div className="col-6 pb-3 reader_signin_button">
                                    <button type='submit' className='btn btn-primary'>Register</button>
                                </div>


                            </div></form>
                    </div>

                </div>


            </div>




        </div>
    )
}

export default Readersignin