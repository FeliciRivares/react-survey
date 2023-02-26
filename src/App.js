import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'The React is ... ?',
    variants: ['Framework',
               'Application',
               'Library'],
    correct: 2,
  },
  {
    title: 'The component is ... ',
    variants: ['Application',
               'Part of an application or page',
               'What I don\'t know what is'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'This is plain HTML',
       'This is a function',
       'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
  {
    title: 'HTML is program language ?',
    variants: [
      'Yes',
      'No',
    ],
    correct: 1,
  },
  {
    title: 'What is React Router?',
    variants: [
      'Is a collection of navigational components',
      'This is a function',
      'This is React Roadmaps',
    ],
    correct:0,
  },
  
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='correct'/>
      <h2>You guessed {correct} answers out of {questions.length}</h2>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percent = Math.round((step / questions.length)  * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0)
  const question =  questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1);
    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/> 
        ) : (
          <Result correct={correct} />)
      }
    </div>
  );
}

export default App;
