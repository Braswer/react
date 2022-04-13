import React, {  useContext } from "react";
import { ThemeContext } from "../themes";


const LDToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
        <div id="ld" className="ld" onClick={() => toggleTheme()}></div>
    );
  };
  
  export default LDToggle;