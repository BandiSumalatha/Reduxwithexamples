import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protecuted = () => {
    const auth=JSON.parse(localStorage.getItem('loggedin'))
  return (
    <div>{auth?<Outlet/>:<Navigate to={"/Login"}/>
        }</div>
  )
}

export default Protecuted;