import React from "react";

import { useTranslation } from "react-i18next";


const LanguageSelector = () => {

    const { i18n } = useTranslation();


    const changeLanguage = (event) => {

        i18n.changeLanguage(event.target.value);

    };



    return (

        <div >
            <button id="langen2" className="langen2" value="en" name="language" onClick={ changeLanguage }></button>
            <button id="langen" className="langen" value="it" name="language" onClick={changeLanguage }></button>
        </div>

    );

};


export default LanguageSelector;