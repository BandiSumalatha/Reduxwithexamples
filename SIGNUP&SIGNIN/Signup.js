import React,{useState} from 'react'
import { Paper,Box ,TextField} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate()

    const [input,setInput]=useState({
        name:'',
        email:'',
        password:'',
    })


const handleSubmit=(e)=>{
e.preventDefault()
localStorage.setItem('user',JSON.stringify(input))
navigate('/Login')
    }


  return (
    <div>
        <form onSubmit={handleSubmit
        }>
 <Box
      sx={{
    
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 500,
        },
      }}
    >
      
      
      <Paper  elevation={4} style={{borderRadius:"25px"}}>
        <h3 style={{textAlign:'center'}}>Registration form</h3>
        <div style={{margin:'5rem'}}>
        <div >
            <label>name</label>
        <TextField 
        name='name'
        value={input.name}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        fullWidth />
        <br/>
        <br/>

        </div>
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
        <h6>have already an account? <Link to='/Login'>Login</Link></h6>

        </div>
      
        </Paper>
    </Box>

    </form>  
    </div>
  )
}

export default Signup