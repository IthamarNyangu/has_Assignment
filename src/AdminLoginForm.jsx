import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function AdminLoginForm({Login, error}) {
const [details, setDetails] = useState({name: "", email:"", password:""})

const submitHandler = e => {
    e.preventDefault();
    Login(details);
}

return(
    <div className="LoginLogic">
   <form onSubmit={submitHandler}>
    <div className="form-inner">
    <h6>Hospital Appointment Module</h6>
    <h6>Admin Login</h6>
    {(error !== "") ? (<div className="error">{error}</div> ) : ""}
        <div className="form-group">
        <label htmlFor="name">Username:</label>
        <input type="text" name="name" id="name" placeholder="Input Username" onChange={e => setDetails({...details, name: e.target.value})} value={details.name }/>
        </div>

        <div className="form-group">
        <label htmlFor="name">Email:</label>
        <input type="email" name="email" id="email" placeholder="Input Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email }/></div>
        
        <div className="form-group">
        <label htmlFor="name">Password:</label>
        <input type="password" name="password" id="password" placeholder="Input Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password }/></div>

        <input type="submit" value="LOGIN" className="right"/>

    
</div>
   </form>
   </div>
)
}

export default AdminLoginForm;