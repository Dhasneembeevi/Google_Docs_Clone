import React, { useState } from 'react';
import "./Sidebar.css"
const Sidebar = () => {
  const [summary, setSummary] = useState('Summary text');
  const [editMode, setEditMode] = useState(false);
  const [editedSummary, setEditedSummary] = useState('');

  const enableEdit = () => {
    setEditMode(true);
    setEditedSummary(summary);
  };

  const saveSummary = () => {
    setSummary(editedSummary);
    setEditMode(false);
  };

  return (
    <div className="left-box">
      <div className="summary">
        <span>{summary}</span>
        {editMode ? (
          <div className='edited-box'>
            <button className="save-button" onClick={saveSummary}>Save</button>
            <button className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <button className="edit-button" onClick={enableEdit}>Edit</button>
        )}
      </div>
      {editMode && (
        <textarea
          className="edit-textbox"
          value={editedSummary}
          onChange={(e) => setEditedSummary(e.target.value)}
        />
      )}
    </div>
  );
};

export default Sidebar;
