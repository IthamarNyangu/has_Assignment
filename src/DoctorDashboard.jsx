import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

function DoctorDashboard() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('/api/doctor/get-doctors')
            .then(res => setDoctors(res.data))
            .catch(err => console.error(err));
    }, []);

    return(
        <>
        <Container fluid>
          <div className='patientdash'>
          <p class='text-justify'>Hospital Apointment Module</p>
          <p className='text-justify'>Doctor Dashboard</p>
        <Row>
          <Col>APPOINTMMENTS <Link to='/Contact'><button bStyle='primary'>ADD</button></Link> </Col>
          <Col className="d-flex justify-content-end"><Link to='/'><button bStyle='primary'>LOGOUT</button></Link></Col>
        </Row>
          </div>
        </Container>
    
        <table className="table table-stripped">
                <thead>
                <tr>
                    <th> #</th>
                    <th>Doctor Name</th>
                    <th>Patient Name</th>
                    <th>Appointment Details</th>
                    <th>Appointment time</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.firstName}</td>
                            <td>{doctor.patientId}</td>
                            <td>{doctor.details}</td>
                            <td>{doctor.appointmentTime}</td>
                            <td>{doctor.approval}</td>
                            <td></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DoctorDashboard;