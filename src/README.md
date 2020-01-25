This document is an attempt at understanding the code below.


const renderResultsData = () => {
  const resultArray =  answers.map( answer => { // This says for each answer in
    answers array, map some value defined below:

    // find something in the questions array, then send that to question
    const question = questions.find(

      question => question.id === answer.answerId
                  // currentQuestion.id === currentAnswer.question.id

      // question.id is equal to answer
    );

    if (question.incorrect_answer1 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} >  {question.suggested_reading}</div>;
      return resultElement
    } else if (question.incorrect_answer2 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} > {question.suggested_reading}</div>;
      return resultElement
    } else if (question.incorrect_answer3 === answer.answer) {
      const resultElement = <div className="ResultElement" key={question.id} > {question.suggested_reading}</div>;
      return resultElement
    }
  });
  return resultArray
};
