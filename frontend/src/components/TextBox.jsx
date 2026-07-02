import React from 'react';

const TextBox = ({ value, onChange, placeholder, label, id, type = 'text' }) => {
  return (
    <div className="text-box-container">
      {label && <label htmlFor={id} className="text-box-label">{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-box-input"
      />
    </div>
  );
};

export default TextBox;
