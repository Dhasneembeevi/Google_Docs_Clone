import React, { useState, useRef } from 'react';
import "./TextEditor.css";
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from "../Sidebar/Sidebar";
import Right from "../Rightbar/Right"

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const textEditorRef = useRef(null);

  const handleContentChange = (event) => {
    const newContent = event.target.innerHTML;
    setContent(newContent);
    setHistory((prevHistory) => [...prevHistory.slice(0, currentStep + 1), newContent]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleUndo = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setContent(history[previousStep]);
      setCurrentStep(previousStep);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      const nextStep = currentStep + 1;
      setContent(history[nextStep]);
      setCurrentStep(nextStep);
    }
  };

  const handleFormat = (format) => {
    document.execCommand(format, false, null);
    textEditorRef.current.focus();
  };


  return (
    <div className='doc-body'>
      <Sidebar />
      <Toolbar
        onUndo={handleUndo}
        onRedo={handleRedo}
        onFormat={handleFormat}
      />
      <div
        ref={textEditorRef}
        className="text-editor"
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={handleContentChange}
      />
      <Right />
    </div>
  );
};

export default TextEditor;

