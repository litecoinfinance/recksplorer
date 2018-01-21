import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { DataStore } from './DataStore.js';

// Create mobx datastore
var store = new DataStore();

// Remove default css styles
import 'normalize.css';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
