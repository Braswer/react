import React from "react";
import { withTranslation } from "react-i18next";

const Web = ({ t }) => {
    return(
        <div className="texts">
            <div id="sezionepersonale" className="website">
                <div className="contentbox">
                    <div className="typewriter web">
                        <h1>{t("website.title1")}</h1>
                    </div>
                    <div className="presentation">
                    <p>
                        {t("website.content1.row1")}<br /><br />
                        {t("website.content1.row2")}<br /><br />
                        {t("website.content1.row3")}<br /><br />
                        <a href="https://github.com/braswer/ciprianilorenzo.com.git" target="_blank" rel="noreferrer">GITHUB</a>
                    </p>
                    </div>
                    <div className="typewriter otherprojects">
                        <h1>{t("website.title2")}</h1>
                    </div>
                    <div className="presentation">
                    <p>{t("website.content2")}<br /><br />
                        <a href="https://github.com/braswer" target="_blank" rel="noreferrer">GITHUB</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default withTranslation()(Web);