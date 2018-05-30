import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './component/app/app'; // remove after deployment
import categoriesReducer from './reducer/category';
import './styles/main.scss';

const middleware = {};
const store = createStore(
  categoriesReducer, 
  composeWithDevTools(applyMiddleware(...middleware)),
);

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);