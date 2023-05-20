import React,{ useState,useEffect} from 'react'

const CheckBoxSample = () => {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        occupation:'',
        gender:'',
        language:[]
    })

    const onChangeHandler=(e)=>{
        if(e.target.name==='Language'){
            let copy={...formData}

         if(e.target.checked){
            copy.language.push(e.target.value)
         }else{
          copy.language=copy.language.filter(element=>element!==e.target.value)
         }
         setFormData(copy)
        }else{
            setFormData(
                {...formData,[e.target.name]:e.target.value}
            )
          
        }
    }
    
    const handleSubmit=(event)=>{
        console.log(formData)
        event.preventDefault()
    }
    useEffect(()=>{
        const formData1= JSON.parse(localStorage.getItem('hello'))
        setFormData((pre)=>({...pre,...formData1}))
        },[])
    useEffect(()=>{
        localStorage.setItem('hello',JSON.stringify(formData))
    })

   
  return (
    <div>

<form onSubmit={handleSubmit}>

        <label>userName</label>
        <input type='text' name='username' onChange={onChangeHandler}    value={formData.username}      />
        <br />
        <label>email</label>
        <input  type='text' name='email' onChange={onChangeHandler}  value={formData.email}       />
        <br />

<label>occupation</label>
<select name='occupation' onChange={onChangeHandler} value={formData.occupation}>
<option value='student'>student</option>
<option value='employee'>Employee</option>
<option value='other'>Other</option>
</select>

    <label>gender</label>
    <input type='radio' name='gender' value='male'  onChange={onChangeHandler}    checked={formData.gender==='male'}      /> 
    <label>Male</label>
    <input type='radio' name='gender' value='female' onChange={onChangeHandler}   checked={formData.gender==='female'}        /> 
    <label>Female</label>
    <input type='radio' name='gender' value='others'   onChange={onChangeHandler}   checked={formData.gender==='others'}      /> 
    <label>Others</label>


<label>Languages</label>

<input type='checkbox' name='Language' value='Html' onChange={onChangeHandler} checked={formData.language.indexOf('Html')!==-1}/> 
<label>Html</label>
<input type='checkbox' name='Language' value='CSS' onChange={onChangeHandler} checked={formData.language.indexOf('CSS')!==-1}/> 
<label>CSS</label>
<input type='checkbox' name='Language' value='Javascript' onChange={onChangeHandler} checked={formData.language.indexOf('Javascript')!==-1}/> 
<label>Javascript</label>

 
<button type='submit'>Submit</button>
    
</form>
    </div>
  )
}

export default CheckBoxSample