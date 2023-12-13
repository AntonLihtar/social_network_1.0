import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {FormControl} from "../common/FormControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import classes from "./Login.module.css";

const LoginForm = (props) => {
    return (
      <div>
       <form onSubmit={props.handleSubmit}>
           <div>
               <Field component={FormControl}
                      child={"input"}
                      name="email"
                      validate={[requiredField]}
                      placeholder="email"/>
           </div>
           <div>
               <Field component={FormControl}
                      child={"input"}
                      name="password"
                      type="password"
                      validate={[requiredField]}
                      placeholder="password"/>
           </div>
           <div>
               <Field component="input"  name="rememberMe" type="checkbox"/>remember me
           </div>

           {props.error && <div className={classes.formSummaryError}>
               {props.error}
           </div>}

           <div>
               <button>Login</button>
           </div>
       </form>
      </div>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }

    return (
      <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)