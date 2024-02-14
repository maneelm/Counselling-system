import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/Header';
import {Home} from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointmnet from './components/Appointmnet';
import Contact from './components/Contact';
import Toggle from './components/Toggle';
import FetchRegistrations from './components/FetchRegistrations';
function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/Login" element={<Login/>} exact />
        <Route path="/AddCounsellor" element={<Counsellor/>} exact />
        <Route path="/visitor" element={<Visitor/>} exact />
        <Route path="/appointment" element={<Appointmnet/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/toggle" element={<Toggle/>} exact />
        <Route path="/fetchregistrations" element={<FetchRegistrations/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
