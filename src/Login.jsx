
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Login(){

return(
    <div className="LoginLogic">
    <form>
    <div className="form-inner">
    <h6>Hospital Appointment Module</h6>
    <h6>User Login</h6>
        <div className="form-group">
        <label htmlFor="name">Username:</label>
        <input type="text" name="name" id="name" placeholder="Input Email" />
        </div>
        
        <div className="form-group">
        <label htmlFor="name">Password:</label>
        <input type="password" name="password" id="password" placeholder="Input Password" /></div>

        <input type="submit" value="LOGIN" className="right"/>

</div>
   </form>
   </div>
)
}

export default Login;