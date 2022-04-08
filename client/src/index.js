@@ -2,8 +2,1777 @@ import React from 'react';
import ReactDOM from 'react-dom';	import ReactDOM from 'react-dom';
import './index.css';	import './index.css';
import App from './App';	import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'


ReactDOM.render(	ReactDOM.render(
    <App />,	    <BrowserRouter>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>

    </BrowserRouter>,
  document.getElementById('root')	  document.getElementById('root')
); 
