import React from 'react'
import { Box,Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("loggedin")
    navigate('/Login')
  }

  const userDetails=JSON.parse(localStorage.getItem('user'))
  return (
    <div>

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
        <div>
          <p  style={{textAlign:'center'}}>        name:{userDetails.name} <br></br>email:{userDetails.email}</p>
        
        <button type='submit'
         style={{display:'flex',justifyContent:'center',
         alignItems:'center',margin:'auto'}} onClick={handleLogout}>Logout</button>
        </div>

        </Paper>
</Box>
    </div>
  )
}

export default Home