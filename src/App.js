
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import AdminLoginForm from './AdminLoginForm';
import LoginLogic from './LoginLogic'
import DoctorForm from './DoctorForm';
import Doctor from './Doctor';
import UserLogic from './UserLogic';
import UserLoginForm from './UserLoginForm';
import PatientForm from './PatientForm';
import PatientDashboard from './PatientDashboard';
import DoctorLogic from './DoctorLogic';
import DoctorDashboard from './DoctorDashboard';


function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/AdminDashboard' element={<AdminDashboard />} />
      <Route path='/AdminLoginForm' element={<AdminLoginForm />} />
      <Route path='/LoginLogic' element={<LoginLogic />} />
      <Route path='/UserLogic' element={<UserLogic />} />
      <Route path='/Doctorform' element={<DoctorForm />} />
      <Route path='/Patientform' element={<PatientForm />} />
      <Route path='/Doctor' element={<Doctor />} />
      <Route path='/UserLoginLogic' element={<UserLoginForm />} />
      <Route path='/PatientDashboard' element={<PatientDashboard />} />
      <Route path='/DoctorLogic' element={<DoctorLogic />} />
      <Route path='/DoctorDashboard' element={<DoctorDashboard />} />
    </Routes>
    </div>
  );
}

export default App;
