/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: none !important;
    box-sizing: border-box !important;
    outline-color: transparent !important;
  }
  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  ul, li {
    list-style:none;
  }
  button {
    cursor:pointer;
  }
  a {
    text-decoration: none;
  }

  .alert_error {
    background: #9c3b31 !important;
    border-radius: 6px !important;
    box-shadow: 0px 0px 12px 4px #00000094 !important;
  }
  .alert_success {
    background-color: #4c5596 !important;
    border-radius: 4px !important;
  }
`;
