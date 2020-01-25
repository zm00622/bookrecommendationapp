import React from 'react';
import Answer from './Answer.js';

function Answers(props) {
  return(
    <div>
      <Answer
        number="1"
        answer={props.question.number_1}
        handleClick={props.handleClick}
        selected={props.currentAnswer === '1'}
      />
      <Answer
        number="2"
        answer={props.question.number_2}
        handleClick={props.handleClick}
        selected={props.currentAnswer === '2'}
      />
      <Answer
        number="3"
        answer={props.question.number_3}
        handleClick={props.handleClick}
        selected={props.currentAnswer === '3'}
      />
      <Answer
        number="4"
        answer={props.question.number_4}
        handleClick={props.handleClick}
        selected={props.currentAnswer === '4'}
      />
      <Answer
        number="5"
        answer={props.question.number_5}
        handleClick={props.handleClick}
        selected={props.currentAnswer === '5'}
      />




    </div>
  );
}

export default Answers;
