import {React, useState} from 'react'

const Practice = () => {
    const [data, setdata] = useState([])
    const [value, setvalue] = useState('')

    let InputValue;
    const handelInput = (event)=>{
        InputValue = event.target.value;
        let InputName = event.target.name;
        let newDta= {...value, [InputName]:InputValue}
        setvalue(newDta)
        console.log(value)
    }
  return (
    <div>
        <label htmlFor="">name</label>
        <input type="text" name='name'  onChange={handelInput}/>
    </div>
  )
}

export default Practice