import { Link } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';




const Header = () => {
  const getData=useSelector((state)=>state.CartReducer.carts)
  console.log(getData,"getData")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
<Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
  <Link to="/" className="text-decoration-none mx-3"> Add to Cart </Link>

          <Nav className="me-auto">
  <Link to="/cart" className="text-decoration-none"> cardetails </Link>          
        </Nav>
        <Badge badgeContent={getData.length} color="success"
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}>

<ShoppingCartIcon style={{color:"white"}}/>
</Badge>

        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {
          getData.length? 
          <div className="card_detils">
            <Table>
              <thead>
                <tr>
               <th>Photo</th>
               <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
             {
              getData.map((e)=>{
                return(
                  <>
                  <tr>
                    <td> 
                      <Link to={`/cart/${e.id}`}>
                      <img src={e.imgdata} alt="" style={{width:"5rem",height:"5rem"}}></img>
                       </Link>
                    </td>
                    <td>
                      <p>{e.rname}</p>
                      <p>price:{e.price}</p>
                      <p>quantity:{e.qnty}</p>
                      {/* <p style={{color:"red",fontsize:"20px",cursor:"pointer"}}><DeleteIcon className="smalltrash"/></p> */}
                    </td>
                    <td className="mt-5" style={{color:"red",fontsize:"20px",cursor:"pointer"}}>
                      <DeleteIcon className="largetrash" />
                    </td>
                  </tr>
                  <p>total:350</p>
                  </>
                )
              })
             }
              </tbody>
            </Table>
          </div>:(
            <div className="card_details d-flex justify-content-center align-items-center" style={{width:"14rem",padding:"10px",position:"relative"}}>
            <CloseIcon onClick={handleClose} style={{position:"absolute",top:"2",right:"10px",cursor:"pointer",fontSize:"25px"}}/>
            <p>your cart is empty</p>
            <img src="./image.gif" alt="" style={{width:"3rem"}}/>
                    </div>
                
          )
        }
          </Menu>
      </Navbar>
      
        
      </div>
  );
}
export default Header;
