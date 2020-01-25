import React from 'react';
import './App.css';

function Question(props) {
  return (
    <h1 className="QuestionHeader">{props.question}</h1>
  );
}

export default Question;
