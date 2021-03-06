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

            suggested_reading: 'You seem to be unhappy on a frequent basis. Perhaps you should read:',
            book_link: "https://www.amazon.com/Happiness-Hypothesis-Finding-Modern-Ancient/dp/0465028020",
            // book_link: is passed into the <a href=""></a>
            link_text: '"The Happiness Hypothesis by Jonathan Haidt".'
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

            suggested_reading: 'You may be struggling with your sense of purpose. Perhaps you should read:',
            book_link: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X",
            link_text: '"Mans Search for Meaning by Vicktor Frankl".'
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

            suggested_reading: 'You may need some better habits. Perhaps you should read:',
            book_link: "https://www.amazon.com/Mini-Habits-Smaller-Bigger-Results/dp/1494882272",
            link_text: '"Mini Habits by Stephen Guise".'
        },
        {
            id: 4,
            question: 'I am a great leader. I do not need any more teaching.',

            number_1: 'I strongly disagree',
            number_2: 'I somewhat disagree',
            number_3: 'I neither agree nor disagree',
            number_4: 'I agree',
            number_5: 'I strongly agree',

            incorrect_answer1: '1',
            incorrect_answer2: '2',
            incorrect_answer3: '3',

            suggested_reading: 'You realize your leadership skills could always be better, thats great! Consider reading:',
            book_link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=asc_df_0671027034/?tag=hyprod-20&linkCode=df0&hvadid=312721175982&hvpos=1o2&hvnetw=g&hvrand=6085091545799626101&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011355&hvtargid=aud-801381245258:pla-432445153110&psc=1",
            link_text: '"How to Win Friends and Influence People by Dale Carnegie".'
        },
        {
            id: 5,
            question: 'Money is not an issue for me. I neither need it nor want it',

            number_1: 'I strongly disagree',
            number_2: 'I somewhat disagree',
            number_3: 'I neither agree nor disagree',
            number_4: 'I agree',
            number_5: 'I strongly agree',

            incorrect_answer1: '1',
            incorrect_answer2: '2',
            incorrect_answer3: '3',

            suggested_reading: 'Based on your answer to question 5, we recommend:',
            book_link: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle-dp-B008BUHTLE/dp/B008BUHTLE/ref=mt_audio_download?_encoding=UTF8&me=&qid=",
            link_text: '"Rich Dad Poor Dad by Robert T. Kiyosaki".'
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
      const resultElement = <div className="ResultElement" key={question.id} >
      {question.suggested_reading}
      <a href={question.book_link} target="_blank">
        {question.link_text}
      </a>
      </div>;
      return resultElement
    } else if (question.incorrect_answer2 === answer.answer) {
      const resultElement =
        <div className="ResultElement" key={question.id} > {question.suggested_reading}
          <a href={question.book_link} target="_blank">
            {question.link_text}
          </a>
        </div>;
      return resultElement
    } else if (question.incorrect_answer3 === answer.answer) {
      const resultElement =
        <div className="ResultElement" key={question.id} > {question.suggested_reading}
          <a href={question.book_link} target="_blank">
            {question.link_text}
          </a>
        </div>;
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
