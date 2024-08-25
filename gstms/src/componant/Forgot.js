import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
  };

  return (
    <div className="container1">
      <div className="right">
        <form onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <p>Enter your email address associated with<br/> your account to recover your password</p>
          <div className="form-group">
           
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
          </form>
          <div className='footer'>
          <p>Back to <Link to="/login">Login</Link></p>
        </div>  
      </div>
    </div>
  
  );
}

export default App;