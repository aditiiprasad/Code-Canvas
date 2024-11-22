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
  const [wordCount, setWordCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    
    const savedMarkdown = localStorage.getItem('markdown');
    if (savedMarkdown) {
      setMarkdownContent(savedMarkdown);
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleMarkdownChange = (content) => {
    setMarkdownContent(content);
    
    localStorage.setItem('markdown', content);

    // Calculate Word Count
    const words = content.trim().split(/\s+/).filter((word) => word !== '').length;
    setWordCount(words);

    // Calculate Read Time (assuming 200 words/min reading speed)
    const time = Math.ceil(words / 200);
    setReadTime(time);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
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
      <div className="stats-container">
        <p>Word Count: {wordCount}</p>
        <p>Estimated Read Time: {readTime} min</p>
      </div>
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
