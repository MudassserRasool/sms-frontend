import { React, useEffect, useState } from "react";
import "./assets/style.css";

const SmsLog = () => {
  const [smsData, setsmsData] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    fetch("https://apigateway-preprod.findanexpert.net/sms/logs")
      .then((res) => res.json())
      .then((smsData) => {
        setsmsData(smsData.data);
        console.log(smsData);
      });
  }, []);

  const handelInput = (e) => {
    const inputValue = e.target.value;
    setinput(inputValue);
    console.log(input);
  };
  

  return (
    <div>
      <div className="container mt-4 mx-auto">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Phone"
            onChange={handelInput}
          />
        </div>
        <table className="table table-borderless mt-4">
          <thead>
            <tr className="bg-light">
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "10%" }}>Sms ID</th>
              <th style={{ width: "20%" }}>Phone</th>
              <th colspan="3" style={{ width: "40%" }}>
                Status
              </th>
              <th style={{ width: "20%" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {smsData
              .filter((smsMapedData) => {
                return input === ""
                  ? smsMapedData
                  : smsMapedData.phones.toString().includes(input.toString());
              })
              .map((smsMapedData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{smsMapedData.messageId}</td>
                  <td>{smsMapedData.phones}</td>
                  {smsMapedData.meta.map((maped) => (
                      <td>{maped.status}</td>
                  
                  ))}
                  <td>{smsMapedData.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SmsLog;