import React from 'react';
import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';
import './Preview.css';

const Preview = ({ markdownContent }) => {
  const markdown = marked(markdownContent); // Convert markdown to HTML using marked

  return (
    <div className="preview">
      <h2 className='name'>Live Preview</h2>
      <div
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  );
};

export default Preview;
