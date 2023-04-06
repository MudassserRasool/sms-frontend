import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import Table from './components/table/Table'
import SmsLog from './components/smslog/SmsLog.jsx'

import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CheckMe from "./components/smslog/CheckMe";

const App = () => {
  
  return (
    <div>
    <CheckMe/>
      {/* <Example/> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/smslog" element={<SmsLog />} />
      </Routes>
    </div>
  );
};

export default App;
