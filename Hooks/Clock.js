import React ,{useEffect, useState}from 'react'
// import UseEffect from './UseEffect'
// const Clock = () => {
//     const [displayTimer,setDisplayTimer]=useState(true)
//   return (
//     <div>
//         {displayTimer?<UseEffect/>:null}
//         <button onClick={()=>setDisplayTimer(!displayTimer)}>toggole</button>
//     </div>
//   )
// }

// export default Clock


const Clock = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
document.title=`you have clicked ${count} times`
console.log(`you have cliked ${count} times`)
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clcik Me</button>
    </div>
  )
}

export default Clock