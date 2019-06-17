import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import StaticText from './components/StaticText';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Hiragino Sans", Meiryo, sans-serif;
  }
`;

const render = () => {
  ReactDOM.render(
    <>
      <StaticText text="hello world" />
      <GlobalStyle />
    </>,
    document.getElementById('app')
  );
};

render();
