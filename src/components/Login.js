import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = ({ loginFormData,  updateLoginForm, login }) => {

    const handleInputChange = event => {
         const { name, value } = event.target

         const updatedLoginFormInfo = {
            ...loginFormData,
            [name]: value
        }
     
        updateLoginForm(updatedLoginFormInfo)
    }

    const handleSubmit = event => {
     
        event.preventDefault()

        login(loginFormData)


    }

 return (
        <div>
           <form onSubmit={handleSubmit}>
            <div className="ui input">
            <input placeholder="user name" value={loginFormData.name} name="name" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/><br/><br/>
            <button className="button button-login" type="submit" value="Log In" >  Log in </button>
             </div>
        </form>
        </div>
 )
}
const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);