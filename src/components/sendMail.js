import React, { useState } from 'react';
import axios from 'axios';

function SendMail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, message);
    const data = {
      to: email,
      subject,
      text: message,
    };
    try {
      await axios.post("http://localhost:5000/api/sendMail", data);
      console.log("Email sent successfully");
      // Optionally, handle the success here, e.g., show a success message
    } catch (error) {
      console.log(error);
      // Optionally, handle the error here, e.g., show an error message
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 300px)' }}>
      <div className='form-control' style={{ background: '#fff8dc', border: '1px solid #ccc', padding: '50px', borderRadius: '8px', maxWidth: '400px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Mail Address: </label>
            <input type='email' placeholder='Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Enter Subject: </label>
            <input type='text' placeholder='Subject' className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Enter Message: </label>
            <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <br></br>
          <div align="center">
            <button type="submit" className="btn btn-primary">Send Email</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMail;
