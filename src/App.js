import './index.scss';

const questions = [
  {
    title: 'The React is ... ?',
    variants: ['framework', 'application', 'library'],
    correct: 2,
  },
  {
    title: 'The component is ... ',
    variants: ['application', 'part of an application or page', 'what I don\'t know what is'],
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
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed 3 answers out of 10</h2>
      <button>Try again</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>What is useState?</h1>
      <ul>
        <li>This is a function to store component data</li>
        <li>This is a global state</li>
        <li>This is when no one needs you</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
