import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function DoctorAddForm() {
  const [firstName, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lname: "",
    specialist: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!firstName) {
      isValid = false;
      errors.firstName = "First name is required";
    }

    if (!lname) {
      isValid = false;
      errors.lname = "Last name is required";
    }

    if (!specialist) {
      isValid = false;
      errors.specialist = "Specialist is required";
    }

    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = "Email is invalid";
    }

    if (!password) {
      isValid = false;
      errors.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Password and confirm password must match";
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    fetch('https://localhost:8080/api/doctor/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to submit form');
        }
        setIsSubmitting(false);
        setFormData({
          firstName: '',
          lname: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error(error);
        alert('An error occurred. Please try again later.');
      });
  };
  
  return (
    <div className="LoginLogic">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h6> Add Provider (Doctor)</h6>
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input
				type="text"
				name="firstName"
				id="firstName"
				placeholder="Input First Name"
				value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {formErrors.firstName && (
          <div className="error-message">{formErrors.firstName}</div>
        )}
		</div>
			  
		<div className="form-group">
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Input Last Name"
          value={lname}
          onChange={(e) => setLastName(e.target.value)}
        />
        {formErrors.lname && (
          <div className="error-message">{formErrors.lname}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="specialist">Specialist:</label>
        <input
          type="text"
          name="specialist"
          id="specialist"
          placeholder="Input Specialization"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />
        {formErrors.specialist && (
          <div className="error-message">{formErrors.specialist}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Input Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && (
          <div className="error-message">{formErrors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Input Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && (
          <div className="error-message">{formErrors.password}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formErrors.confirmPassword && (
          <div className="error-message">{formErrors.confirmPassword}</div>
        )}
      </div>

      <input type="submit" value="CLOSE" />
      <input
        type="submit"
        value="ADD"
        className="right"
        disabled={isSubmitting}
      />
    </div>
  </form>
</div>
)
			  }
			  
export default DoctorAddForm;