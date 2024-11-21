import React, { useState } from 'react';
 
const CodeSnippet = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
 
  const codeSnippets = ['Mend.zone', 'AnotherSnippet', 'MoreCodeHere'];
 
  const handleCopy = async (snippet, index) => {
    try {
      await navigator.clipboard.writeText(snippet);
      setIsCopied(true);
      setCopiedIndex(index);
      setTimeout(() => {
        setIsCopied(false);
        setCopiedIndex(null);
      }, 2000); 
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
 
  return (
    <div>
      {codeSnippets.map((snippet, index) => (
        <div key={index}>
          <pre>{snippet}</pre>
          <button onClick={() => handleCopy(snippet, index)}>
            {isCopied && copiedIndex === index ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      ))}
    </div>
  );
};
 
export default CodeSnippet;
