import React from 'react';
import './App.css';

function Progress (props) {

  return (
    <div>
      <h2 className="Progress">Question {props.current} of {props.total}</h2>
    </div>
  );
}

export default Progress;
