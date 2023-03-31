import React, { useState } from "react";

function OpenField() {
    // fields data
  const [formData, setFormData] = useState({
    provider: "",
    sid: "",
    authToken: "",
    number: "",
    accessKey: ""
  });
   
  // target values of the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


//   Render after select the twilio open three fiels
  const renderTwilioFields = () => {
    if (formData.provider === "Twilio") {
      return (
        <>
          <div className="col-md-12">
            <label>Sid</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="sid"
              value={formData.sid}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label>Auth Token</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="authToken"
              value={formData.authToken}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label>Number</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
        </>
      );
    }
  };

  // after select message bird open only one field
  const renderMessageBirdFields = () => {
    if (formData.provider === "MessageBird") {
      return (
        <div className="col-md-12">
          <label>Access Key</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="accessKey"
            value={formData.accessKey}
            onChange={handleInputChange}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="col-md-12">
        <select
          className="form-select form-select-lg custom-opacity"
          value={formData.provider}
          onChange={handleInputChange}
          name="provider"
        >
          <option className="box" selected>
            Select Provider
          </option>
          <option className="box">MessageBird</option>
          <option className="box">Twilio</option>
        </select>
      </div>
      {renderMessageBirdFields()}
      {renderTwilioFields()}
    </div>
  );
}


export default OpenField