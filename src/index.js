import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Modules/Login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
