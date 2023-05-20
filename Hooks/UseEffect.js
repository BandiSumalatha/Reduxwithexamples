import React ,{useState,useEffect}from 'react'

const UseEffect = () => {
  const [time,setTime]=useState(new Date());
  console.log(time,"time")

  useEffect(()=>{
 const interval=   setTimeout(()=>{
      setTime(new Date())
      console.log("time is update")
    },6000)
      return()=>{
clearInterval(interval)
console.log('interval is cleared')
      }

  },[time])
  return (
    <div>
      {time.toLocaleTimeString()}
    </div>
  )
}

export default UseEffect;