import React from 'react';
import { BrowserRouter, Route} from "react-router-dom"

import Routes from "./routes/routes"
import Global from './styles/Global';

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
