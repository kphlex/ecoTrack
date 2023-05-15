import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from "./components/loginReg/Login";
import { Signup } from './components/loginReg/Register';
import {Dashboard} from "./components/Dashboard";
import {Navigation} from './components/Nav';
import {Logout} from './components/loginReg/Logout';


function App() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup></Signup>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
)}
export default App;