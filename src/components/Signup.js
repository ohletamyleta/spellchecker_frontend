import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js";

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleUserInfoInputChange = event => {
      const { name, value } = event.target
      const updatedFormInfo = {
        ...signupFormData,
        [name]: value
      }
      updateSignupForm(updatedFormInfo)
    }
  
     
  
    const handleSubmit = event => {
      event.preventDefault()
       
      signup(signupFormData)
    }
  
    return (
      <div>
      
      
      <form onSubmit={handleSubmit}>
        <div className="ui input">

         <input placeholder="user name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfoInputChange} /> 
        <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} /> 
         <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} /> <br/><br/>

        <button className="button button-signup" type="submit" value="Sign Up" >  Sign up</button>

        </div>
      </form>
      </div>
    )
  }
  
  const mapStateToProps = state => {
    return {
      signupFormData: state.signupForm
    }
  }
  
  export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)