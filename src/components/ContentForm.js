import React, { useState } from 'react';
import axios from 'axios';
import './ContentForm.css'; // Import CSS file for styling

const ContentForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mockFile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://strange-ray-mittens.cyclic.app/api/content', formData);
      alert('Content submitted successfully');
      setFormData({ title: '', description: '', mockFile: '' }); // Clear form fields after submission
    } catch (error) {
      console.error(error);
      alert('Error submitting content');
    }
  };

  return (
    <div className="content-form-container">
      <h2 className="form-heading">Submit Content</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="mockFile"
          placeholder="Mock File/Link"
          value={formData.mockFile}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContentForm;
