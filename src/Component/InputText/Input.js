import React from 'react';
import './Input.scss';

export default function Input (props) {
  function onInputHandler (e) {
    if (props.categoryVal) props.categoryVal (e);
    if (props.searchVal) props.searchVal (e);
  }

  return (
    <div
      style={props.style}
      className={`input-section ${props.className && props.className.join (' ')}`}
    >
      <input
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onInput={onInputHandler}
      />
    </div>
  );
}
