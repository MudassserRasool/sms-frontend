import { React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './assets/style.css'
import '../table/assets/styles.css'
import credApi, { CredentialService } from "../../shared/services/credentials";
const credentialsObject = {
    "twilio": ["sid", "number", "auth_token"],
    "messageBird": ["AccessKey"]
};

const Form = () => {

    const [formData, setFormData] = useState({
        country: '',
        type: '',
        enableOrDisable: true,
        provider: '',
        sid: '',
        auth_token: '',
        number: '',
        AccessKey: ''
    });
    console.log('kuch provider' + formData.provider)
    const [contacts, setcontacts] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    // input change through modal
    const handleInputChange = e => {
        const { name, value, checked, type } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: type === "checkbox" ? checked : value }));
    };

    // after entering the input fields in main form and click on submit button
    const handelSubmitForm = e => {
        e.preventDefault();
        setcontacts(prevDataSource => [...prevDataSource, formData]);
        let credentials = {};

        console.log("---------------------------");
        console.log("formdata:", formData);
        console.log(formData["provider"]);
        console.log(credentialsObject[formData.provider], credentialsObject.twilio);
        credentialsObject[formData.provider].forEach((key) => {
            credentials[key] = formData[key];
            console.log("=>", key, ":", formData[key]);
        });
        console.log("final:::", credentials)

        console.log("---------------------------");
        setFormData({
            country: '',
            type: '',
            enableOrDisable: true,
            provider: null,
            ...credentials
        });

        CredentialService.create({
            country: formData.country,
            type: formData.type,
            enabled: formData.enableOrDisable,
            provider: formData.provider,
            ...credentials
        }).then((response) => {
            console.log("--------- create response ----------");
            console.log(response)
            console.log("--------- create response ----------");
        }).catch(err => {
            console.log("---------- create error -----------");
            console.log(err);
            console.log("---------- create error -----------");
        })
    };

    // to edit the field and to open modal
    const handleEdit = (record, index) => {
        setFormData(record);
        setEditIndex(index);
        setShowModal(true);
    };

    // after editing in modal and save changes
    const handleSave = (e, index) => {
        e.preventDefault();
        const newDataSource = [...contacts];
        newDataSource.splice(index, 1, formData);
        setcontacts(newDataSource);
        setFormData({
            country: '',
            type: '',
            enableOrDisable: true,
            provider: '',
            sid: '',
            auth_token: '',
            number: '',
            AccessKey: ''
        });
        setEditIndex(-1);
        setShowModal(false);
    };

    // delete the the row of data
    const handleDelete = index => {
        if (window.confirm(`Are you sure you want to delete =--> ${contacts[index].provider} ${contacts[index].number} ?`)) {
            const newDataSource = [...contacts];
            newDataSource.splice(index, 1);
            setcontacts(newDataSource);
        }
    };

    // when click on close button modal will close
    const handleClose = () => {
        setEditIndex(-1);
        setShowModal(false);
    };

    // table row have all the contact details of spesific person
    const renderRow = (record, index) => (
        <tr key={index}>
            <td>{record.country}</td>
            <td>{record.type}</td>
            <td>{record.enableOrDisable}</td>
            <td>{record.provider}</td>
            <td>{record.sid}</td>
            <td>{record.auth_token}</td>
            <td>{record.number}</td>
            <td>{record.AccessKey}</td>
            <td>
                <Button variant="primary" onClick={() => handleEdit(record, index)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
            </td>
        </tr>
    );

    // "twilio", "messageBird"

    //   Render after select the twilio open three fiels
    const renderTwilioFields = () => {
        if (formData.provider === "twilio") {
            return (
                <>
                    <div className="col-md-12 my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg custom-placeholder"
                            placeholder='Side'
                            name="sid"
                            value={formData.sid}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-12 my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg custom-placeholder"
                            placeholder='Auth Token'
                            name="auth_token"
                            value={formData.auth_token}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-12 mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg custom-placeholder"
                            placeholder='Number'
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

// useNavigate
// const navigate = useNavigate()
// const naviagateToTable = ()=>{
// navigate('/table')
// }
    return (

        
        <div>
            <div className="container mt-4">
            {/* <button className='btn btn-primary' onClick={naviagateToTable}>Navigate to Table</button> */}
                {/* Start form */}
                <form className="row g-3 mt-4" onSubmit={handelSubmitForm}>
                    <h5>Create New Credential</h5>
                    {/* Countery */}
                    <div className="col-md-12">
                    {/* custom-opacity */}
                        <select className="form-select form-select-lg custom-opacity"
                            // placeholder='Country'
                            name='country'
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option selected className="box"> Select Countery</option>
                            <option className="box">us</option>
                            <option className="box">uk</option>
                            <option className="box">pk</option>
                        </select>
                    </div>
                    {/* Type */}
                    <div className="col-md-12">
                        {/* <input type="text" className="form-control form-control-lg custom-placeholder" placeholder='Type' name='type' value={formData.type} onChange={handleInputChange} /> */}
                        <select className="form-select form-select-lg custom-opacity"
                            placeholder='Type'
                            name='type'
                            value={formData.type}
                            onChange={handleInputChange}
                        >
                            <option selected className="box">Select Type</option>
                            <option className="box">otp</option>
                            <option className="box">marketing</option>
                        </select>
                    </div>
                    {/* Enable */}
                    <div className="col-md-12 ml-1">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label opacity-50" htmlFor="inlineRadio1">IS Enable {formData.enableOrDisable ? 'checked' : 'unchecked'}</label>
                            <input className="form-check-input" type="checkbox" name="enableOrDisable" checked={formData.enableOrDisable} onChange={handleInputChange} />
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

                    <div className="col-12 d-flex flex-row-reverse gap-4 btnDiv">
                        <button type="submit" className="btn btn-coustom text-white px-4">Create</button>
                        <button type="submit" className="btn btn-light text-secondary px-4">Cancel</button>
                    </div>
                </form>

            </div>

            {/* <h2 className='mt-4'>All Contacts</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>countery</th>
                        <th>type</th>
                        <th>check</th>
                        <th>provider</th>
                        <th>sid</th>
                        <th>auth</th>
                        <th>number</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((record, index) => renderRow(record, index))}
                </tbody>
            </table> */}

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={e => handleSave(e, editIndex)}>
                    <div className="col-md-12 mb-3">
                        <select className="form-select form-select-lg custom-opacity"
                            placeholder='Country'
                            name='country'
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option selected className="box">Select Countery</option>
                            <option className="box">us</option>
                            <option className="box">uk</option>
                            <option className="box">pk</option>
                        </select>
                    </div>
                                           {/* Type */}
                    <div className="col-md-12 mb-3">
                        {/* <input type="text" className="form-control form-control-lg custom-placeholder" placeholder='Type' name='type' value={formData.type} onChange={handleInputChange} /> */}
                        <select className="form-select form-select-lg custom-opacity"
                            placeholder='Type'
                            name='type'
                            value={formData.type}
                            onChange={handleInputChange}
                        >
                            <option selected className="box">Select Type</option>
                            <option className="box">otp</option>
                            <option className="box">marketing</option>
                        </select>
                    </div>
                        <div className="mb-3">
                            <label className="form-check-label opacity-50" htmlFor="inlineRadio1">IS Enable {formData.enableOrDisable ? 'checked' : 'unchecked'}</label>
                            <input className="form-check-input" type="checkbox" name="enableOrDisable" checked={formData.enableOrDisable} onChange={handleInputChange} />
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
                        <div className="mt-3">
                            <Button variant="primary" type="submit">Save Changes</Button>
                            <Button variant="dark" onClick={handleClose} className='mx-2'>close</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Form