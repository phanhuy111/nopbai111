import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './Component/reducer/index'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
