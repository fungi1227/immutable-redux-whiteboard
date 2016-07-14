import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducer';
//import { TodoList } from './containers';
import { Application } from './components/application';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app')
);
