import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';


function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState({
    date: '',
    month: '',
    year: '',
  });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form-group submission logic here
    console.log('form-group submitted:', {
      firstName,
      lastName,
      gender,
      dob,
      phone,
      email,
      designation,
      address,
      city,
      state,
      aadhaar,
      pan,
      password,
      confirmPassword,
    });
  };

  const handleDateChange = (event, field) => {
    setDob({ ...dob, [field]: event.target.value });
  };

  return (
    <div className="container2">
      <div className="form-container">
        <form-group onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div className="radio-group">
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth*</label>
            <div className="date-group">
              <select
                id="date"
                value={dob.date}
                onChange={(e) => handleDateChange(e, 'date')}
                required
              >
                <option value="">Date</option>
                {/* Add date options here */}
              </select>
              <select
                id="month"
                value={dob.month}
                onChange={(e) => handleDateChange(e, 'month')}
                required
              >
                <option value="">Month</option>
                {/* Add month options here */}
              </select>
              <select
                id="year"
                value={dob.year}
                onChange={(e) => handleDateChange(e, 'year')}
                required
              >
                <option value="">Year</option>
                {/* Add year options here */}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Residential Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City*</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State*</label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select</option>
              {/* Add state options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="aadhaar"  onChange={(e) => setFirstName(e.target.value)}
              required
              onBlur={(e) => {
                // Access the input field value here
                const userInput = e.target.value;
                console.log('Blur event on First Name:', userInput);
              }} >Aadhaar Number*</label><hr/>
           
          </div>
          <div className="form-group">
            <label htmlFor="pan">PAN Card Number</label>
            <input
              type="text"
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" contenteditable="true">Password*</label>
            <hr/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={true} // Assuming you agree to the terms
              onChange={(e) => {
                // Handle checkbox change
              }}
            />
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form-group>
        <p className="login-text">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="illustration-container">
        <div className="illustration">
          {/* Illustration of a person working on a laptop with graphs and charts */}
        </div>
      </div>
      
    </div>
  );
}

export default Register;