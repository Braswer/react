import React from "react";
import { withTranslation } from "react-i18next";

const Home = ({ t }) => {
        return(
            <div className="texts">
                <div className="container">
                    <div id="sezionepersonale" className="personal">
                        <div className="headpers typewriter">
                            <h1 className="writed1">{t("home.line1")}</h1>                       
                        </div>
                        <div className="lorenzo typewriter">
                            <h1 className="writed2">Lorenzo</h1>
                        </div>
                        <div className="cipriani typewriter">
                            <h1 className="writed3 surname">CIPRIANI</h1>
                        </div>
                        <div className="presentation">
                            {t("home.description.row1")}<br /><br />
                            {t("home.description.row2")}<br /><br />
                            {t("home.description.row3")}<br /><br />
                            {t("home.description.row4")}<br /><br />
                            {t("home.description.row5")}
                        </div>
                    </div>
                </div>
            </div>

        )
}

export default withTranslation()(Home);