import React from 'react';
import './MarkdownEditor.css';

const MarkdownEditor = ({ markdownContent, onMarkdownChange }) => {
  return (
    <div className="editor">
      <h2>Code Editor</h2>
      <textarea
        className="editor-textarea"
        value={markdownContent}
        onChange={(e) => onMarkdownChange(e.target.value)}
        placeholder="Write your markdown here..."
      ></textarea>
    </div>
  );
};

export default MarkdownEditor;
