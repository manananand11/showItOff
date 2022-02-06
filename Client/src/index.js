import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App';
import './index.css';

const theme = createTheme();
const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
         <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>

        
                <App />
            </ThemeProvider>
         </StyledEngineProvider>
    </Provider>
    ,document.getElementById('root'));


