import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import buildingReducer from './reducers/buildingReducer';
import { Provider } from 'react-redux'

let initialState = [{ id: 1, name: 'House 1', floor: 3, color: 'Orange' }, { id: 2, name: 'House 2', floor: 5, color: 'Alizarin' },
    { id: 3, name: 'House 3', floor: 2, color: 'Belize' }, { id: 4, name: 'House 4', floor: 4, color: 'Emerald' }
];

if (localStorage.getItem("buildings") === null)
    localStorage.setItem('buildings', JSON.stringify(initialState));
else
    initialState = JSON.parse(localStorage.getItem('buildings'));

const store = createStore(buildingReducer, initialState);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();