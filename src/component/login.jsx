import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
// import "./Login.css";

const LoginForm = () => {
 const history=useNavigate(); 
  
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [token, setToken] = useState(null)
  
  const handleSliderClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  // Login
  const [formData, setFormData] = useState({
    Mobile: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(formData);
  };

  const sendData = async (data) => {
    try {
      // console.log(data);
      const response = await axios.post('http://localhost:5000/login', data);
      
      console.log(response.data);
      setToken(response.data.token);
      if (response.status === 200) {
        // Redirect to /index
        

        localStorage.setItem('token', response.data.token);
        history("/");
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  // Signin
  const [formData2, setFormData2] = useState({
    Mobile: '',
    password: '',
    name: '',
    post: '',
  });

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    sendData2(formData2);
  };

  const sendData2 = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="scroll">
        <header>
          <img src="images/group-1.svg" alt="not found" width="100" height="100" />
          <div className="logotext">
            <h1 className="heading">एक इंच</h1>
            <h3 className="title">आगे बड़े शौक से</h3>
          </div>
        </header>
        <div className="container">
          <div className="slider" onClick={handleSliderClick}></div>
          <div className="btn">
            <button
              className={`login ${isLoginFormVisible ? 'active' : ''}`}
              onClick={() => setIsLoginFormVisible(true)}
            >
              Login
            </button>
            <button
              className={`signup ${!isLoginFormVisible ? 'active' : ''}`}
              onClick={() => setIsLoginFormVisible(false)}
            >
              Signup
            </button>
          </div>

          <div
            className={`form-section ${
              isLoginFormVisible ? '' : 'form-section-move'
            }`}
          >
            <form className="login-box" onSubmit={handleSubmit} method="post" action="/login">
              <input
                type="Number"
                name="Mobile"
                className="email ele"
                placeholder="Mobile Number"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="password ele"
                placeholder="password"
                onChange={handleChange}
              />
              <button type="submit" className="clkbtn">
                <p className="buttoncolor">Login</p>
              </button>
              <div className="forgotpw"> Forgot Security PIN?</div>
            </form>

            <form className="signin-box" method="post" onSubmit={handleSubmit2} action="/signup">
              <div className="signup-box">
                <input
                  type="text"
                  name="name"
                  className="name ele"
                  placeholder="Enter your name"
                  onChange={handleChange2}
                />
                <input
                  type="number"
                  name="Mobile"
                  className="email ele"
                  placeholder="Mobile Number"
                  onChange={handleChange2}
                />
                <input
                  type="password"
                  name="password"
                  className="password ele"
                  placeholder="Password"
                  onChange={handleChange2}
                />
                <input
                  type="string"
                  name="post"
                  className="password ele"
                  placeholder="Post or Profession"
                  onChange={handleChange2}
                />
                <button type="submit" className="clkbtn">
                  <p className="buttoncolor">Signup</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
