import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Add your form submission logic here
    alert("submited");
    console.log('Form Data:', formData);
  };

  return (
    <form
      id='form'
      className='text-center'
      style={{
        width: '100%',
        maxWidth: '300px',
        margin: '50px auto 0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
      onSubmit={handleSubmit}
    >
      <h2>Contact us</h2>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Email address:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Subject:
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Message:
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        ></textarea>
      </label>

      <label style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
        Send me copy:
        <input
          type='checkbox'
          name='sendCopy'
          checked={formData.sendCopy}
          onChange={handleChange}
          style={{ marginLeft: '5px' }}
        />
      </label>

      <button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
        Send
      </button>
    </form>
  );
}
