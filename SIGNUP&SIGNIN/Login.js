import React,{useState} from 'react'
import { Paper,Box ,TextField} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate()

    const [input,setInput]=useState({
        email:'',
        password:'',
    })

  const handleLogin=(e)=>{
e.preventDefault()
const loggedUser=JSON.parse(localStorage.getItem('user'))
if(input.email===loggedUser.email&&input.password===loggedUser.password){
  localStorage.setItem("loggedin",true)
  navigate('/')
}
else{
  alert('you have entered incorrenct email and password')
}
  }


  return (
    <div style={{position:"relative", left:"500px"}}>
 <form onSubmit={handleLogin}>
 <Box
      sx={{
    
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
         }}
    >
      
      
      <Paper  elevation={4} style={{borderRadius:"25px"}}>
        <h3 style={{textAlign:'center'}}>Login form</h3>
        <div style={{margin:'5rem'}}>
        
                    <div>
        <label>email</label>

        <TextField 
        name='email'
        value={input.email}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        fullWidth />
               <br/>
<br/>
        </div>
        <div>
        <label>password</label>
        <TextField 
        name='password'
        value={input.password}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        fullWidth />
        <br/>
        <br/>
<button type='submit'>SUMBMIT</button>
        </div>
        <h6>have already an account? <Link to='/Signup'>Signup</Link></h6>

        </div>
      
        </Paper>
    </Box>

    </form>  
    </div>


  
  )
}

export default Login