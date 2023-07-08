import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Logcontainer = styled.div`
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

  .container1 {
    background-color: white;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 10px;
    align-items: center;
    padding-top: 20px;
    border-radius: 20px;
    overflow: auto;
    max-width: 500px; /* Limit the width for smaller screens */
  }

  .heading {
    text-align: center;
  }

  .loginform {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10px;
  }

  #Pswd {
    margin-bottom: 10px;
  }

  .clear {
    height: 20px;
    margin-top: 40px;
  }

  .button-secondary {
    background: #0a72d4;
    height: 25px;
    width: 100%;
    margin-left: 0; /* Reset the margin */
    margin-top: 10px; /* Add some spacing */
    border: none;
    outline: none;
    font-size: 18px;
  }
`;

const Login = () => {
  return (
    <Logcontainer>
      <form action="" method="get">
        <div className="container1">
          <div className="heading">
            <h3>Login</h3>
          </div>
          <div className="loginform">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              type="email"
              name=""
              id="email"export default 
              placeholder="Enter email"
              className="card-box"
              pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}"
              title="Enter a valid email format"
              required
            />
            <label htmlFor="Pswd">
              <b>Password:</b>
            </label>
            <input
              type="password"
              name=""
              id="Pswd"
              placeholder="Enter password"
              className="card-box"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <input type="checkbox" id="showPassword" className="clear" />
            <label htmlFor="showPassword">Show password</label>
            <input type="submit" value="SIGN IN" className="button-secondary" />
            <div className="footer">
              <h4>
                Forgot <a href="#">Username/Password?</a>
              </h4>
            </div>
            <div className="hover">
              <h4>
                Don't have an account? <a href="#">Sign Up</a>
              </h4>
            </div>
          </div>
        </div>
      </form>
    </Logcontainer>
  );
};

export default Login;
