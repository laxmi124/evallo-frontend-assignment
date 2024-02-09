import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContentPreview.css'; // Import CSS file for styling

const ContentPreview = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get('https://strange-ray-mittens.cyclic.app/api/content');
        setContents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContents();
  }, []);

  return (
    <div className="content-preview-container">
      <h2 className="preview-heading">Content Preview</h2>
      <ul className="content-list">
        {contents.map((content) => (
          <li key={content._id} className="content-item">
            <div className="content-details">
              <h3 className="content-title">{content.title}</h3>
              <p className="content-description">{content.description}</p>
            </div>
            <a href={content.mockFile} className="content-link">View Mock File/Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentPreview;
