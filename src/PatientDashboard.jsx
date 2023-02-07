import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/patient/get-appointments')
      .then(res => {
        setAppointments(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <div className='patientdash'>
          <p class='text-justify'>Hospital Appointment Module</p>
          <p className='text-justify'>Patient Dashboard</p>
          <Row>
            <Col>APPOINTMENT <Link to='/PatientForm'><button bStyle='primary'>ADD</button></Link> </Col>
            <Col style={{display:'flex', justifyContent:'right'}}>  <Link to='/'><button bStyle='primary'>LOGOUT</button></Link></Col>
          </Row>
        </div>
      </Container>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>#</th>
            <th>DoctorId</th>
            <th>PatientId</th>
            <th>details</th>
            <th>date</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment + 1}</td>
              <td>{appointment.doctorId}</td>
              <td>{appointment.patient_Id}</td>
              <td>{appointment.details}</td>
              <td>{appointment.date}</td>
              <td>{appointment.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PatientDashboard;
