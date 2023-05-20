import React,{useState,useEffect} from 'react'

const ApiUsingErrorHandling = () => {
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState("");
    const [users,setUsers]=useState([])

useEffect(()=>{
const getUsers=async()=>{
await fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>{
    if(res.status>=400){
    throw new Error("server responds with error")
}else{
    return res.json()
}
}).then(user=>{
    setLoading(true)
    setUsers(user)
}).catch(err=>{
    setErr(err)
    setLoading(false)
})
    
} 
getUsers();    
},[])


  return (
    <div>{err?
        (
        <div>{err.message}</div>
        ): !loading ? (
        <p>loading .....</p>
        ):(
        <div>{users && users.length>0 && users.map((item)=>{
            return(
                <div>{item.title}</div>
            )
        })}</div>)}</div>
  )
}

export default ApiUsingErrorHandling