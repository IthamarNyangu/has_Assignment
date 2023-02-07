import './App.css';
import AdminLoginForm from './AdminLoginForm';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';


function LoginLogic() {
    const adminUser = {
      email: "admin@ihm.com",
      password: "admin$"
    }
  
    const [user, setUser] = useState({name:"",password:""});
    const [error, setError] = useState("");
  
    const Login = details => {
      console.log(details);
  
      if(details.email === adminUser.email && details.password === adminUser.password){
        console.log("Logged In")
        setUser({
          name: details.name,
          email: details.email
        })
      }else{
        console.log("Username or Password is incorrect!")
        setError("Username or Password is incorrect!")
      }
    }
    const Logout = () => {
      console.log("Logout");
      setUser({name: "", email: ""})
  
    }
  
    return (
      <div>
      {(user.name !== "") ? (
        <>
             <Container fluid>
          <div className='patientdash'>
          <p class='text-justify'>Hospital Apointment Module</p>
          <p className='text-justify'>Admin Dashboard</p>
        <Row>
          <Col>PROVIDERS (DOCTORS) <Link to='/DoctorForm'><button bStyle='primary'>ADD</button></Link> </Col>
          <Col className="d-flex justify-content-end"> {user.name} <Link to='/'><button onClick={Logout}>Logout</button></Link></Col>
        </Row>
          </div>
        </Container>
          
          <table className="table table-stripped">
          <thead>
          <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Specialization</th>
          </tr>
          </thead>
      </table>
          </>
      ) : (
      <AdminLoginForm Login={Login} error={error}/>
      )}
       </div>
    ); 
  }
  
  export default LoginLogic;