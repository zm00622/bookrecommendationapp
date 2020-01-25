import React, {useState} from 'react';
import Progress from './Progress.js';
import Question from './Question.js';
import Answers from './Answers.js';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');

// Testing commit from Github Desktop

  const questions = [
        {
            id: 1,
            question: 'I am usually happy',

            number_1: 'I strongly disagree',
            number_2: 'I somewhat disagree',
            number_3: 'I neither agree nor disagree',
            number_4: 'I agree',
            number_5: 'I strongly agree',

            incorrect_answer1: '1',
            incorrect_answer2: '2',
            incorrect_answer3: '3',

            suggested_reading: 'You seem to be unhappy on a frequent basis. Perhaps you should read "The Happiness Hypothesis by Jonathan Haidt".',
        },
        {
            id: 2,
            question: 'I feel as though my life has a sense of purpose',

            number_1: 'I strongly disagree',
            number_2: 'I somewhat disagree',
            number_3: 'I neither agree nor disagree',
            number_4: 'I agree',
            number_5: 'I strongly agree',

            incorrect_answer1: '1',
            incorrect_answer2: '2',
            incorrect_answer3: '3',

            suggested_reading: 'You may be struggling with your sense of purpose. Perhaps you should read "Mans Search for Meaning by Victor Frankl".',
        },
        {
            id: 3,
            question: 'I feel as though I have great habits',

            number_1: 'I strongly disagree',
            number_2: 'I somewhat disagree',
            number_3: 'I neither agree nor disagree',
            number_4: 'I agree',
            number_5: 'I strongly agree',

            incorrect_answer1: '1',
            incorrect_answer2: '2',
            incorrect_answer3: '3',

            suggested_reading: 'You may need some better habits. Perhaps you should read "Mini Habits: Smaller Habits, Bigger Results by Stephen Guise".',
        },
    ];

  let suggested = <a href="https://www.meaningfullife.com/50-reasons-why-your-life-matters/" target="_blank">"50 Reasons You Matter!"</a>;

  const question = questions[currentQuestion];

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    setError(''); // Once user clicks on option, set error msg to empty
  };

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>
  }

//__________________________________________

// Show the questions on the results page, as well as whether or not the user is correct
// const, arrow functions, map and find are all things you need to understand to understand the below
const renderResultsData = () => {

  const resultArray =  answers.map( answer => {
    const question = questions.find(
      question => question.id === answer.answerId
      // question.id is equal to answer
    );

    if (question.incorrect_answer1 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} >  {question.suggested_reading} </div>;
      return resultElement
    } else if (question.incorrect_answer2 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} >  {question.suggested_reading} </div>;
      return resultElement
    } else if (question.incorrect_answer3 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} >  {question.suggested_reading} </div>;
      return resultElement
    }
  });
  return resultArray
};

const renderDoingWell = () => {
    const doingWell = <div className="ResultElement"  > If there are no reading recommendations then you must be doing well. Either way, thanks for using the app. We hope this has been helpful. Click the home icon to return to the home page or click restart to take the quiz again.</div>;
    return doingWell
};

  //__________________________________________

  // Reset quiz onClick of restart button
  const restart = () => {
    setAnswers([]);
    setCurrentAnswer('');
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const next = () => {
    const answer = {answerId: question.id, answer: currentAnswer};
    // currentAnswer

    if (!currentAnswer){
      setError('Please select an answer');
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowResults(true); // Because after this next function, you'll be at the results page
  };

  if (showResults) { // If finished quiz, display results & restart button
    return (
      <div className="container">
        <a className="IconLink" href=""><i className="home icon"></i></a>
        <h2>Our Book Recommendations</h2>
          <p>{renderResultsData()}</p>
          <p>{renderDoingWell()}</p>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else { // If quiz not finished, display current question and answers
    return (
      <div className="container">
      <a className="IconLink" href="http://www.riseoverlimits.com"><i className="home icon"></i></a>
        <h1>Book Recommendation App</h1>
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question question={question.question} />
        {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button className="btn btn-primary" onClick={next}>
          Confirm and Continue
        </button>
      </div>
    );
  }
} // End bracket for App

export default App;




// function Answer(props) {
//
//   return (
//     <button value={props.letter} >
//       <span className="letter">{props.letter}</span> {props.answer}
//     </button>
//   );
// }
//
// export default Answer;
