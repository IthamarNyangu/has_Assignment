import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

function AdminDashboard() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('/api/admin/get-doctors')
            .then(res => setDoctors(res.data))
            .catch(err => console.error(err));
    }, []);

    return(
        <>
        <Container fluid>
          <div className='patientdash'>
          <p class='text-justify'>Hospital Apointment Module</p>
          <p className='text-justify'>Admin Dashboard</p>
        <Row>
          <Col>PROVIDERS (DOCTORS) <Link to='/Contact'><button bStyle='primary'>ADD</button></Link> </Col>
          <Col className="d-flex justify-content-end"><Link to='/'><button bStyle='primary'>LOGOUT</button></Link></Col>
        </Row>
          </div>
        </Container>
    
        <table className="table table-stripped">
                <thead>
                <tr>
                    <th> #</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Specialization</th>
                </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.firstName}</td>
                            <td>{doctor.lname}</td>
                            <td>{doctor.specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AdminDashboard;