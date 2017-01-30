import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ToDoApp from './components/TodoContainer';

// const todoStore = createStore()

const container = document.querySelector('#container');

render(<ToDoApp />, container);
