import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/images.png";

const Container=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f18c18;
  background-size:cover ;
  overflow: auto;
  
  @media (max-width: 600px) {
    font-size: 10px;
    .pic{
      max-width: 500px;
      
    }
    .b{
      width: 410px;
    }
  }
  .pic{
    width: 500px;
  }

  li{
    list-style: none;
    padding-right:15px;
  }
  nav{
    display: flex;
    width: 100%;
    height: 20%;
    background-color: rgba(0,0,0,0.5);
    color: white;
    align-items: center;
  }
  ul{
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
   img{
    width: 80%;
    height: 44%; }
  
  .Container2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 1000;
    font-size: 2rem;
    margin: 0;
    align-items: center;
  }
  button {
    background-color: green;
    color: white;
    height: 30px;
    width: 100px;
    border-radius: 15px;
    border-style: hidden;
    margin-top: 20px;
  }
  h3 {
    margin: 20px;
    font-size: 1em;
    font-weight: bold;
  }
  a{
    color: white;
    text-decoration: none;
  }
 
`;

function Spoty() {
  const [val ,setVal]=useState(0);
  const incrementVal=()=>{ setVal(val+1)}
  return (
   <Container className='main'>
    <nav className='b'>

     <div className='pic' ><img src={logo} alt=''/></div>
      <ul>
        <li>Premium</li>
        <li>Help</li>
        <li>Download</li>
        <li>|</li>
        <li>Sign up</li>
        <li><a  className href='Login' >Login</a></li>
     </ul>
    </nav>
    <div className='Container2'>
      <h1 className='content'>Music for everyone.</h1>
      <h1 className='content'>Millions of Songs .</h1>
      <h3 className='content'>Count:{val}</h3>
      <button className='content' onClick={incrementVal}>Update</button>
    </div>
   </Container>
  )
}

export default Spoty