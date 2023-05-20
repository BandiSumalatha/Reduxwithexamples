//  esLint-disable


import React, { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';





const CardDetails = () => {
  // const [data,setData]=useState()
  const {id}=useParams()
  console.log(id,"id")


  const getData=useSelector((state)=>state.cartReducer.carts)
  console.log(getData)

  
// useEffect(()=>{

//   const compare=()=>{
    
//     let compareData=getData.filter((e)=>{
//       return e.id===id
//     })
//     setData(compareData)
//   }
//   compare()
//   //eslint-disable-next-line
// },[id,getData])
// console.log(data,"data")
return (
  <div className='container mt-2' style={{boxShadow:"5px 5px 10px #555", paddingBottom:"70PX",width:"65rem"}}>
<h2 className='stext-center'> Item details page</h2>
{
  getData.map((ele)=>{
    return(
      <>
      <div className='itemdetails d-flex justify-content-center align-items-center'>
  <div className='items_img' style={{position:"relative",right:"20px"}}>
<img src={ele.imgdata} alt="" style={{height:"16rem"}}          />
</div>
<div className='details' style={{width:"30rem"}}>
<Table>
  <tr>
    <td>
    <p><strong>Restaurant</strong>: Massala Theory </p> 
    <p><strong>Price</strong>: ₹300</p>
    
    <p><strong>Dishes</strong>:North Indian, Biryani Mughal</p>
    <p><strong>Total</strong>: ₹300</p>
    </td>
    <td>
      <p><strong>Rating:</strong><span style={{background:"green",padding:"2px 5px",borderRadius:"5px"}}>3.5</span></p>
      <p><strong> Order Review :</strong><span >1175+order placed from here recently</span></p>
      <p><strong>Rating:</strong><span ><i><DeleteIcon style={{
color:"red",fontSize:"20PX",pointer:"cursor"
      }}/></i></span></p>
    </td>
  </tr>
</Table>
</div>
</div>
      </>
    )
  })
}
<section className='container mt-3 '>


</section>

    </div>
  )
}

export default CardDetails