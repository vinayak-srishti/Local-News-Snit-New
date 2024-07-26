import * as yup from "yup";

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const pincodeErrorMessage = "Pincode must be a 6 digit number";



export const readerRegSchema  = yup.object().shape({
    firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
    gender:  yup.string().required("Required"),
    age:yup.number().required("Enter age"),
    street: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    pincode:  yup.number().min(111111,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").positive().integer().required("Required"),
    state: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    nationality: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    contact:  yup.number().min(1000000000,"Contact must be a 10 digit number").max(9999999999,"Contact must be a 10 digit number").positive().integer().required("Required"),
    password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Password mismatch").required("Required"),
    // dob: yup.date().required("Required"),
    // district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    //image: yup.object().required("Required"),     
})



export const contributerRegSchema  = yup.object().shape({
    firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
    gender:  yup.string().required("Required"),
    age:yup.number().required("Enter age"),
    street: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    pincode:  yup.number().min(111111,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").positive().integer().required("Required"),
    state: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    nationality: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    contact:  yup.string().matches(/^[0-9]{10}$/, "Contact must be a 10-digit number").required("Required"),
    password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Password mismatch").required("Required"),
    // dob: yup.date().required("Required"),
    // district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
     image: yup.object().required("Required"),     
})

export const advertiserRegSchema  = yup.object().shape({
    firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
    gender:  yup.string().required("Required"),
    companyname:yup.string().required("Enter company name"),
    regno:yup.number().required("Enter register number"),
    street: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    pincode:  yup.number().min(111111,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").positive().integer().required("Required"),
    state: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    contact:  yup.string().matches(/^[0-9]{10}$/, "Contact must be a 10-digit number").required("Required"),
    password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Password mismatch").required("Required"),
    // dob: yup.date().required("Required"),
    // district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
     image: yup.object().required("Required"),     
})

