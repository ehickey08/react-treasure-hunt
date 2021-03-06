import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import * as reset from './styling/reset.css';
import * as global from './styling/global.css';
import * as balloon from './styling/balloon.css';

import { StateProvider } from './contexts/StateProvider';
import { initialState } from './reducers/initialState';
import { mainReducer } from './reducers/mainReducer';

import App from './App';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
    ${balloon}
`;

const theme = {
  darkGray: '#3b3f3f',
  lightGray: '#efefef',
  mediumGray: '#515959',
  darkAccent: '#7dcdbe',
  lightAccent: '#d3e5e6',
  lightOrange: '#fbe8c5',
  mediumOrange: '#f8ce85',
  darkOrange: '#dcae5f',
  // darkerOrange: '#c98a1d',
  darkerOrange: '#ef6c00',
  mono: "'Source Code Pro', monospace"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
      </StateProvider>
    </>
  </ThemeProvider>,
  document.getElementById('root')
);
