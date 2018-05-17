import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { timeline } from './reducers/timeline-reducer'
import thunkMiddleware from "redux-thunk"

/*const reducers = combineReducers({
  timeline
})*/

const thunk = applyMiddleware(thunkMiddleware)
const store = createStore(timeline, thunk)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
