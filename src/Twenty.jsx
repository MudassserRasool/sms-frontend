import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Twenty = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    adress: '',
    zip: ''
  });
  const [contacts, setcontacts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  // input change through modal
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // after entering the input fields in main form and click on submit button
  const handelSubmitForm = e => {
    e.preventDefault();
    setcontacts(prevDataSource => [...prevDataSource, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      adress: '',
      zip: ''
    });
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
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      adress: '',
      zip: ''
    });
    setEditIndex(-1);
    setShowModal(false);
  };

  // delete the the row of data
  const handleDelete = index => {
    if (window.confirm(`Are you sure you want to delete =--> ${contacts[index].firstName} ${contacts[index].lastName} ?`)) {
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
      <td>{record.firstName}</td>
      <td>{record.lastName}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{record.adress}</td>
      <td>{record.zip}</td>
      <td>
        <Button variant="primary" onClick={() => handleEdit(record, index)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
      </td>
    </tr>
  );

  return (
    <div className="container">
      <h1 className='text-center text-bold mx-auto bg-danger'>Contact Management System</h1>
      <h2 className='mt-4'>Enter Contacts</h2>
      <form onSubmit={handelSubmitForm}>
        {/* first row */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
        </div>
        {/* Second Row */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
        </div>
        {/* Third row */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="adress" className="form-label">Adress</label>
            <input type="text" className="form-control" id="adress" name="adress" value={formData.adress} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="zip" className="form-label">Zip Code</label>
            <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
          </div>
        </div>
        <Button variant="primary" type="submit">Submit</Button>
      </form>

      <h2 className='mt-4'>All Contacts</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Adress</th>
            <th>zip</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((record, index) => renderRow(record, index))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={e => handleSave(e, editIndex)}>
            <div className="mb-3">
              <label htmlFor="editFirstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="editFirstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="editLastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="editLastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="adress" className="form-label">Adress</label>
              <input type="text" className="form-control" id="adress" name="adress" value={formData.adress} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="zip" className="form-label">Zip Code</label>
              <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
            </div>
            <Button variant="primary" type="submit">Save Changes</Button>
            <Button variant="dark" onClick={handleClose} className='ml-2'>close</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Twenty