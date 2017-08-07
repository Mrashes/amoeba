import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Todo from './Todo';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();