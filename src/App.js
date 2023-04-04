import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/form/Form";
import Table from './components/table/Table'
// import Table from "./Table";
import Twenty from "./Twenty";

import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import OpenField from "./components/table/OpenField";
import TriggerRendererProp from "./TriggerRendererProp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        {/* <Route path="/table" element={<Table />} /> */}
        <Route path="/twenty" element={<Twenty />} />
        <Route path="/tr" element={<TriggerRendererProp />} />
      </Routes>
    </div>
  );
};

export default App;
