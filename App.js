// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import './App.css';
// import NewForm from './SIGNUP&SIGNIN/NewForm';
// import CheckBoxAsync from './SIGNUP&SIGNIN/CheckBox';
// import CheckBox from './examples/CheckBox';
// import UseEffect from './Hooks/UseEffect';
// import Header from './redux/Components/NavBar';
// import Card1 from './redux/Components/Card';
//  import CardDetails from './redux/Components/CardDetails';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
 import Header from './SIGNUP&SIGNIN/Header';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import ApiUsingErrorHandling from './apis/ApiUsingErrorHandling';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Clock from './Hooks/Clock';
import Home from './SIGNUP&SIGNIN/Home';
import Login from './SIGNUP&SIGNIN/Login';
import Signup from './SIGNUP&SIGNIN/Signup';
import Protecuted from './SIGNUP&SIGNIN/Protecuted';
// import LocalDropdown from './SIGNUP&SIGNIN/LocalDropdown';

//  import CheckBoxSample from './SIGNUP&SIGNIN/CheckBoxSample';

const App = () => {

  return (
    <div>
          {/* <NewForm/> */}

      {/* <CheckBox/> */}
      {/* <CheckBoxAsync/> */}
{/* <UseEffect/> */}
{/* <BrowserRouter>
<Header/>
      <Routes>
        <Route path="/" exact element={<Card1 />}/>
          <Route path="/Cart/:id" exact element={<CardDetails />} />
      </Routes>
    </BrowserRouter> */}
{/* <Clock/> */}

<BrowserRouter>
<Header/>
      <Routes>
      <Route path="/" element={<Protecuted/>}                       />

        <Route path="/" exact element={<Home />}/>
        <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter> 
    
<ApiUsingErrorHandling/>
 {/* <LocalDropdown/> */}
 {/* <CheckBoxSample/> */}
    </div>
  )
}

export default App


// function App(props) {
// function App({codeState,changeName,changeID}) {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     console.log('btn click');
//     changeName('New Name - '+count);
//   },[count]);




//   const chngIDfn = () => {
//     changeID('changed id -'+count);
//   }

//   return (
//     <div className="App">
//       <h1>Redux Test</h1>
//       <p>{codeState.name} - {codeState.userID}</p>
//       <button onClick={()=>setCount(val=>val+1)}>Change Counter {count}</button>
//       <button onClick={chngIDfn}>Change ID</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     codeState: state
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: (name)=>{ dispatch({type:'SET_NAME', payload: name})},
//     changeID: (idd)=>{ dispatch({type:'SET_ID', payload: idd})}
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
