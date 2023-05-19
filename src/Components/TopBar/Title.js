import React, { useState } from 'react';
import "./Title.css";
import img1 from "../../Images/google_docs-1.jpeg"


const Title = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('My Document');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform any save operation here, such as updating the document title in a database
    console.log('Saved title:', title);
  };

  return (
    <div className='top-title'>
      <img src={img1} alt="google_doc" className='google_doc' />
      {isEditing ? (
        <input className='edit-input'
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleSaveClick}
          autoFocus
        />
      ) : (

        <h3 onClick={handleEditClick} className='title'>{title}</h3>
      )}
    </div>
  );
};

export default Title;
