import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
  const [firstName, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const doctorRegistrationDetails = {
      firstName,
      lname,
      specialization,
      email,
      password,
      phone,
      roleId: 2,
    };

    axios
      .post("/api/doctor/register", doctorRegistrationDetails)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      navigate('/AdminDashboard')
  };

  return (
    <div className="LoginLogic">
    <form onSubmit={handleSubmit}>
    <div className="form-inner">
    <h6> Add Provider (Doctor)</h6>
      
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Input First Name"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Input Last Name"
          value={lname}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="specialization">Specialization:</label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          placeholder="Input Last Name"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Input Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Input Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <input
        type="submit"
        value="ADD"
        className="right" />
      </div>
    </form>
    </div>
  );
};

export default Doctor;
