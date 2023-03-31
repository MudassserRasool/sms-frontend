import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
// import Table from './components/table/Table'
import Table from "./Table";
import Twenty from "./Twenty";

import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import OpenField from "./components/table/OpenField";
import TriggerRendererProp from "./TriggerRendererProp";

const App = () => {
  return (
    <div>
      {/* <div className="container">
        <div className="row">
          <div className="justify-contant-center"><Link to="table" className='mx-2'><button>Table</button></Link>
            <Link to="" className='mx-4'><button>Form</button></Link>
            <Link to="twenty" className='mx-4'><button>Twenty</button></Link>
          </div>
        </div>
      </div> */}
      {/* <OpenField/> */} 
      {/* <Form/> */}
      {/* <Table /> */}
     
      {/* <Twenty   /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        {/* <Route path="/table" element={<Table />} /> */}
        <Route path="/twenty" element={<Twenty />} />
        <Route path="/tr" element={<TriggerRendererProp />} />
      </Routes>

      {/* <Practice/> */}
      {/* <PracticeForm/> */}
    </div>
  );
};

export default App;
