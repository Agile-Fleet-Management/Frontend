import React from 'react';

const Login: React.FC = () => (
  <div className="wrapper">
    <form action="">
      <h1>SmartFleet</h1>
      <div className="input-box">
        <input type="text" placeholder="Admin" required />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i className='bx bxs-lock'></i>
      </div>

      <div className="remember-forgot">
        <label> <input type="checkbox" /> Remember me</label>
        <a href="#"> Forgot password?</a>
      </div>
      <button type="submit" className="btn"> Login</button>
      <div className="register-link">
      </div>
    </form>
  </div>
);

export default Login;