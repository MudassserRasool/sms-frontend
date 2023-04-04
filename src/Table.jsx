import React, { useEffect, useState } from "react";
import "../src/components/table/assets/styles.css";
// import { CredentialService } from "../../shared/services/credentials";
import { CredentialService } from "../src/shared/services/credentials";
import { MDBTooltip } from "mdb-react-ui-kit";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const credentialsObject = {
  twilio: ["sid", "number", "auth_token"],
  messageBird: ["AccessKey"],
};
const Table = () => {
  const [credentials, setcredentials] = useState([]);
  useEffect(() => {
    loadCredentials();
  }, []);

  function success(response) {}
  const handleFailed = (error) => {};

  // function handleFailed(err) { }

  function loadCredentials() {
    CredentialService.get()
      .then((response) => {
        console.log("---------------response----------------");
        console.log(response);
        console.log("---------------response----------------");
        setcredentials([...response.data.data]);
      })
      .catch(handleFailed);
  }

  //------------------ edit filelds ----------------

  const [formData, setFormData] = useState({
    country: "",
    type: "",
    enableOrDisable: true,
    provider: "",
    sid: "",
    auth_token: "",
    number: "",
    AccessKey: "",
  });
  // const [contacts, setcontacts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  // input change through modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // after entering the input fields in main form and click on submit button
  // const handelSubmitForm = (e) => {
  //   e.preventDefault();
  //   setcredentials((prevDataSource) => [...prevDataSource, formData]);
  //   let credentials = {};

  //   console.log("---------------------------");
  //   console.log("formdata:", formData);
  //   console.log(formData["provider"]);
  //   console.log(credentialsObject[formData.provider], credentialsObject.twilio);
  //   credentialsObject[formData.provider].forEach((key) => {
  //     credentials[key] = formData[key];
  //     console.log("=>", key, ":", formData[key]);
  //   });
  //   console.log("final:::", credentials);

  //   console.log("---------------------------");
  //   setFormData({
  //     country: "",
  //     type: "",
  //     enableOrDisable: true,
  //     provider: null,
  //     ...credentials,
  //   });

  //   CredentialService.create({
  //     country: formData.country,
  //     type: formData.type,
  //     enabled: formData.enableOrDisable,
  //     provider: formData.provider,
  //     ...credentials,
  //   })
  //     .then((response) => {
  //       console.log("--------- create response ----------");
  //       console.log(response);
  //       console.log("--------- create response ----------");
  //     })
  //     .catch((err) => {
  //       console.log("---------- create error -----------");
  //       console.log(err);
  //       console.log("---------- create error -----------");
  //     });
  // };

  // to edit the field and to open modal00
  const handleEdit = (record, index) => {
    console.log(record);
    console.log({ ...record, ...record.credentials });
    setFormData({ ...record, ...record.credentials, index: index });
    setEditIndex(index);
    setShowModal(true);
  };

  // after editing in modal and save changes
  const handleSave = (e, index) => {
    e.preventDefault();
    
    setFormData({
      country: "",
      type: "",
      enableOrDisable: true,
      provider: "",
      sid: "",
      auth_token: "",
      number: "",
      AccessKey: "",
    });
    setEditIndex(-1);
    setShowModal(false);
   CredentialService.update(formData._id, formData).then((response) => {
    console.log("-------- response ----------");
    console.log(response);
    console.log("-------- response ----------");
    loadCredentials();
   }).catch(err => {
    console.log("error");
    console.log(err)
   })

    // update at server side,
    // 

    // console.log(credentials)
  };

  // delete the the row of data
  const handleDelete = (id, index) => {
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete =--> credentials ID =  ${credentials[index]._id} and provider =  ${credentials[index].provider} ?`
    //   )
    // ) {
    //   const newDataSource = [...credentials];
    //   newDataSource.splice(index, 1);
    //   setcredentials(newDataSource);
    //   // const newDataSource = [...credentials];
    //   // newDataSource.splice(credentials._id, 1);
    //   // setcredentials(newDataSource);
    //   // // step 1
    //   // console.log(credentials[index]._id);
    //   // // step 2 and 3
    //   // const findIdFromArray = credentials.findIndex((pram) => {
    //   //   return pram._id === credentials[index]._id;
    //   // });
    //   // credentials.splice(findIdFromArray, 1);
    //   // // console.log(credentials)
    //   // setcredentials(credentials);
    // }
    CredentialService.remove(id).then((response) => {
      console.log("------- response ----------");
      console.log(response.data);
      console.log("------- response ----------");
      loadCredentials();
    }).catch(err => {
      alert("some thing went wrong");
    })
  };

  // when click on close button modal will close
  const handleClose = () => {
    setEditIndex(-1);
    setShowModal(false);
  };

  // useNavigate
  const navigate = useNavigate();
  const naviagateToForm = () => {
    navigate("/");
  };
  // table row have all the contact details of spesific person
  // const renderRow = (record, index) => (
  //   <tr key={index}>
  //     <td>{record.firstName}</td>
  //     <td>{record.lastName}</td>
  //     <td>{record.email}</td>
  //     <td>{record.phone}</td>
  //     <td>{record.adress}</td>
  //     <td>{record.zip}</td>
  //     <td>
  //       <Button variant="primary" onClick={() => handleEdit(record, index)}>Edit</Button>{' '}
  //       <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
  //     </td>
  //   </tr>
  // );

  //   Render after select the twilio open three fiels
  const renderTwilioFields = () => {
    if (formData.provider === "twilio") {
      return (
        <>
          <div className="col-md-12 my-3">
            <input
              type="text"
              className="form-control form-control-lg custom-placeholder"
              placeholder="Side"
              name="sid"
              value={formData.sid}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12 my-3">
            <input
              type="text"
              className="form-control form-control-lg custom-placeholder"
              placeholder="Auth Token"
              name="auth_token"
              value={formData.auth_token}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12 mt-3">
            <input
              type="text"
              className="form-control form-control-lg custom-placeholder"
              placeholder="Number"
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
    if (formData.provider === "messageBird") {
      return (
        <div className="col-md-12 mt-3">
          <input
            type="text"
            className="form-control form-control-lg custom-placeholder"
            // placeholder='Access Key'
            name="AccessKey"
            value={formData.AccessKey}
            onChange={handleInputChange}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <button className="btn btn-danger my-2" onClick={naviagateToForm}>
          Navigate To Form
        </button>

        {/* Button and heading area */}
        <div class="d-flex justify-content-between ">
          <h5>
            Credentials{" "}
            <span className="opacity-50">({credentials.length})</span>{" "}
          </h5>
          <Link to="/">
            {" "}
            <button className="btn btn-coustom text-white d-flex mx-auto">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
              <div className="pl-3">Add New</div>
            </button>
          </Link>
        </div>

        <p>{JSON.stringify(credentials)}</p>
        {/* Table */}
        <table className="table table-borderless mt-4">
          <thead>
            <tr className="bg-light">
              <th style={{ width: "5%" }}>ID</th>
              <th style={{ width: "15%" }}>Country</th>
              <th style={{ width: "10%" }}>Enable</th>
              <th style={{ width: "15%" }}>Type</th>
              <th style={{ width: "15%" }}>Provider</th>
              <th style={{ width: "30%" }}>Credentials</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {credentials.map((cred, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cred.country}</td>
                {cred.enabled === true ? (
                  <td>Enabled</td>
                ) : cred.enabled === false ? (
                  <td>Disabled</td>
                ) : null}
                {/* <td>{cred.enabled}</td> */}
                <td>{cred.type}</td>
                <td>{cred.provider}</td>
                {cred.provider === "twilio" ? (
                  <td className="d-flex mx-0 gap-2 ">
                    <MDBTooltip tag="a" title={cred.credentials.sid}>
                      <p className="saidBg rounded px-3 text-success">cred</p>
                    </MDBTooltip>
                    <MDBTooltip tag="a" title={cred.credentials.auth_token}>
                      <p className="authToken rounded px-3">Auth Token</p>
                    </MDBTooltip>
                    <MDBTooltip tag="a" title={cred.credentials.number}>
                      <p className="numberBg rounded px-3 text-warning">
                        Number
                      </p>
                    </MDBTooltip>
                  </td>
                ) : cred.provider === "messageBird" ? (
                  <td className="d-flex mx-0 gap-2">
                    <MDBTooltip tag="a" title={cred.credentials.AccessKey}>
                      <p className="accessKey rounded px-3 text-primary">
                        Access Key
                      </p>
                    </MDBTooltip>
                  </td>
                ) : null}

                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(cred, index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>{" "}
                    </button>
                    <button
                      className="btn btn-danger mx-md-2"
                      onClick={() => handleDelete(cred._id, index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Credential</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Start form */}
          <form
            className="row g-3 mt-1"
            onSubmit={(e) => handleSave(e, editIndex)}
          >
            {/* <h5>Create New Credential</h5> */}
            {/* Countery */}
            <div className="col-md-12">
              <select
                className="form-select form-select-lg custom-opacity"
                // placeholder='Country'
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option selected className="box">
                  Select Countery
                </option>
                <option className="box">us</option>
                <option className="box">uk</option>
                <option className="box">pk</option>
              </select>
            </div>
            {/* Type */}
            <div className="col-md-12">
              {/* <input type="text" className="form-control form-control-lg custom-placeholder" placeholder='Type' name='type' value={formData.type} onChange={handleInputChange} /> */}
              <select
                className="form-select form-select-lg custom-opacity"
                placeholder="Type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                <option selected className="box">
                  Select Type
                </option>
                <option className="box">otp</option>
                <option className="box">marketing</option>
              </select>
            </div>
            {/* Enable */}
            <div className="col-md-12 ml-1">
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label opacity-50"
                  htmlFor="inlineRadio1"
                >
                  IS Enable {formData.enableOrDisable ? "checked" : "unchecked"}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="enableOrDisable"
                  checked={formData.enableOrDisable}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Provider */}

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
                  <option className="box">messageBird</option>
                  <option className="box">twilio</option>
                </select>
              </div>
              {renderMessageBirdFields()}
              {renderTwilioFields()}
            </div>

            <div className="col-12 d-flex flex-row-reverse gap-4 mt-4">
              <Button
                type="submit"
                variant=""
                className="btn btn-success text-white px-4"
              >
                Update
              </Button>
              <Button
                variant=""
                className="btn btn-info text-light px-4"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Table;
