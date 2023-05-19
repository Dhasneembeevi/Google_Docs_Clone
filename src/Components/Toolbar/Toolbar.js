import React from 'react';
import "./Toolbar.css";

const Toolbar = ({ onUndo, onRedo, onFormat }) => {
  return (
    <div className="toolbar">
      <div className="formatting-options">
        <div className='tool-box'>

          <button onClick={() => onFormat('bold')}>Bold</button>
          <button onClick={() => onFormat('italic')}>Italic</button>
          <button onClick={() => onFormat('underline')}>Underline</button>
          <button className="undo-button" onClick={onUndo}>
            Undo
          </button>
          <button className="redo-button" onClick={onRedo}>
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;


