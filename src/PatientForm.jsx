import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [patientId, setPatientId] = useState(0);
  const [doctorId, setDoctorId] = useState(0);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentDetails = {
      details,
      date,
      appointmentTime,
      patientId,
      doctorId
    };

    axios.post('/api/patient/add-appointment', appointmentDetails)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

      navigate('/patientDashboard')
  };

  return (
    <div className="LoginLogic">
    <form onSubmit={handleSubmit}>
    <div className="form-inner">
    <h6> Appointment Addition </h6>
      <div className="form-group">
        <label htmlFor="details">Details:</label>
		<input
          type="textarea"
          id="details"
          placeholder="Enter Reason"
          name="details"
          value={details}
          onChange={e => setDetails(e.target.value)} />
      </div>
	   <div className="form-group">
        <label htmlFor="date">Date:</label>
		<input
          type="date"
          id="date"
          placeholder="Enter Reason"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)} />
      </div>
	   <div className="form-group">
        <label htmlFor="appointmentTime">Time:</label>
		<input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={appointmentTime}
          onChange={e => setAppointmentTime(e.target.value)} />
      </div>
	   <div className="form-group">
        <label htmlFor="doctorId">DoctorId:</label>
		<input
          type="number"
          id="doctorId"
          name="doctorId"
          value={doctorId}
          onChange={e => setDoctorId(e.target.value)} />
      </div>
	   <div className="form-group">
        <label htmlFor="patientId">patientId:</label>
		<input
          type="number"
          id="patientId"
          name="patientId"
          value={patientId}
          onChange={e => setPatientId(e.target.value)} />
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

export default PatientForm;
	  
