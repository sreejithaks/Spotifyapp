import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import styled from "styled-components";

const MainContainer=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0d6dda;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  overflow: auto;

  @media (max-width: 250px) {
    max-width: 250px;
    .container2{
        padding: 10px;
    }
    
  }
  
  .container2{
    background-color: white;
    width: auto;
    height: auto;
    max-width: 100%;
    justify-content: center; 
    padding: 20px;
    align-items: center;
    padding-top: 20px;
    border-radius: 20px;
   

  }

  .heading{
    text-align: center;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  .labels{
    text-align: left;
  }
  
  .inp{
    height: 30px;
    width: 210px;
    margin-bottom: 20px;
  }

  #submitbtn{
    margin-top: 15px;
    background-color: #187718;
    color: white;
    border: #187718;
    border-radius: 10px;
  }
   
  .para2{
    padding-top: 2px;
  }

  `;
  

function Register() {
  return (
    <MainContainer>
    <div className='container2'>
      <form action="">
      <h2 className='heading'>Register</h2>
      <label htmlFor="email" className='labels'>Email</label>
      <input type="email" onChange={(e)=>setVal(e.target.value)} className='inp' placeholder='email' id='email'/>
      <label htmlFor="password" className='labels' id='label1'>Username</label>
      <input type="text" className='inp' placeholder='username' id='username'/>
      <label htmlFor="password" className='labels' id='label2'>Password</label>
      <input type="password" className='inp' placeholder='password' id='password'/>
      <label htmlFor="password" className='labels' id='label2'>Confirm password</label>
      <input type="password" className='inp' placeholder='confirm password' id='cpassword'/>
      <label htmlFor="checkbtn" id='showpasswd'><input type="checkbox" id='checkbtn'/>  show password</label>
      <input type="submit" className='inp' value="SIGN UP" id='submitbtn'/>
      </form>
      <h5 className='para2'>Already have an account? <a href="./Login">Sign in</a></h5>
    </div>
    </MainContainer>
  )
}

export default Register