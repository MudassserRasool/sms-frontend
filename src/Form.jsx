import React from 'react'
import { useState } from 'react'


const Form = () => {
    
    const [user, setuser] = useState({
        fName:'',
        lName:'',
        birthday:'',
        gender: 'male',
        email: '',
        phone: '',
        subject: ''
    })
    
  

    const handelInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setuser({...user, [name]: value })
    }

    const showData = (event) => {
        event.preventDefault();
        const myJSON = JSON.stringify(user);

        alert(myJSON)
        console.log(myJSON)
    }
    return (
        <div className=''>
            <form action="" className='rounded w-50 bg-white mx-auto mt-5 '>
                <h3 className='text-left p-4 text-gray'>Registeration Form</h3>
                <div className="container px-4 py-2">

                    {/* First Row */}
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="firstName" className='form-label'>First Name</label><label title="" className='text-danger'>*</label>
                            <input type="text" name="fName" id="" className='form-control' onChange={handelInput} value={user.fName}  autoComplete='off'/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="lastName" className='form-label'>Last Name</label><label title="" className='text-danger'>*</label>
                            <input type="text" name="lName" id="" className='form-control' onChange={handelInput} value={user.lName} />
                        </div>
                    </div>

                    {/* Second Row */}
                     <div className="row mt-md-2">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="date" className='form-label'>Birthday</label><label title="" className='text-danger'>*</label>
                            <input type="date" name="birthday" id="" className='form-control' onChange={handelInput} value={user.birthday}  pattern="\d{4}-\d{2}-\d{2}"/>
                        </div>
                         <div className="col-sm-12 col-md-6">
                            <label className="form-check-label">Gender</label><label title="" className='text-danger'>*</label>
                            <div className='mt-sm-3'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="genderId" checked={user.gender === 'male'}  onChange={handelInput} value={"male"}/>  
                                    <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="genderId" checked={user.gender === "female"} onChange={handelInput} value={"female"}/>
                                    <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
                                </div>
                            </div>
                        </div> 
                    </div> 

                    {/* Third Row */}
                     <div className="row mt-md-2">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="email" className='form-label'>Email</label><label title="" className='text-danger'>*</label>
                            <input type="email" name="email" id="" className='form-control' onChange={handelInput} value={user.email} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="phone" className='form-label'>Phone Number</label><label title="" className='text-danger'>*</label>
                            <input type="text" name="phone" id="" className='form-control' onChange={handelInput} value={user.phone} />
                        </div>
                    </div> 

                    {/* Fourth Row */}
                      <div className="row mt-md-2">
                        <div className="col">
                            <label htmlFor="subject" className='form-label'>Subject</label><label title="" className='text-danger'>*</label>
                            <select className="form-select" aria-label="Default select example" name='subject' onChange={handelInput} value={user.subject}>
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>  
                    <div className="d-grid d-md-block mt-2">
                        <button type='submit' className='btn btn-primary d-grid' onClick={(e)=>showData(e)}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form