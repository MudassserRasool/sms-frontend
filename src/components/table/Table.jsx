import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import { CredentialService } from "../../shared/services/credentials";
import { MDBTooltip } from 'mdb-react-ui-kit';

const Table = ({ contacts }) => {
  console.log('first= ' + contacts)

  const [credentials, setcredentials] = useState([])
  useEffect(() => {
    loadCredentials();
  }, [])


  function success(response) { }
  const handleFailed = (error) => { }

  // function handleFailed(err) { }

  function loadCredentials() {
    CredentialService.get()
      .then((response) => {
        console.log("---------------response----------------");
        console.log(response)
        console.log("---------------response----------------");
        setcredentials([...response.data.data]);
      }).catch(handleFailed)
  }



  return (
    <div>
      <div className="container mt-4">
        {/* Button and heading area */}
        <div class="d-flex justify-content-between ">
          <h5>Credentials <span className='opacity-50'>({credentials.length})</span> </h5>
          <button className="btn btn-coustom text-white d-flex mx-auto">
            <div className='mr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle icon" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <div className='pl-3'>Add New</div>
          </button>
        </div>

        {/* <p>{JSON.stringify(credentials)}</p> */}
        {/* Table */}
        <table className="table table-borderless mt-4">
          <thead>
            <tr className='bg-light'>
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
            {
              credentials.map((cred, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{cred.country}</td>
                  {cred.enabled === true ? (
                    <td>Enabled</td>
                  ) : cred.enabled === false ? (
                    <td>Disabled</td>
                  ) : (null)}
                  {/* <td>{cred.enabled}</td> */}
                  <td>{cred.type}</td>
                  <td>{cred.provider}</td>
                  {cred.provider === 'twilio' ?
                    (
                      <td className='d-flex mx-0 gap-2 ' >
                        <MDBTooltip tag='a' title={cred.credentials.sid}>
                        <p className='saidBg rounded px-3 text-success'>cred</p>
                        </MDBTooltip>
                        <MDBTooltip tag='a' title={cred.credentials.auth_token}>
                        <p className='authToken rounded px-3'>Auth Token</p>
                        </MDBTooltip>
                        <MDBTooltip tag='a' title={cred.credentials.number}>
                        <p className='numberBg rounded px-3 text-warning'>Number</p>
                        </MDBTooltip>
                      </td>
                    ) : cred.provider === 'messageBird' ? (
                      <td className='d-flex mx-0 gap-2'>
                         <MDBTooltip tag='a' title={cred.credentials.AccessKey}>
                        <p className='accessKey rounded px-3 text-primary'>Access Key</p>
                        </MDBTooltip>
                      </td>
                    ) : (null)}

                  <td>
                    <div className='d-flex'>
                      <button className='btn btn-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>  </button>
                      <button className='btn btn-danger mx-md-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Table
