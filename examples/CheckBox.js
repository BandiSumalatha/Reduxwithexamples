import React,{useState} from 'react'

const CheckBox = () => {
    const [check,setCheck]=useState([])
const handleChange=(event)=>{
    const checked=event.target.value;
    if(checked){
        setCheck(prev=>[...prev,checked])
    }
    }
    console.log(check)

  return (
    <div>
        <label>php</label>
        <input  type="checkbox" value="php" onChange={handleChange}/>
        <input  type="checkbox" value="JS" onChange={handleChange}/>
        <input  type="checkbox" value="React" onChange={handleChange}/>
    </div>
  )
}

export default CheckBox