import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/form/Form";
import Table from './components/table/Table'
import SmsLog from './components/smslog/SmsLog.jsx'
// import Twenty from "./Twenty";

import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import Example from "./components/smslog/Example";


const App = () => {
  return (
    <div>
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
