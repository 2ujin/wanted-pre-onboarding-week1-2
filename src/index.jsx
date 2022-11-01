import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

// style
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="wrapper">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
