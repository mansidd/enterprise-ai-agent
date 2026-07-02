import React, { useState } from 'react';
import Dashboard from "./pages/Dashboard";
import TextBox from "./components/TextBox";

export default function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Dashboard />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2>Text Box Component Demonstration</h2>
        <p>This is a demonstration of the new reusable <code>TextBox</code> component.</p>
        <TextBox
          id="nameInput"
          label="Your Name"
          placeholder="Enter your full name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>You typed: <strong>{inputValue}</strong></p>
      </div>
    </>
  );
}