import logo from './logo.svg';
import Layout from './Admin/Layout/Index';
import React from 'react';
import Login from './Admin/Content/Login'

import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Login />  
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
