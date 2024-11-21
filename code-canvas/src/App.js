import React, { useState, useEffect } from 'react';
import './App.css';
import MarkdownEditor from './MarkdownEditor';
import Preview from './Preview';
import fileDownload from 'js-file-download'; 
import { marked } from 'marked';  
import Header from './Header';
import Footer from './Footer';
function App() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    
    const savedMarkdown = localStorage.getItem('markdown');
    if (savedMarkdown) {
      setMarkdownContent(savedMarkdown);
    }
  }, []);

  const handleMarkdownChange = (content) => {
    setMarkdownContent(content);
    
    localStorage.setItem('markdown', content);
  };

 
  const exportToHtml = () => {
    const htmlContent = marked(markdownContent);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    fileDownload(blob, 'exported.md.html');
  };


  const exportToMd = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    fileDownload(blob, 'exported.md');
  };

  return (
    <div className="App">
      <Header/>
      <div className="editor-container">
        <MarkdownEditor markdownContent={markdownContent} onMarkdownChange={handleMarkdownChange} />
        <Preview markdownContent={markdownContent} />
      </div>
      <div className="export-buttons">
        <button onClick={exportToHtml}>Export as HTML</button>
        <button onClick={exportToMd}>Export as .md</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
