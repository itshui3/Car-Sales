// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducers/reducer'
// My Components
import App from './App';
// Styles
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
<Router>
<App />
</Router>
</Provider>

, rootElement);
