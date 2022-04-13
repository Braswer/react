import React, { useContext } from "react";
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeContext } from "./themes";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
