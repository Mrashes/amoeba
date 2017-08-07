import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Todo from './Todo';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <div><Welcome name="Sara" /><Todo/></div>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );