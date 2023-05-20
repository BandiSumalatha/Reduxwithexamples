import React,{useEffect, useState} from 'react'

const NewForm = () => {
    const [form, setForm]=useState({
        name:'',
        email:'',
        description:'',
        country:'',
        agree:false,
        gender:'',
    })
    const onChange=(e)=>{
        const {value,name,type,checked}=e.target;
        setForm((state)=>({...state,[name]:type==='checkbox'? checked:value}))
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(form)
    }
    useEffect(()=>{ 
        const newData=JSON.parse(localStorage.getItem('user'))
    setForm((pre)=>({...pre,...newData}))
    
    },[])
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(form))
    })
  return (
    <div>
        <form onSubmit={onSubmit}>
        <label>name</label>
        <input  type='text' name="name"  onChange={onChange} value={form.name}/>
        <label>email</label>
        <input  type='text' name="email" onChange={onChange}  value={form.email} />
        <textarea name='description' onChange={onChange}      value={form.description} />
        <select onChange={onChange} name='country' value={form.country}>
            <option value='us'>us</option>
            <option value='canada'>canada</option>
            <option value='ukraine'>ukraine</option>

        </select>
        <label>gender</label>
        <input type='radio' value='Male' name='gender' onChange={onChange} checked={form.gender==='Male'}/>Male
        <input type='radio' value='Female' name='gender' onChange={onChange} checked={form.gender==='Female'}/>Female
        <input type='radio' value='Other' name='gender' onChange={onChange} checked={form.gender==='Other'}/>other

<label>agree</label>
 <input  type='checkbox' name="agree"  onChange={onChange} value={form.agree}/>

<button type='submit'>submit</button>
</form>
    </div>
  )
}

export default NewForm